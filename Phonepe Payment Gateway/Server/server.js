const express = require('express');
const axios = require('axios');
const crypto = require('crypto');   //Used to create a checksum using sha-256 for secure transactions. Ensures value hasn't been altered
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');  //Used to generate a unique id for each transaction

const app = express();

app.use(express.json());
app.use(cors());


const MERCHANT_KEY="96434309-7796-489d-8924-ab56988a6076"  //Secret key
const MERCHANT_ID="PGTESTPAYUAT86"

// const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
// const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/status"

const MERCHANT_BASE_URL="https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
const MERCHANT_STATUS_URL="https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status"

const redirectUrl="http://localhost:8000/status"   //url where phonepe redirects after payment. After this redirection, server checks if the transaction is a success or a failure

const successUrl="http://localhost:5173/payment-success"   //url redirected in case of success payment
const failureUrl="http://localhost:5173/payment-failure"    //url redirected in case of failure of payment


app.post('/create-order', async (req, res) => {

    const {name, mobileNumber, amount} = req.body;  //Requires name, mobileNumber and amount as the body 
    const orderId = uuidv4()  //generates a unique id for the transaction

    //payment
    const paymentPayload = {    //This is the payload that phonepe requires to initiate the payment    
        merchantId : MERCHANT_ID,
        merchantUserId: name,
        mobileNumber: mobileNumber,
        amount : amount * 100,   //Transaction always happens in paisa, so we multiply with 100
        merchantTransactionId: orderId,
        redirectUrl: `${redirectUrl}/?id=${orderId}`,  //This is the redirect url. We attach the order id at the end of the url
        redirectMode: 'POST',   //HTTP method by which phonepe sends the user back to the server
        paymentInstrument: {
            type: 'PAY_PAGE'    //The Payment mode is through Phonepe's payment page
        }
    }

    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')  //Converts paymentPayload to base-64 string
    const keyIndex = 1   //Key used to sign the transaction (security purpose)
    const string  = payload + '/pg/v1/pay' + MERCHANT_KEY  //Consrtucting a new string using the base 64 string
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')  //Uses sha 256 to hash the string (constructed above) for secure communication
    const checksum = sha256 + '###' + keyIndex  //Ensures the integrity of the payload. At the end, checksum is a cryptographic hash

    const option = {    //This will be sent to the phonepe api
        method: 'POST',    //We are sending data to the phonepe server using the post method
        url:MERCHANT_BASE_URL,   //This is the URL to which the request is being sent. In this case, its the phonepe endpoint for initiating the transactions
        headers: {   //headers contain extra information about the request, which is mainly required for security information
            accept : 'application/json',   //This tells the phonepe server that the response, for our server, should be in json format
            'Content-Type': 'application/json',  //This tells the server that the request is in json format
            'X-VERIFY': checksum   //Phonepe requires this criteria to ensure the integrity of the transaction request
        },
        data :{
            request : payload    //This is the actual data sent to the Phonepe server. This is the base-64 string
        }
    }
    try {
        
        const response = await axios.request(option);   //Sends option to the Phonepe server
        console.log(response.data.data.instrumentResponse.redirectInfo.url)  //If successful, then logs the redirect url and responds with it
         res.status(200).json({msg : "OK", url: response.data.data.instrumentResponse.redirectInfo.url})
    } catch (error) {
        console.log("error in payment", error)   //Logs the error
        res.status(500).json({error : 'Failed to initiate payment'})   //Responds with the error
    }

});


app.post('/status', async (req, res) => {   //This routing function is used to check the payment status
    const merchantTransactionId = req.query.id;  //This retreives the merchantTransactionId from the query parameters

    const keyIndex = 1  //Key used to sign the transaction (security purpose)
    const string  = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY  //used to calculate the checksum
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')  //used to calculate the checksum
    const checksum = sha256 + '###' + keyIndex   //Generates the final checksum

    const option = {
        method: 'GET',   //We are not sending any data to the phonepe server. The URL contains the merchant id and the merchant transaction id. Hence we chose GET method
        url:`${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
        headers: {
            accept : 'application/json',  //response must be json
            'Content-Type': 'application/json',  //response is json
            'X-VERIFY': checksum,   //Checksum is passed to maintain the integrity
            'X-MERCHANT-ID': MERCHANT_ID  //Merchant id is provided, which is a requirement for the phonepe server
        },
    }

    axios.request(option).then((response) => {
        if (response.data.success === true){
            return res.redirect(successUrl)  //If the payment is successfull, then we redirect to the success URL
        }else{
            return res.redirect(failureUrl)  //If the payment is a failure, then we redirect to the failure URL
        }
    })
});


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});


//So there are 2 routing functions- one for the data to be tranferred, and one for the status of the processed transaction
/*
Summary of Flow:
1) User clicks Pay on the merchant's website.
2) The merchant's server sends a POST request with the Base64-encoded data and checksum to PhonePe to initiate the payment.
3) The user is redirected to PhonePe's payment page to complete the payment.
4) After payment (success/failure), the user is redirected back to the merchant's redirectUrl.
5) The merchant’s server sends a GET request with the checksum and transaction ID to PhonePe to check the payment status.
6) The server then redirects the user to either the success URL or the failure URL, depending on the payment outcome.
*/
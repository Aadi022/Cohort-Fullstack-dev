const express = require('express')   //We import the library of express
const app=express();     //We create an instance of express as 'app'
const port = 3000 //So basically port gives a unique number to a server, which helps us to distinguish multiple servers running on the same computer.

//Structure is similar to fs.readfile("path","utf-8",callback func())
app.get('/', function(req, res) {  //In app.get(), we usually write the route followed by anonymous function
  res.send('Hello World!')   //The call stack reaches here when the backend server gets hit
})



/*app.listen() tells the Express app to start a server and listen on a specified port for  incoming connections. This is typically the last line of
 code in your Express application file. */

app.listen(port, function() {
  console.log(`Example app listening on port {port}`)
})
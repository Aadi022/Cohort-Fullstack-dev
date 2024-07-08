import profilePic from './assets/images.jpeg'
function Card(){
    return(
       <div className="card">   {/*Here, className is the class we use in CSS. We can't diectly write class as its a pre-reserved keyword in jsx*/}
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make Youtube videos and go to the gym</p>
       </div> 
    );
}

export default Card
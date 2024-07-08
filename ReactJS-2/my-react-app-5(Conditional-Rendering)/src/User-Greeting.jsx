import proptypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage= <h2 className="welcome-message">Welcome {props.username}</h2> 
    const loginPrompt= <h2 className="login-prompt">Please Log-in to continue</h2>
    return(
        props.isLoggedIn ? welcomeMessage : loginPrompt
    )
}

//So basically ? is true and : is false

UserGreeting.proptypes={
    isLoggedIn: proptypes.bool,
    username: proptypes.string
}

UserGreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting
import PropTypes from 'prop-types'

function Student(props){   //peops is a javascript object
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.PropTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//.defaultProps is a default value, which gets called when the parent component doesn't pass any value while calling the child component

Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student

/*Student: {props.isStudent ? "Yes" : "No"}- Bool values don't get displayed in react dom, hence we use itenary operations.
  Hence read it as props.isStudent will return "Yes" if true, else "No"
*/
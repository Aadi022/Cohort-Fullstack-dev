import Student from './Student.jsx'
function App() {
  return(
    <>
      <Student name="Spongebob"  age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student> 
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student> 
      <Student></Student>
      <Student name="Larry"></Student>
    </>
  )
}
//If we send data(except string) while calling the child component, we close in curly braces
export default App

//App.jsx is the parent component and Student.jsx is the child component.
//We send the json data while calling the child component in the parent component.
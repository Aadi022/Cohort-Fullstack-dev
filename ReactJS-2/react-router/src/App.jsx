import { Route,Routes } from 'react-router-dom'

function App() {  //Each route defines a route to different webpage
  return (
  <Routes>
    <Route path="/" element={<Home/>}></Route>   
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  )
}

export default App

/*
<Routes> acts as a container for all the Route applications in the
application. It ensures that only one route can be accessed and rendered
at a time.

Each route component defines two things-
1) path: This is a string that URL path matches. Eg: "/about" means the path to be matched is /about
2) element: This prop specifies the react component that should be rendered when the path matches the URL.

Hence, instead of directly returning them, we are enclosing them in routes.
But we will write the jsx file of these components as usual.
*/
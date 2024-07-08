import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
function App() {

    return(
      <>    {/* jsx can return only one html element. Hence whenever we want to return multiple html elements, we wrap them around in empty html elements called fragments.*/}
        <Header></Header>  
        <Food></Food>
        <Footer></Footer>
        
      </>
    );
}

export default App

function Footer(){
    return(
        <footer>  {/*Whenever we want to add javascript code in return part of react, we make use of curly brackets-{}*/}
            <p>&copy; {new Date().getFullYear()} Your Website name</p>
        </footer>
    );
}

export default Footer
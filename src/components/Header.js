import React from "react";
import "./Header.css";

const Header = () =>{
    return(
        // <header className='text-center d-flex row flex-column'>
        //     <h1>Benjamin's CV</h1>
        // </header>
        <React.Fragment>
            <header className="header">
                <h1>Benjamin's CV</h1>
            </header>
        </React.Fragment>
    );
}

export default Header;
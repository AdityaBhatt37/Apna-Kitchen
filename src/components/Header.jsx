import {useState} from 'react';
import Rlogo from '../assets/img/logo.png'; //importing image

import {Link} from "react-router-dom";


const Logo = () =>{

    return(
    <>
    <img src={Rlogo} alt="logo" id="logo"/> 
    </>
    );
}


const Header = () =>{

    const [loggedInUser, setLoggedInUser] = useState(true);

    return(
    <div id="Header">

        <Logo/>

        <div id="navbar">
            
            <ul>
                <Link to="/">
                <li className="liTag">Home</li>
                </Link>

                <Link to="/about">
                <li className="liTag">About us</li>
                </Link>

                <Link to="/contact">
                <li className="liTag">Contact Us</li>
                </Link>

                <Link to="/grocery">
                    <li className="liTag">Grocery</li>
                </Link>

                
            </ul>

        </div>
       
       {
       loggedInUser?
        (<button className="loggedInBtn" onClick={()=>{setLoggedInUser(false)}}>Login</button>):
        (<button className="loggedOutBtn" onClick={()=>{setLoggedInUser(true);}}>Logout</button>)
       }
       
    </div>
    );

}

export default Header;
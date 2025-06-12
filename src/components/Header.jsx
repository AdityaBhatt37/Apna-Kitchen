import {useState} from 'react';
import Rlogo from '../assets/img/logo.png'; //importing image

import {Link} from "react-router-dom";

import Cart from "./Cart.jsx";
import {useSelector} from "react-redux";


const Logo = () =>{

    return(
    <>
    <img src={Rlogo} alt="logo" id="logo"/> 
    </>
    );
}


const Header = () =>{

    const [loggedInUser, setLoggedInUser] = useState(true);
        const cartItems = useSelector((store)=> store.cart.Items); //subscribing our cart with the store.

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
       

        <Link to="/cart"><li className='loggedInBtn'>cart-{cartItems.length}</li>
                </Link>
    </div>
    );

}

export default Header;
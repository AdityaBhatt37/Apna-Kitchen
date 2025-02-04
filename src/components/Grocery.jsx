import { Link } from "react-router-dom";
import commingSoonImage from "../assets/img/commingSoonImage.png";
const Grocery = () =>{

    return(
        <div id="grocery">
         <div className="Grocerycontainer">
      
        <div className="Grocerytext-section">
            <p>Welcome To Our Grocery Store</p>
            <h1>Comming Soon...</h1>
            <p className="Grocerydescription">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
           <Link to="/"> <button className="Grocerybtn Groceryshop">SHOP NOW</button> </Link>
            <Link to="/about"> <button className="Grocerybtn Groceryread">About Us</button> </Link>
        </div>

      
        <div className="Groceryimage-section">
            <img src={commingSoonImage}></img>
        </div>
    </div>
        </div>
    );
}

export default Grocery;
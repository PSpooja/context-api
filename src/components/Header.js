import { NavLink } from "react-router-dom";
import './style.css'
import { useContext } from "react";
import { CartPage } from "../Context";

function Header(){
   const {cart } = useContext(CartPage)
    return<> 
     <span className="header">React Context API</span>
     <ul className="nav">
        <li className="prod1">
         <NavLink to="/">Home</NavLink>
        </li>
        <li className="prod1">
         <NavLink to="/cart">Cart({cart.length})</NavLink>
        </li>
     </ul>
    </>
  }
  
  export default Header;
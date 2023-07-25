import { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartPage } from "../Context"

function Cart(){
  const [total, setTotal] = useState();
  const {cart } = useContext(CartPage)
   
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
    console.log("hello")
  },[cart])

  return<> 
     <span style={{fontSize : '30px'}}>My Cart</span>
     <br/>
     <span style={{fontSize : 30}}>Total : $ {total}</span>
     <div className="productContainer">{
      cart.map((prod) => {
        return <SingleProduct prod={prod} key={prod.userId}/>
      })
     }</div>
  </>
}

export default Cart;
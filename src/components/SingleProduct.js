import { useContext } from "react"
import { CartPage } from "../Context"

function SingleProduct({prod }){
  
   const {cart, setCart} = useContext(CartPage)

   console.log("hsdf", cart)
   return <>
      <div className="products">
        <img src={prod.image} alt={prod.name}/>
        <div className="productDesc">
            <span style={{fontWeight : 700}}>{prod.name}</span>
            <span>$ {prod.price.substring(0, 3)}</span>
        </div>

       {cart.includes(prod)? (<button className="add" onClick={() => {
         setCart(cart.filter((c) => c.userId !== prod.userId))
        }}>Remove Cart</button>):  (<button className="add" onClick={() => {
         setCart([...cart, prod])
      }}>Add to Cart</button> )}
       
       
      </div>
   </>
}

export default SingleProduct;
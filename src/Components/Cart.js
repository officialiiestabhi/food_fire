import { useDispatch, useSelector } from "react-redux"
import ItemCards from "./ItemCards"
import {  clearitem, removeItem } from "../Utils/cartSlice";




const Cart = () => {
    const dispatch=useDispatch();
    const handleremove=()=>{
      dispatch(clearitem());
      
  }
    const handleClear=()=>{
        dispatch(removeItem());
      
    }
    const cartItems=useSelector((store)=>store.cart.items);

    if(cartItems.length===0)return <img
      src="https://www.seensil.com/assets/images/cart-empty.jpg"
      alt="emptycartlogo"
      className="mx-auto my-2"
    />
  return (
    <div className="p-2 w-7/12 m-auto">
      <h1 className="text-center font-semibold text-3xl">Cart</h1>
      <ItemCards menus={cartItems}/>

      <div className="text-center mt-4 space-x-3 flex">
      <div>
      <button className="bg-black text-white px-2 py-1 rounded-lg"
            onClick={handleClear}>
                Clear All
            </button>
            
            </div>
            <button className="bg-black text-white px-2 py-1 rounded-lg"
            onClick={handleremove}>
                Remove
            </button>
           
            
        </div>
      
        
    </div>
  )
}

export default Cart

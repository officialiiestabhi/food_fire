import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus"
import { useSelector } from "react-redux";
//{} is used in importing when in that component variours export is calling
const Header=()=>{
  const onlinHai=useOnlineStatus();
  const [reg,setreg]=useState("Login");
  const store=useSelector((store)=>store.cart.items);


    return(
      <div className="flex justify-between bg-orange-100 shadow-md items-center">
        <div className="w-1/12 lg:ml-10 ">
        <Link to="/">
        <img   src={LOGO_URL} alt="logo"/>
        </Link>
         </div>
         <div className="flex items-center  justify-end mr-4 w-5/12">
          <ul className="flex lg:space-x-12 space-x-3 my-10 lg:text-2xl ">
          <li className="font-semibold">
            {
              onlinHai?"Online 🟢":"Offline 🔴"
            }
          </li>
          
          <li >
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <div className="flex flex-wrap">
          <Link to="/cart"><img
          className="lg:w-8 "
          src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"
          alt="cartlogo"/></Link>
          {
            store.length>0 &&
          <sup className="text-green-500 font-semibold">{store.length}</sup>
          }
          
          </div>

          <button
          className="bg-orange-600 lg:px-5 px-2 lg:py-1 rounded-md "
           onClick={()=>{
            if(reg==="Login")setreg("LogOut");
            else setreg("Login");
          }}>{reg}</button>
          </ul>
         </div>
      </div>
    )
  }

  export default Header;
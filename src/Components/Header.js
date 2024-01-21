import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus"
//{} is used in importing when in that component variours export is calling
const Header=()=>{
  const onlinHai=useOnlineStatus();
  const [reg,setreg]=useState("Login");
    return(
      <div className="flex justify-between bg-orange-100 shadow-md ">
        <div>
        <img className="w-40"  src={LOGO_URL} alt="logo"/>
         </div>
         <div className="flex items-center mr-5">
          <ul className="flex space-x-4 my-10 text-2xl">
          <li className="font-semibold">
            {
              onlinHai?"Online 🟢":"Offline 🔴"
            }
          </li>
          <li >
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/about">About us</Link>
             </li>
          <li>
            <Link to="/contact">Contact us</Link>
            </li>
          <li>Cart</li>

          <button
          className="bg-orange-600 px-5 py-1 rounded-md"
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
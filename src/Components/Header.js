import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus"
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
         <div className="flex items-center  justify-end mr-4 w-6/12">
          <ul className="flex lg:space-x-12 space-x-3 my-10 md:text-2xl text-sm">
          <li className="font-semibold">
            {
              onlinHai?"Online 🟢":"Offline 🔴"
            }
          </li>
          
          <li >
            <a href="/">Home</a>
            </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <div className="flex ">
          <Link to="/cart"><img
          className="w-8 "
          src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"
          alt="cartlogo"/></Link>
          {
            store.length>0 &&
            <div className="bg-green-500 md:h-5 md:w-5 h-3 w-3 rounded-2xl ">
            <sup className="text-white font-semibold lg:mx-1">{store.length}</sup>
            </div>

          }
          
          </div>

          <button
          className="bg-orange-600  lg:py-1 rounded-md w-[70px] lg:w-[100px] h-10 lg:text-lg text-sm text-white font-bold"
           onClick={()=>{
            if(reg==="Login"){
              setreg("LogOut");
              toast("logOut successfully")
            }
              
            else {
              setreg("Login");
              toast("login successfully")
            }

            
          }}>{reg}</button>
          <ToastContainer
            position="top-center"
            autoClose={200}
          />
          </ul>
         </div>
      </div>
    )
  }

  export default Header;
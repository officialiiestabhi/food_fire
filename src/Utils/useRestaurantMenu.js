import { MENU_API } from "./Constants";
import { useState,useEffect } from "react";
const useRestaurantMenu=(resId)=>{
    const [listMenu,setlistMenu]=useState(null);
    useEffect(()=>{
        fetchMenu()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    //console.log(MENU_API+resId);
    const fetchMenu=async()=>{

        const data=await fetch(MENU_API+resId);
        
        const json=await data.json();
        
        setlistMenu(json);
    }
    return listMenu
}

export default useRestaurantMenu
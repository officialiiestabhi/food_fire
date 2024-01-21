import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlineStatus,setonlineStatus]=useState(true);

    
    useEffect(()=>{
        //seen from google by searching addevenlistener for online status
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setonlineStatus(true);
        })

    },[]);

    return onlineStatus;
};

export default useOnlineStatus;
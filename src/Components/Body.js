import { DISH_URL } from "../Utils/Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Body=()=>{

    const[ResObj,setResObj]=useState([]);
    const [filtrdRestaurant,setfiltrdRrdRestaurant]=useState([]);
    const[searchtext,setsearchtext]=useState("");
    useEffect(()=>{
      fetchData();
    },[])
    
      
    const fetchData=async ()=>{
      const fdata=await fetch(DISH_URL);
      const json=await fdata.json();

      setResObj(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setfiltrdRrdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }
    
    
    //if (ResObj.length===0)return <Shimmer/>
    return(ResObj.length===0)?( <Shimmer/>):(
      <div className="mainbody p-3">

        <div className="filterthings flex space-x-8 p-3 flex-wrap">
        <div className="searchbar flex m-2 ">
        <input 
        className="border-1 bg-gray-300 rounded-l-md"
        placeholder="Search Restaurant name"
        type="text"
        value={searchtext}
        onChange={(e)=>{
          setsearchtext(e.target.value);
        }}
        />
        <button className="bg-orange-300 p-2 rounded-r-md"
        onClick={()=>{
        const searchres=ResObj.filter(
          (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
        )
        setfiltrdRrdRestaurant(searchres);
      }}
        >🔍</button>
        </div>

        <button className="bg-orange-300 p-2 h-11 mt-2 rounded-md"
        onClick={()=>{
          const filtrdlist=ResObj.filter((res)=>res.info.avgRating>=4.5)
          setfiltrdRrdRestaurant(filtrdlist);
        }
        
        }
        >Top-rated restaurant</button>
        </div>
        
        
          
        <div className="flex flex-wrap ">
        {
          filtrdRestaurant.length===0 ? 
          <div className="m-auto">
            <img
              src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"
              alt="nodatafound"
              className="rounded-lg"
            />
          </div>:
           filtrdRestaurant.map(
            (restaur=>
            <Link
            key={restaur.info.id} 
            to={"/restaurants/"+restaur.info.id}>
            {
              <RestaurantCard  resdata={restaur}/>
            }
            
            </Link>))
        }
        </div>
        
      </div>
        
    )
  }  
  export default Body;
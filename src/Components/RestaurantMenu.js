
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
    //const [showItem,setshowItem]=useState(false);
    const[showIndex,setShowIndex]=useState(0);
    
    
    const {resId}=useParams();
    const listMenu=useRestaurantMenu(resId)
    
    

    if (listMenu===null)return <Shimmer/>
    
    const categories=
    listMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    //console.log(categories);

    const {name,city,cuisines,avgRating}=listMenu.data.cards[0].card.card.info
    
    
    return (
        <div className="p-2 mt-4 mx-auto lg:w-6/12">
        <div className="flex ">
            <div >
            <h1 className="font-semibold text-2xl">{name}</h1>
            <h1 className="font-normal text-slate-500 ">{city}</h1>
            <h1  className="font-normal text-slate-500 ">{cuisines.join(",")}</h1>
            </div>
            <div className="border h-[40px] flex rounded-lg p-1">
            <h1>❇️</h1>
            {avgRating}
            </div>
            
        </div>
            
        <div className="mt-5">
                {
                    categories.map(
                        (category,index)=><RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItem={index===showIndex ? true:false}
                        setShowIndex={()=>setShowIndex(index)}
                        />)
                }
        </div>

        </div>
    )
}

export default RestaurantMenu
import { FOOD_URL } from "../Utils/Constants";

const RestaurantCard=(props)=>{
    const {resdata}=props;
    //it's better to destructure to look clean code
    const{name,cloudinaryImageId,avgRating,deliveryTime,cuisines}=resdata.info;
    return(
      <div className=" ml-6 w-80 h-80 space-x-2 p-2">
      <img 
      className="h-40 w-full rounded-md"
      //for concatenation bracket required(""+"")
      alt="restaurant img"
      src={FOOD_URL+
      cloudinaryImageId } />
      <h3 className="font-medium">{name}</h3>
      <div className="flex space-x-3 font-medium">
      
        <div className="flex space-x-1">
        <img 
        className="w-4 h-4 my-1"
        src="https://w7.pngwing.com/pngs/559/265/png-transparent-star-favorite-rating-bookmark-icon.png" 
        alt="star-logo"/>
        <h3>{avgRating}</h3>
        </div>
  
        <h3 >{deliveryTime}mins</h3>
      </div>
      <h3>{cuisines.join(",")}</h3>
       </div>
    )
  }

  export default RestaurantCard;

  //higher order funcction
//in put restaurant card =>restaurantcardpromoted
  export const withPromotedlabel=(RestaurantCard)=>{
    return ()=>{
      return(
        <div>
          <h1 className="font-semibold">Promoted</h1>
          <RestaurantCard/>
        </div>
      )
    }
  }


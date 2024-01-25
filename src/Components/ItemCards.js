import { useDispatch } from "react-redux";
import { FOOD_URL } from "../Utils/Constants";
import { addItem } from "../Utils/cartSlice";

const ItemCards = ({menus}) => {
    console.log(menus);
    const dispatch=useDispatch();
    const handleAdditem=(menu)=>{
      dispatch(addItem(menu))
    }
  return (
    <div>
      {
        menus.map((menu)=>(
            <div className=" py-8 px-2 mt-3 border-b-2 border-gray-200 flex justify-between"
            key={menu?.card?.info?.id}>
            <div className="w-9/12">
            <h1 className="font-medium">{menu?.card?.info?.name}</h1>
            <h1>₹ {menu?.card?.info?.price/100 ?  menu?.card?.info?.price/100 : menu?.card?.info?.defaultPrice/100}</h1>
            </div>
            <div className="w-3/12">
            <div className="absolute lg:mx-[50px] my-[100px]">
            <button className="bg-black text-white lg:px-2 lg:py-1 rounded-lg hover hover:bg-slate-800"
            onClick={()=>handleAdditem(menu)}>
                ADD
            </button>
            </div>

            
            <div >
            {
              menu?.card?.info?.imageId ?
              <img
            className=" rounded-lg w-[180px] h-[110px] "
                src={FOOD_URL+menu?.card?.info?.imageId }
                alt="menulogo"
            /> :<img
            className=" rounded-lg w-[180px] h-[110px] "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
              alt="noimage"
            />
            }
            </div>
            
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default ItemCards

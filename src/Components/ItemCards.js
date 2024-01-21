import { FOOD_URL } from "../Utils/Constants";


const ItemCards = ({menus}) => {
    console.log(menus);
  return (
    <div>
      {
        menus.map((menu)=>(
            <div className=" py-8 px-2 mt-3 border-b-2 border-gray-200 flex justify-between"
            key={menu?.card?.info?.id}>
            <div className=" w-9/12">
            <h1 className="font-medium">{menu?.card?.info?.name}</h1>
            <h1>₹ {menu?.card?.info?.price/100 ?  menu?.card?.info?.price/100 : menu?.card?.info?.defaultPrice/100}</h1>
            </div>
            <div className="w-3/12">
            <div className="absolute mx-[50px] my-[100px]">
            <button className="bg-black text-white px-2 py-1 rounded-lg m">
                ADD +
            </button>
            </div>
            
            <img
            className=" rounded-lg"
                src={FOOD_URL+menu?.card?.info?.imageId }
                alt="menulogo"
            />
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default ItemCards


import ItemCards from "./ItemCards";


const RestaurantCategory = ({data,showItem,setShowIndex}) => {
  console.log(data);
  const clickHandler=()=>{
    setShowIndex();
}
  return (
    
    <div className="border p-2 bg-slate-50 my-4 shadow-xl rounded-md ">
    <div className="flex cursor-pointer justify-between "
          onClick={clickHandler}>
      <h1 className="text-xl font-normal">{data.title} ({data.itemCards.length})</h1>
      <h1>🔽</h1>
    </div>
    {showItem && <ItemCards menus={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory

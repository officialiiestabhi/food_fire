import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import { FOOD_URL } from "./Utils/Constants";
import {createBrowserRouter,Outlet} from "react-router-dom"
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
/**
 * header
 * -logo
 * -menu
 * 
 * body
 * -restaurant card
 * 
 * -footer
 */



//async await added as it will take time to load


//start component name with capital; letter         


export const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        //:resid indicates dynamic changig od url according to rstaurants
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
])

function App(){

  return(
    <div className="p-2 ">
      <Header/>
      <Outlet/>
    </div>
  )
}
export default App;

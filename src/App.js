import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import { FOOD_URL } from "./Utils/Constants";
import {createBrowserRouter,Outlet} from "react-router-dom"
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart";
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
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        //:resid indicates dynamic changig od url according to rstaurants
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },
  
])

function App(){

  return(
    <Provider store={appStore}>
    <div>
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  )
}
export default App;

import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)

        },
        clearitem:(state)=>{
            state.items.pop();
        },
        removeItem:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,clearitem,removeItem}=cartSlice.actions;

export default cartSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'
const initialState={
    products:[],
};
export const ProductSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getproducts:(state,action)=>{ //we ccan not call async fn or api here so we need action sapratley
            console.log("in product reducers",action)
            state.products=action.payload;
        }
    },
})
export default ProductSlice.reducer
export const {getproducts}=ProductSlice.actions;
import axios from 'axios'
import { getproducts } from '../reducers/ProductReducer'
export const asyncgetproducts=() => async (dispatch,getstate)=>{
    console.log("global state: ",getstate())
    try{
        const res=await axios.get('https://fakestoreapi.com/products')
        // console.log(res.data)
        //here we have data of products that is sync data 
        dispatch(getproducts(res.data))  // here dispatch is used to call the getproducts and put data in it
    }catch(e){
        console.log(e)
    }
}
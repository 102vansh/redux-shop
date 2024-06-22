import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    product:[],
    cart:[],
    loading:false
}   

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.product = action.payload
        },
        addCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        setloading:(state,action)=>{
            state.loading = action.payload
        },
        deleteCart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
console.log(action.payload)
        }
    }
})                                                                           
export const {addProduct,addCart,deleteCart} = productSlice.actions
export default productSlice.reducer
import {configureStore} from "@reduxjs/toolkit"
import productreducer from './Slice'

const store = configureStore({
    reducer:{
        products:productreducer
    }
})
export default store
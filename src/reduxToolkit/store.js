import {configureStore} from '@reduxjs/toolkit'
import BookSlice  from './bookslice'
export const store = configureStore({
    reducer:{
        state:BookSlice
    }
})
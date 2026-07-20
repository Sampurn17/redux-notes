import { createSlice } from "@reduxjs/toolkit";
// slice - Counter
export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value: 0
    },
    reducers:{
        increment: ()=>{
            state.value +=1

        },
        decrement:()=>{
            state.value-=1

        }
    }

})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer

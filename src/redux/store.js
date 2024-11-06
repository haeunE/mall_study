import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  // state 이름
  name: 'cart',
  // state초기값
  initialState : [],
  // state 함수
  reducers:{
    // state:현재state값, action: 인수값
    addCount(state,action){
      const index = state.findIndex((data)=>{
        return data.id == action.payload
      })
      state[index].count++;
    },
    addItem(state,action){
      const index = state.findIndex((data)=>{
        return data.id==action.payload.id
      })
      if(index==-1){
        console.log("error")
        state.push(action.payload)
      }
      else
        state[index].count++;
    },
    removeItem(state,action){
      const index = state.findIndex((data)=>{
        return data.id==action.payload
      })
      state.splice(index,1)
    }
  }
})
export const { addCount, addItem,removeItem} = cart.actions;

export default configureStore({
  reducer: {
    cart:cart.reducer
  }
})
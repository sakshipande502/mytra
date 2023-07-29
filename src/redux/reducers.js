import { createReducer } from "@reduxjs/toolkit";

export const cardReducer = createReducer(
  {
    cardItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCard: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cardItems.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cardItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cardItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cardItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cardItems.forEach((i)=>{
            if(i.id===item.id){
                i.quantity-=1;
            }
        })
      }
    },
    deleteFromCard:(state,action)=>{
        state.cardItems = state.cardItems.filter(i=>i.id!==action.payload);
    },
    calculatePrice:(state)=>{
        let sum=0;
        state.cardItems.forEach((i)=>( sum += i.price * i.quantity));
        state.subTotal=sum;  
        state.shipping=state.subTotal > 1000  ? 0:200;
        state.tax = +(state.subTotal*0.18).toFixed();
        state.total = state.subTotal + state.tax + state.shipping;
    },
  }
);

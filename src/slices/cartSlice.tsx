import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
  [key: string]: any;
}

interface CartState {
  items: CartItem[];
}


const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
      else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },


    removeFromCart:(state,action)=>{
      console.log('Removing item with id:', action.payload);
      console.log('Current items:', state.items);
      state.items = state.items.filter(item => item.id !== action.payload);
      console.log('Items after removal:', state.items);
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

interface CartState {
    count: number;
    items: any[];
}

const initialState: CartState = {
    count: 0,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.count = state.count + 1;
            state.items.push(action.payload);
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
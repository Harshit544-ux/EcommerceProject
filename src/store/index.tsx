import {configureStore} from '@reduxjs/toolkit';
// Update the import path to match the actual file name, e.g. 'cartSlice'

import cartReducer from '../slices/cartSlice';


export const store = configureStore({
 reducer: {
    cart: cartReducer,
 },

});
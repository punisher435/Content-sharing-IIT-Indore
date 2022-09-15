import { configureStore } from "@reduxjs/toolkit";
import authenticateSlice from "./authenticate";
const store=configureStore({
    reducer:{'auth':authenticateSlice.reducer}
})
export default store;
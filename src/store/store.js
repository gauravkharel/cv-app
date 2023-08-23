import { configureStore } from "@reduxjs/toolkit";
import personalDetailsSlice from "../personalDetailsSlice";
const store = configureStore({
    reducer: {
        personalDetailsSlice
    }
})

export default store;
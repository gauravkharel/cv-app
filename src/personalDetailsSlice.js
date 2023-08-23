import { createSlice } from "@reduxjs/toolkit";
export const personalDetailsSlice = createSlice({
    name: "gaurav",
    initialState: {
        value: null,
    },
    reducers: {
        details: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {details} = personalDetailsSlice.actions
export default personalDetailsSlice.reducer

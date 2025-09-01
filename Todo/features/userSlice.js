import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
            state.error = null
        },
        signInSucces: (state) => {
            state.loading = false,
                state.error = null
        },
        signInFailure: (state, actions) => {
            state.loading = false
            state.error = actions.payload
        }
    }
});

export const { signInStart, signInFailure, signInSucces } = userSlice.actions;
export default userSlice.reducer;
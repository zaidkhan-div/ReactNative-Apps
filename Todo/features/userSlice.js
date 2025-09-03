import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
    accessToken: null,
    refreshToken: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
            state.error = null
        },
        signInSucces: (state, action) => {
            state.loading = false;
            state.error = null;
            state.currentUser = action.payload;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        loginSucces: (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.accessToken;
        }
    }
});

export const { signInStart, signInFailure, signInSucces, loginSucces } = userSlice.actions;
export default userSlice.reducer;
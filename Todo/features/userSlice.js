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
        signInSucces: (state) => {
            state.loading = false;
            state.error = null
        },
        signInFailure: (state, actions) => {
            state.loading = false;
            state.error = actions.payload;
        },
        loginSucces: (state, actions) => {
            state.loading = false;
            state.accessToken = actions.payload.accessToken;
            state.refreshToken = actions.payload.refreshToken;
        }
    }
});

export const { signInStart, signInFailure, signInSucces, loginSucces } = userSlice.actions;
export default userSlice.reducer;
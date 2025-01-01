import { createSlice } from "@reduxjs/toolkit";

interface authorizationState {
    isAuthorized: boolean;
}

const initialState: authorizationState = {
    isAuthorized: false
}

const authorizationSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        authorize: (state) => {
            state.isAuthorized = true;
        },
        not_authorized: (state) => {
            state.isAuthorized = false;
        }
    }
})

export const { authorize, not_authorized} = authorizationSlice.actions;

export default authorizationSlice.reducer;
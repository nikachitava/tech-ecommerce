import { configureStore } from "@reduxjs/toolkit";
import authorizeReducer from "./authorization/AuthorizationSlice"

export const store = configureStore({
    reducer: {
        authorization: authorizeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisPatch = typeof store.dispatch
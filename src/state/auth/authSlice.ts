import { doSignInWithGoogle } from "@/firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

interface AuthState {
    currentUser: null | User;
    isAuth: boolean;
    error: string | null;
}

const initialState: AuthState = {
    currentUser: null,
    isAuth: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null;
            state.isAuth = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(signInWithGoogle.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            state.isAuth = true;
            state.error = null;
          })
          .addCase(signInWithGoogle.rejected, (state, action) => {
            state.currentUser = null;
            state.isAuth = false;
            state.error = action.payload as string;
          });
      },
})

// export const signInWithGoogle = createAsyncThunk(
//   'auth/signInWithGoogle',
//   async (_, { rejectWithValue }) => {
//     try {
//       const user = await doSignInWithGoogle();
//       return {
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//         photoURL: user.photoURL,
//       };
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const signInWithGoogle = createAsyncThunk(
    'auth/signInWithGoogle',
    async (_, { rejectWithValue }) => {
      try {
        const user = await doSignInWithGoogle();
        return {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
);
  





export default authSlice.reducer
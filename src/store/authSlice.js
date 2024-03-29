import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true,
                state.error = null,
                state.success = false
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload,
                state.loading = false,
                state.error = null,
                state.success = true
        },
        signInFailure: (state, action) => {
            state.loading = false,
                state.error = action.payload,
                state.success = false
        },
        updateStart: (state) => {
            state.loading = true,
                state.error = null,
                state.success = false
        },
        updateSuccess: (state, action) => {
            state.currentUser = action.payload,
                state.loading = false,
                state.error = null,
                state.success = true
        },
        updateFailure: (state, action) => {
            state.loading = false,
                state.error = action.payload,
                state.success = false
        },
        deleteStart: (state) => {
            state.loading = true,
                state.error = null,
                state.success = false
        },
        deleteSuccess: (state) => {
            state.currentUser = null
            state.loading = false,
                state.error = null,
                state.success = true
        },
        deleteFailure: (state, action) => {
            state.loading = false,
                state.error = action.payload,
                state.success = false
        },
        signOutSuccess: (state) => {
            state.currentUser = null
            state.loading = false,
                state.error = null,
                state.success = true
        },
        signOutFailure: (state, action) => {
            state.loading = false,
                state.error = action.payload,
                state.success = true
        },
    }
})

export const { signInStart, signInSuccess, signInFailure, updateStart, updateSuccess, updateFailure, deleteStart, deleteSuccess, deleteFailure, signOutSuccess, signOutFailure } = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Serialize state to JSON including token
const serializeState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.error('Error serializing state:', err);
    }
};

// Deserialize state from JSON including token
const deserializeState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined; // If no state is stored, return undefined
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error deserializing state:', err);
        return undefined; // Return undefined if deserialization fails
    }
};

const initialState = {
    userId: "",
    username: "",
    token: "", // Add token property to store JWT token
    isLoggedIn: false
};

const savedState = deserializeState();

const userSlice = createSlice({
    name: "user",
    initialState: savedState || initialState,
    reducers: {
        login: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.token = action.payload.token; // Store JWT token
            state.isLoggedIn = true;
            
            serializeState(state); // Save state to localStorage after login
        }
    
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

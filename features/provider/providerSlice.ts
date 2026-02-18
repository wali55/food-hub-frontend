import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    providers: [],
    selectedProvider: {
        id: "",
        restaurantName: "",
        address: "",
        userId: "",
        createdAt: "",
        updatedAt: "",
        meals: []
    }
}

const providerSlice = createSlice({
    name: "provider",
    initialState,
    reducers: {
        setProviders: (state, action) => {
            state.providers = action.payload
        },
        setSelectedProvider: (state, action) => {
            state.selectedProvider = action.payload;
        }
    }
})

export const {setProviders, setSelectedProvider} = providerSlice.actions;
export default providerSlice.reducer;
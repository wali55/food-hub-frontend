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
    },
    providerStats: {
        totalMeals: 0,
        totalOrders: 0,
        placedOrders: 0,
        deliveredOrders: 0
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
        },
        setProviderStats: (state, action) => {
            state.providerStats = action.payload;
        }
    }
})

export const {setProviders, setSelectedProvider, setProviderStats} = providerSlice.actions;
export default providerSlice.reducer;
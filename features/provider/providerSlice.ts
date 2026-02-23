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
    providerProfile: {
        id: "",
        restaurantName: "",
        address: "",
        userId: "",
        createdAt: "",
        updatedAt: "",
        user: {
            name: "",
            email: "",
            phone: ""
        }
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
        },
        setProviderProfile: (state, action) => {
            state.providerProfile = action.payload;
        }
    }
})

export const {setProviders, setSelectedProvider, setProviderStats, setProviderProfile} = providerSlice.actions;
export default providerSlice.reducer;
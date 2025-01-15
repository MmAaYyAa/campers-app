import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from './catalogOperations.js.js';

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        items: [],  //list of campers
        total: 0,  //total quantity of campers
        camper: null, //detailed information about the selected camper
        loading: false, 
        error: null,
    },
    reducers: {
        clearCatalog(state) {
            state.items = [];
            state.total = 0;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCampers.pending, handlePending)
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.loading = false;
            const { items, reset } = action.payload;
            if (reset) {
              state.items = items;
            } else {
              state.items = [...state.items, ...items];
            }
            state.total = action.payload.total;
          })
        .addCase(fetchCampers.rejected, handleRejected)
        .addCase(fetchCamperById.pending, handlePending)
        .addCase(fetchCamperById.fulfilled, (state, action) => {
            state.camper = action.payload;
            state.loading = false;
          }) 
        .addCase(fetchCamperById.rejected, handleRejected);  
    },
});

export const { clearCatalog } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
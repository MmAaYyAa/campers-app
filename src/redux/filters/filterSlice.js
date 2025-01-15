import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  location: '',          
  transmission: '',    
  camperEquipment: [], 
  form: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilters(state, action) {
          const { location, transmission, camperEquipment, form } = action.payload;
          state.location = location;
          state.transmission = transmission;
          state.camperEquipment = [...camperEquipment]; 
          state.form = form;
        },
        clearFilters() {
          return initialState;  
        },
      },
});

export const {  addFilters, clearFilters} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
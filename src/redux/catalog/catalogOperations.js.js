import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatLocation } from '../../utils/utils';


axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'catalog/fetchAll',
  async ({ page = 1, filters = {}, reset = false }, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '4',
      });

      const { location, transmission, camperEquipment, form } = filters;
      
      if (location) {
        params.append('location', formatLocation(location));
      }
      if (transmission) {
        params.append('transmission', transmission);
      }
      ['AC', 'kitchen', 'TV', 'bathroom'].forEach(equipment => {
        if (camperEquipment.includes(equipment)) {
          params.append(equipment, 'true');
        }
      });
      if (form) {
        const formType = form === 'van' ? 'panelTruck' : form; 
        params.append('form', formType);
      }

      const { data } = await axios.get(`/campers?${params.toString()}`);
      return { reset, ...data };
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        return thunkAPI.rejectWithValue('Items matching your filter not found');
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'catalog/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const selectCampers = state => state.catalog.items;
export const selectTotalCampers = state => state.catalog.total;
export const selectLoading = state => state.catalog.loading; 
export const selectError = state => state.catalog.error; 
export const selectCamperDetails = state => state.catalog.camper;
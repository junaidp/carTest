import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
    name: 'cars',
    initialState: { cars: [] },
    reducers: {
        setCarsToState: (state, action) => {
            state.cars = action.payload;
            console.log("state", state, action.payload);
        },
    }
});

export const {
    setCarsToState,
} = carsSlice.actions;

// called a selector and allows to select values from the state /
export const selectedCars = state => {
    return state.cars;
};

export default carsSlice.reducer;
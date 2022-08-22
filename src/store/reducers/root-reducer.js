import { combineReducers } from '@reduxjs/toolkit';
import carsReducer from './search-car';

const appReducers = combineReducers({
    cars: carsReducer
});

const rootReducer = (state, action) => {
    return appReducers(state, action);
};

export default rootReducer;
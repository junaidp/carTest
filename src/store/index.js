import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers/root-reducer'


export default configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            // by default serializableCheck set to true by the getDefaultMiddleware middleware
            // which checks the data to be dispatched in serialized form
            // we set it to false as we have non serialized data
            serializableCheck: false
        })
    ]
})
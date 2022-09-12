import {configureStore} from "@reduxjs/toolkit";
import rootReducers from "../reducers/reducer";


const store =  configureStore({
    reducer : rootReducers
});

export default store;
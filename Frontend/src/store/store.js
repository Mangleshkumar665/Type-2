import { configureStore} from "@reduxjs/toolkit";

import timerReducer from "./timerSlice";



const store = configureStore({
    reducer :{
        time : timerReducer
    }
})


export default store
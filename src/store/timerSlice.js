const {createSlice} = require('@reduxjs/toolkit')


const timerSlice = createSlice({

    name :"time",
    initialState : 15,
    reducers:{
        select(state,action) {
            state.push(action.payload)
        }
    }




})

export const {select} = timerSlice.actions;
export default timerSlice.reducer;
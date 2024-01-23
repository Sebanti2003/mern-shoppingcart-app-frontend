import { createSlice } from "@reduxjs/toolkit";
const initialState={
    mode:"light"
}
const DarkmodeSlice=createSlice({
    name:"darkmode",
    initialState,
    reducers:{
        modechange(state,action){
            state.mode==="dark"?state.mode="light":state.mode="dark"
        }
    }
    
});
export const {modechange}=DarkmodeSlice.actions;
export default DarkmodeSlice.reducer;

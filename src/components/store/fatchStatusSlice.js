import {createSlice} from '@reduxjs/toolkit'

const fatchStatusSlice = createSlice({
    name : 'fatchStatus',
    initialState : {
        fatchDone : false,
        currentlyFatching : false
    },
    reducers :{
        markfatchDone : (store)=>{
            return store.fatchDone = true;
        },
        markfatchingStarting : (store)=>{
            return store.currentlyFatching = true;
        },
        markfatchingFinished : (store)=>{
            return store.currentlyFatching = false;
        },
    }
})

export const fatchStatusActions = fatchStatusSlice.actions;
export default fatchStatusSlice;
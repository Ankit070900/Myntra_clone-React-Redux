import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './ItemsSlice';
import fatchStatusSlice from './fatchStatusSlice';
import BagSlice from './BagSlice';



const myntraStore = configureStore({
    reducer:{
        items : itemsSlice.reducer,
        fatchStatus : fatchStatusSlice.reducer,
        bag: BagSlice.reducer,

    }
});

export default myntraStore;
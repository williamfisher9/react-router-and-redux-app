import { configureStore } from "@reduxjs/toolkit";

import themeReducer from './ThemeSlice.js';

export default configureStore({
    reducer: {
        theme: themeReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { userSlice } from "./users/userSlice"
import { companySlice } from "./company/companySlice";
import { productSlice } from "./products/productSlice"
import { purcharseSlice } from "./purcharse/purcharseSlice";
import { inventorySlice } from "./inventory/inventorySlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        company: companySlice.reducer,
        product: productSlice.reducer,
        purchase: purcharseSlice.reducer,
        inventory: inventorySlice.reducer
    }
})
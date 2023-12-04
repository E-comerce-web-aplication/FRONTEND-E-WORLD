import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { userSlice } from "./users/userSlice"
import { companySlice } from "./company/companySlice";
import { productSlice } from "./products/productSlice"
import { purcharseSlice } from "./purcharse/purcharseSlice";
import { inventorySlice } from "./inventory/inventorySlice";
import { storeSlice } from "./store/storeSlice";
import { roleSlice } from "./roles/roleSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        company: companySlice.reducer,
        product: productSlice.reducer,
        purchase: purcharseSlice.reducer,
        inventory: inventorySlice.reducer,
        store: storeSlice.reducer,
        role: roleSlice.reducer
    }
})
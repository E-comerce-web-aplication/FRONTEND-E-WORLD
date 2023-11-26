import { createSlice } from '@reduxjs/toolkit'


export const purcharseSlice = createSlice({
   name: 'purcharse',

   initialState: {},

   reducers: {
      increment: (state) => {

      state.value += 1

   },
},
})


export const { increment, decrement, incrementByAmount } = purcharseSlice.actions
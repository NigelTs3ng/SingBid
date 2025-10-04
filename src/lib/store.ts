import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { auctionsReducer } from './slices/auctionsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    auctions: auctionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
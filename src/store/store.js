import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../feature/UserSlice'

export const store = configureStore({
  reducer: {
    app: userSlice
  },
})
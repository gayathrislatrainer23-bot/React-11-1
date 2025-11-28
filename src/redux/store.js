import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import messageReducer from "./messageSlice"
 const store = configureStore({
  reducer: {
    counter :counterReducer,
    message : messageReducer

  }
})

export default store
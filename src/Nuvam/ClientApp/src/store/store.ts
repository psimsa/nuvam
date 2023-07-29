import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { api } from '../services/apiService'
// import { AnyAction, applyMiddleware, configureStore, ThunkAction } from '@reduxjs/toolkit'
import appReducer from './appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    [api.reducerPath]: api.reducer
  },
  enhancers: [applyMiddleware(api.middleware)]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export default store

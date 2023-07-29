import { User } from '@auth0/auth0-react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  loading: boolean
  user: User | undefined
}

const initialState: AppState = {
  loading: false,
  user: undefined
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = undefined
    }
  }

})

export const { setLoading, setUser, clearUser } = appSlice.actions
export default appSlice.reducer

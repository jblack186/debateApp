import { combineReducers } from 'redux'
import { authSlice } from './auth/auth.slice'

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
})

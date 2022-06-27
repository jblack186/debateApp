import { combineReducers } from 'redux'
import { authSlice } from '@features/auth/auth.slice'

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
})

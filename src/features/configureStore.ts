import { configureStore as rawConfigureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as rawUseSelector,
    useDispatch as rawUseDispatch,
} from 'react-redux'
import { rootReducer } from './rootReducer'
import { loggerMiddleware } from './middleware/loggerMiddleware'

/*
 *
 * */
function configureStore<T extends Record<any, any>>(preloadedState?: T) {
    return rawConfigureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(loggerMiddleware),
        preloadedState,
        // TODO: causing type error
        // enhancers: [monitorReducerEnhancer],
    })
}

/*
 * initializing redux
 * */
export const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch = () => rawUseDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

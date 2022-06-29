import { configureStore as rawConfigureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as rawUseSelector,
    useDispatch as rawUseDispatch,
} from 'react-redux'
import { rootReducer } from '@features/rootReducer'
import { loggerMiddleware } from '@features/loggerMiddleware.middleware'

/*
 * @return EnhanceStore
 * */
function configureStore<T extends Record<any, any>>(preloadedState = {} as T) {
    return rawConfigureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(loggerMiddleware),
        preloadedState,
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

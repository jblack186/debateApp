import { configureStore } from "@reduxjs/toolkit";

export default function configureAppStore(preloadedState: any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });


  return store;
}

export type RootState = ReturnType<typeof configureAppStore>;
export type AppDispatch = typeof configureAppStore().dispatch;

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {entitiesReducer} from "@/store/slices/entitiesSlice";
import {globalReducer} from "@/store/slices/globalSlice";

const rootReducer = combineReducers({
    entitiesReducer,
    globalReducer
})


//@ts-ignore
export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(

        ).concat([

        ]),
});

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

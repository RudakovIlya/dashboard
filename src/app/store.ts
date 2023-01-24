import storage from "redux-persist/lib/storage";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import {filterReducer} from "../features/filter/filter-slice";
import {positionsReducer} from "../features/positions/positions-slice";
import {persistStore, persistReducer, FLUSH, PERSIST, PURGE, REHYDRATE, PAUSE, REGISTER} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    filter: filterReducer,
    positions: positionsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PERSIST, PURGE, REHYDRATE, PAUSE, REGISTER]
            }
        })
    }
});

export const persistor = persistStore(store)

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

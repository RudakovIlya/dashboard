import storage from "redux-persist/lib/storage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filterReducer} from "../features/filter/filter-slice";
import {positionsReducer} from "../features/positions/positions-slice";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filter']
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

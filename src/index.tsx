import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from "./app/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

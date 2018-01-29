import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

import './index.css';
import App from './pages/App';

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(ReduxPromise)
        // other store enhancers if any
    )
);

if (process.env.NODE_ENV === "production") {
    console.warn(process.env, "PRODUCTION MODE");
} else {
    console.warn(process.env, "DEVELOPEMENT MODE");
}



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
// registerServiceWorker();

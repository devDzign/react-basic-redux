import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Import des Libs
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk" ;
import {Provider} from "react-redux" ;
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./store/reducers/rootReducer" ;

// My middleware
import { actionCounter } from "./middleware/action-counter";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './pages/App';


const middlewares = [thunk, actionCounter];

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    ));


ReactDOM.render(
    <React.StrictMode>
        <Provider
            store={store}
        >
                <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();

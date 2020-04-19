import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Import des Libs
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk" ;
import {Provider} from "react-redux" ;
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./store/reducers/rootReducer" ;


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './pages/App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlewares = [thunk]
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // composeEnhancers
    ));

// const store = createStoreWithMiddleware(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// )


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

import React from 'react';
import Routes from './routes/Routes';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'
import { ToastContainer } from "react-toastify"

const store = createStore(reducer, applyMiddleware(logger, thunk))


const App = () => (
    <Provider store={store}>
        <div>
            <Routes />
            <ToastContainer />
        </div>
    </Provider>

)

export default App;

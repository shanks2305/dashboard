import React from 'react';
import Routes from './routes/Routes';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'

const store = createStore(reducer, applyMiddleware(logger, thunk))


const App = () => (
    <Provider store={store}>
        <div className="container-fluid">
            <Routes />
        </div>
    </Provider>

)

export default App;

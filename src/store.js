import { createStore, applyMiddleware } from 'redux'
import reducer from './Reducer'
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware)
 export default store
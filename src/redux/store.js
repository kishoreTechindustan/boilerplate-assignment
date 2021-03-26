import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'


//mount it on the store
const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;
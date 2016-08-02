import { createStore } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../utils/dev-tools';

export default function configureStore() {
    const store = createStore(rootReducer, {}, DevTools.instrument())
    
    return store
}
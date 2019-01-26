import { createStore } from 'redux'
// import reducer from './reducers/reducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(devTools)

export default store
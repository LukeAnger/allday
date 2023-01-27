import { createStore } from 'redux'
import { allDayReducer } from './reducers/allDayReducer.js'

const store = createStore(allDayReducer)

export default store;
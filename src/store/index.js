import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

//const { createStore } = require('redux')

const initialState = {
    counter: 0
}

//reducers

const counter = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case'SET_COUNTER':
            return {counter: action.data}
        case 'INCREMENT':
            return { counter: state.counter + 1 }
        case 'DECREMENT':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

//create store here

const enhancer = applyMiddleware(thunk)

const store = createStore(counter, enhancer)

export default store

//get state from store

/* store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'SET_COUNTER', payload: 67})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'}) */
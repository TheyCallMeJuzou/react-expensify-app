import {createStore} from 'redux'

// Action generators - functions that return action objects

// const add = ({ a,b}, c) =>{
//     return a + b
// }

// console.log(add({a: 1, b:2}, 100))

const incrementCount = ({incrementBy = 1}= {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () =>({
    type: 'RESET'
})

const setCount = ({count = 1} = {}) =>({
    type: 'SET',
    count
})

// Reducers

const countReducer = (state = { count: 0}, action)=>{
    
    switch(action.type) {
        case 'INCREMENT' :
            return {count: state.count + action.incrementBy}
        case 'DECREMENT' :
            return {count: state.count - action.decrementBy}
        case 'RESET' :
            return {count: 0}
        case 'SET' :
            return {count: action.count}
        default:
            return state;
    }
}


const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{ //gets called when store changes
    console.log(store.getState())
}) // returns unsubscribe method

store.dispatch(incrementCount({incrementBy: 8}))


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 8
// })
unsubscribe()
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({count: 3}))
console.log(store.getState())
export function increment(){
    return(dispatch) => {
        dispatch({type: 'INCREMENT'})
    }

    //type: 'INCREMENT'
}

export function decrement(){
    return{
        type: 'DECREMENT'
    }
}

export function setCounter(value){
    return{
        type: 'SET_COUNTER', data: value
    }
}
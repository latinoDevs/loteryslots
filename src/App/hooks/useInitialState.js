import {
    useReducer
} from "react"

const types = {
    DOM: {
        init: 'INIT',
        home: 'HOME'
    },
    ACTION: {
        init: 'INITIAL',
        start: 'START',
        set: 'SET',
        clear: 'CLEAR',
        new: 'NEW',
        load: 'LOAD',
        reset: 'RESET'
    },
    DATA: {
        memo: null,
        data: null
    }
}

const state = {
    dom: 'INITIAL',
    action: 'START'
}

const reducer = (action) =>{
    switch (action.TYPE) {
        case types.DOM.home:
            return {
                ...state,
                dom: types.DOM.home
            }

        case types.ACTION.start:
            return {
                ...state,
                action: types.DOM.start
            }
    }
}

export async function useInitialState() {

    const [state, dispatch] = useReducer(state, reducer)

    const getState = () => {
        return state
    }

    return {
        dispatch,
        getState,
        state
    }
}



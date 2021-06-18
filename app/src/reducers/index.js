import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
    memes: [],
    isLoading: false,
    error: ''
}

export default function reducer(state = initialState, action ) {
    switch(action.type){
        case FETCH_START:
            return({
                ...state,
                isLoading: true
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                isLoading: false,
                memes: action.payload
            })
        case FETCH_FAIL:
            return({
                ...state,
                isLoading: true,
                error: action.payload
            })
        default:
            return state;
    }
}
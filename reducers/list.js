import { ADD } from '../constants/ActionTypes'

const initialState = [
    {
        text: 'First Item'
    }
]

export default function list(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return [
                { text: action.text },
                ...state
            ]
        default:
            return state
    }  
}
import {
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_ERROR
} from './searchTypes'

const initialState = {
    loading: false,
    foodList: [],
    food: {}
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                food: {}
            }
        case GET_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                foodList: action.payload
            }
        case GET_SEARCH_ERROR:
            return {
                ...state,
                loading: false
                // console.log(...error...) is called in the async action that calls getSearchError()
            }
        default:
            return state
    }
}

export default searchReducer
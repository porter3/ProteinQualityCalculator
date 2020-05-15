import axios from 'axios'
import {
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_ERROR
} from './searchTypes'
import capitalizeAllStringsAtStart from '../../components/helpers/capitalizeAllStringsAtStart'

export const getSearchRequest = () => {
    return {
        type: GET_SEARCH_REQUEST
    }
}

export const getSearchSuccess = foodArray => {
    return {
        type: GET_SEARCH_SUCCESS,
        payload: foodArray
    }
}

export const getSearchError = error => {
    return {
        type: GET_SEARCH_ERROR,
        payload: error
    }
}

export const getSearchResults = query => {
    console.log('This prints')
    const appId = 'c8e7e023'
    const appKey = '717eef2cdf01a4215328e3ccc428f6b4'
    return dispatch => {
        console.log('this doesnt print')
        dispatch(getSearchRequest)
        axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=' + query, {
            headers: {
                'x-app-id': appId,
                'x-app-key': appKey
            }
        })
            .then(response => {
                console.log('this doesnt print')
                const foodArray = response.common.map(food => {
                    return {
                        foodName: capitalizeAllStringsAtStart(food.food_name),
                        photo: food.photo.thumb
                    }
                })
                dispatch(getSearchSuccess(foodArray))
            })
            .catch(error => {
                console.log('this doesnt print either')
                dispatch(getSearchError(error))
            })
    }
}
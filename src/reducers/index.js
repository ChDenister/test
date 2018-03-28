import {combineReducers} from 'redux';
import C from '../constants/index.js';

const initialState = {
    modal: {
        show: false
    },
    form: {
        result: false
    }
};

const modal = (state = initialState.modal, action = {type: null}) => {
    switch (action.type) {
        case C.SHOW_MODAL:
            return {
                show: true
            }
        case C.HIDE_MODAL:
            return {show: false}
        default:
            return state
    }
}
const form = (state = initialState.form, action = {type: null}) => {
    switch (action.type) {
        case C.FETCH_FORM_SUCCESS:
            console.log(action)
            return {
                result: action.payload.result
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    modal
    , form
})
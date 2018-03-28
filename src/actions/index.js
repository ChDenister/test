import C from '../constants/index';
import {fetchForm as fetchFormApi} from '../api/index.js'

export const showModal = ()=>({
    type: C.SHOW_MODAL
})

export const hideModal = ()=>({
    type: C.HIDE_MODAL
})


export const fetchForm = (email,pass)=>async dispatch=> {
    dispatch({type: C.FETCH_FORM_START})
    return  await fetchFormApi(email,pass).then(
        result => dispatch({
            type: C.FETCH_FORM_SUCCESS,
            payload:result
        })
    ).catch( (err)=>dispatch({
        type: C.FETCH_FORM_FAIL,
        payload: err,
        error: true
    }))

}


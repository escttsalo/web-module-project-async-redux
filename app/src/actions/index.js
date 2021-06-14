import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getMemes = () => dispatch => {
    dispatch(fetchStart());

    axios.get('https://api.imgflip.com/get_memes')
    .then( res => {
        dispatch(fetchSuccess(res.data.data.memes));
    })
    .catch( err => {
        dispatch(fetchFail(err));
    });

}


export const fetchStart = ()=> {
    return {type: FETCH_START};
}

export const fetchSuccess = memes => {
    return {type: FETCH_SUCCESS, payload:memes};
}

export const fetchFail = error => {
    return {type: FETCH_FAIL, payload:error};
}
import {
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from '../actions/FetchDataActions';

const dataFetchReducer = (state, {type, payload}) => {
    switch (type) {
        case FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export default dataFetchReducer;

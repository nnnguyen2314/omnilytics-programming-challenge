import {
    FILE_GENERATION_REQUESTING,
    FILE_GENERATION_SUCCESS,
    SET_FILE_GENERATION_LINK,

    FILE_CONTENT_REPORT_REQUESTING,
    FILE_CONTENT_REPORT_SUCCESS,
    SET_FILE_CONTENT_REPORT
} from '../actions/file-generate-action';

// Define your state here
const initialState = {
    loading: false,
    file: {
        name: '',
        url: '',
    },
    fileReport: {
        numberOfAlphabeticals: null,
        numberOfRealNumbers: null,
        numberOfIntegers: null,
        numberOfAlphanumerics: null,
    },
    message: '',
    error: '',
};

// This export default will control your state for your application
const fileGeneration = (state = initialState, {type, payload}) => {
    switch(type) {
        case FILE_GENERATION_REQUESTING:
            return {
                ...state,
                loading: true,
                message: 'loading...',
                error: '',
            };
        case SET_FILE_GENERATION_LINK:
            return {
                ...state,
                file: payload,
                loading: false,
                message: 'Generated successfully!',
                error: '',
            };
        case FILE_CONTENT_REPORT_REQUESTING:
            return {
                ...state,
                loading: true,
                message: 'loading...',
                error: '',
            };
        case SET_FILE_CONTENT_REPORT:
            return {
                ...state,
                fileReport: payload,
                loading: false,
                message: 'Generated successfully!',
                error: '',
            };
        // Return default state if you didn't match any case
        default:
            return state;
    }
};

export default fileGeneration;

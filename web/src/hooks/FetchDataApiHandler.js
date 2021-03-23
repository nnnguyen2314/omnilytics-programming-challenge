import {useEffect, useReducer, useState} from "react";
import defaultAxios from 'axios';
import dataFetchReducer from '../reducers/DataFetchReducer';

import {
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from '../actions/FetchDataActions';

const axios = defaultAxios.create({
    baseURL: 'http://localhost:3000/',
    headers: {'Content-Type': 'application/json'}
});

const FetchDataApiHandler = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await axios(url);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE' });
            }
        };
        fetchData();
    }, [url]);


    return [state, setUrl];
};

export default FetchDataApiHandler;

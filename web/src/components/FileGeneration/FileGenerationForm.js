import React from 'react';

import FetchDataApiHandler from "../../hooks/FetchDataApiHandler";

const initialData = {
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
};

const FileGenerationForm = () => {
    const [{ data, isLoading, isError }, doFetch] = FetchDataApiHandler('/generate', initialData);

    const onSubmit = (e) => {
        doFetch('/generate');
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <button type="submit">Generate</button>
            </p>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
            <p>
                Link: <a href={data.file.url}>{data.file.name}</a>
            </p>
            )}
    </form>
    );
};

export default FileGenerationForm;

import React from 'react';

import FetchDataApiHandler from "../../hooks/FetchDataApiHandler";

const initialData = {
    fileReport: {
        numberOfAlphabeticals: null,
        numberOfRealNumbers: null,
        numberOfIntegers: null,
        numberOfAlphanumerics: null,
    },
};

const FileContentReportForm = () => {
    const [{ data, isLoading, isError }, doFetch] = FetchDataApiHandler('/generate', initialData);

    const onSubmit = (e) => {
        doFetch('/generate');
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <button type="submit">Report</button>
            </p>
            {/*<p>*/}
            {/*    Alphabeticals: <span>{data.fileReport.numberOfAlphabeticals}</span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Real numbers: <span>{data.fileReport.numberOfRealNumbers}</span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Integers: <span>{data.fileReport.numberOfIntegers}</span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Alphanumerics: <span>{data.fileReport.numberOfAlphanumerics}</span>*/}
            {/*</p>*/}
        </form>
    );
};

export default FileContentReportForm;

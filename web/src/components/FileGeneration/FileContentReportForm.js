import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    FILE_CONTENT_REPORT_SUCCESS
} from '../../redux/actions/file-generate-action';

const FileContentReportForm = ({
                                fileReport,
                                setFileReport
                            }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        setFileReport(fileReport);
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <button type="submit">Report</button>
            </p>
            <p>
                Alphabeticals: <span>{fileReport.numberOfAlphabeticals}</span>
            </p>
            <p>
                Real numbers: <span>{fileReport.numberOfRealNumbers}</span>
            </p>
            <p>
                Integers: <span>{fileReport.numberOfIntegers}</span>
            </p>
            <p>
                Alphanumerics: <span>{fileReport.numberOfAlphanumerics}</span>
            </p>
        </form>
    );
};

FileContentReportForm.propTypes = {
    fileReport: PropTypes.any,
    setFileReport: PropTypes.func.isRequired
};

// Get state to props
const mapStateToProps = (state) => ({
    fileReport: state.fileGeneration.fileReport
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
    setFileReport: (fileReport) => dispatch({ type: FILE_CONTENT_REPORT_SUCCESS, payload: fileReport })
});

export default connect(mapStateToProps, mapDispatchToProps)(FileContentReportForm);
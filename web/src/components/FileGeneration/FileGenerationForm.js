import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    FILE_GENERATION_SUCCESS, SET_FILE_GENERATION_LINK
} from '../../redux/actions/file-generate-action';

const FileGenerationForm = ({
                                generatedFile,
                                setFile
                            }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        setFile(generatedFile);
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <button type="submit">Generate</button>
            </p>
            <p>
                Link: <a href={generatedFile.url}>{generatedFile.name}</a>
            </p>
    </form>
    );
};

FileGenerationForm.propTypes = {
    generatedFile: PropTypes.any,
    setFile: PropTypes.func.isRequired
};

// Get state to props
const mapStateToProps = (state) => ({
    generatedFile: state.fileGeneration.file
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
    setFile: (file) => dispatch({ type: FILE_GENERATION_SUCCESS, payload: file })
});

export default connect(mapStateToProps, mapDispatchToProps)(FileGenerationForm);

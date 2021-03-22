// Import the redux-saga/effects
import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects'

// Import all actions and api's
import {
  FILE_GENERATION_REQUESTING,
  FILE_GENERATION_SUCCESS,
  SET_FILE_GENERATION_LINK,

  FILE_CONTENT_REPORT_REQUESTING,
  FILE_CONTENT_REPORT_SUCCESS,
  SET_FILE_CONTENT_REPORT
} from '../actions/file-generate-action';

// Import all api's
import {
  generateFileApi,
  getFileContentReportApi
} from '../api/file-generation-api';

// Here's the unique part, generator function*, function with asterisk(*)

function* getGeneratedFile() {
  yield put({ type: FILE_GENERATION_REQUESTING });

  const file = yield call(generateFileApi);

  yield put({ type: SET_FILE_GENERATION_LINK, payload: file });
}

function* getFileContentReport() {
  yield put({ type: FILE_CONTENT_REPORT_REQUESTING });

  const fileReport = yield call(getFileContentReportApi);

  yield put({ type: SET_FILE_CONTENT_REPORT, payload: fileReport });
}

// Export the saga (file-generation-saga)
export default function* fileGenerationSaga() {
  yield takeEvery(FILE_GENERATION_SUCCESS, getGeneratedFile);
  yield takeEvery(FILE_CONTENT_REPORT_SUCCESS, getFileContentReport);
}

import { spawn } from 'redux-saga/effects'

// Sagas
import fileGenerationSaga from './file-generation-saga';

// Export the root saga
export default function* rootSaga() {
	yield spawn(fileGenerationSaga);
}

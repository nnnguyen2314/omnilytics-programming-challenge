import { spawn } from 'redux-saga/effects'

// Sagas
import fileGenerationSaga from './file-generation-saga';

// Export the root saga
export default function* rootSaga() {
	console.log("Hello From Redux-Saga!")

	yield spawn(fileGenerationSaga);
}
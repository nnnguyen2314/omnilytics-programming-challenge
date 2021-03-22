// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import fileGeneration from './file-generation-reducer';

export default combineReducers({
	fileGeneration,
})
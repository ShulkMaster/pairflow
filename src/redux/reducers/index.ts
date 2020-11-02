import {combineReducers} from 'redux';
import {dataReducer} from './data.reducer';

export * from './data.reducer';
export {dataInitialState} from './initialState';

export const rootReducer = combineReducers({dataReducer})
export type RootState = ReturnType<typeof rootReducer>;
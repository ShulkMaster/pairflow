import {DataReducerAction} from 'redux/reducers';
import {Dispatch} from 'react';
import {state} from 'redux/store';
import {useDispatch} from 'react-redux';

export const useThunkDispatch = (): Dispatch<DataReducerAction> => useDispatch<typeof state.dispatch>();
import {ErrorCause, Gif, Loadable} from 'types';
import {cloneDeep} from 'lodash';
import {dataActions} from 'redux/actions';
import {dataInitialState} from 'redux/reducers';

export type DataReducerAction = {
  type: string;
  payload: {
    data: Gif[];
    error: ErrorCause | undefined;
  };
}

export const dataReducer = (state = dataInitialState(), action: DataReducerAction): Loadable<Gif[]> => {
  const newState = cloneDeep(state);
  switch (action.type) {
    case dataActions.setLoading:
      newState.isLoading = true;
      return newState;
    case dataActions.setError:
      newState.isLoading = false;
      newState.error = action.payload.error;
      return newState;
    case dataActions.setLoaded:
      newState.isLoading = false;
      newState.error = undefined;
      newState.data = action.payload.data;
      return newState;
    default:
      return newState;
  }
}
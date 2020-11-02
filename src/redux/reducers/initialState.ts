import {Gif, Loadable} from 'types';

export const dataInitialState = (): Loadable<Gif[]> => {
  return {
    data: [],
    error: undefined,
    isLoading: false,
  }
}
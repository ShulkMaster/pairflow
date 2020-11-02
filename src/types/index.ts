export type {Gif} from './state/gif';

export type ErrorCause = {
  message: string;
  error: Error | undefined;
}

export type Loadable<T> = {
  isLoading: boolean;
  data: T;
  error: ErrorCause | undefined;
}
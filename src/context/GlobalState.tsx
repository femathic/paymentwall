/* eslint-disable no-console */
import {
  createContext, useReducer, ReactChildren, ReactChild,
} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  data: [],
  error: '',
  removeError: () => {},
  addError: (err: string) => console.log(err),
  addData: (payload : any) => console.log(payload),
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }: { children : ReactChild | ReactChildren }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addError = (err: string) => {
    dispatch({
      type: 'ADD_ERROR',
      payload: err,
    });
  };

  const removeError = () => {
    dispatch({
      type: 'REMOVE_ERROR',
    });
  };

  const addData = (payload : any) => {
    dispatch({
      type: 'ADD_DATA',
      payload,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        error: state.error,
        removeError,
        addError,
        addData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

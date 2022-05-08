import {Dispatch} from 'redux';
import {IScreenAction, SET_SCREEN} from '../types/screen';

export const setScreen =
  (state: string) => (dispatch: Dispatch<IScreenAction>) => {
    dispatch({
      type: SET_SCREEN,
      payload: {
        name: state,
      },
    });
  };

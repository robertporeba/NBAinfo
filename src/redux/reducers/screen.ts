import {IScreenAction, IScreenState, SET_SCREEN} from '../types/screen';

const initialState: IScreenState = {
  name: null,
};

export default function screen(
  state: IScreenState = initialState,
  action: IScreenAction,
) {
  const {type, payload} = action;
  switch (type) {
    case SET_SCREEN:
      return {
        ...state,
        name: payload ? payload.name : null,
      };
    default:
      return state;
  }
}

import {LIVE_GAMES} from '../../navigation/navigation-types';
import {IScreenAction, IScreenState, SET_SCREEN} from '../types/screen';

const initialState: IScreenState = {
  name: LIVE_GAMES,
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

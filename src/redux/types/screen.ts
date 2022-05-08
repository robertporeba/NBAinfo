export interface IScreenState {
  name: string | null;
}

export interface IScreenPayload {
  name: string | null;
}

export type ScreenActionType = 'SET_SCREEN';

export const SET_SCREEN: ScreenActionType = 'SET_SCREEN';

export interface IScreenAction {
  payload?: IScreenPayload | null;
  type: ScreenActionType;
}

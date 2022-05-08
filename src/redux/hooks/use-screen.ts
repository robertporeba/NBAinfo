import {useSelector} from 'react-redux';
import {IScreenPayload} from '../types/screen';

export default function useScreenRedux() {
  const stateScreen: IScreenPayload = useSelector((state: any) => state.screen);
  return stateScreen;
}

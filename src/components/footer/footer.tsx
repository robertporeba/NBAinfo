import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBasketballBall,
  faHistory,
  faStar,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as navigation from '../../navigation/rootNavigation';
import useScreenRedux from '../../redux/hooks/use-screen';
import {
  FUTURE,
  HISTORY,
  LIVE_GAMES,
  STATS,
} from '../../navigation/navigation-types';
import {useDispatch} from 'react-redux';
import {setScreen} from '../../redux/actions/screen';

export default function Footer() {
  const dispatch = useDispatch();
  const {name} = useScreenRedux();

  const isLiveGamesActive = name === LIVE_GAMES ? 'red' : 'gray';
  const isHistoryActive = name === HISTORY ? 'red' : 'gray';
  const isFutureActive = name === FUTURE ? 'red' : 'gray';
  const isStatsActive = name === STATS ? 'red' : 'gray';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(LIVE_GAMES);
          dispatch(setScreen(LIVE_GAMES));
        }}>
        <FontAwesomeIcon icon={faBasketballBall} color={isLiveGamesActive} />
        <Text style={[styles.text, {color: isLiveGamesActive}]}>Na żywo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(HISTORY);
          dispatch(setScreen(HISTORY));
        }}>
        <FontAwesomeIcon icon={faHistory} color={isHistoryActive} />
        <Text style={[styles.text, {color: isHistoryActive}]}>
          Historia meczy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(FUTURE);
          dispatch(setScreen(FUTURE));
        }}>
        <FontAwesomeIcon icon={faPerson} color={isFutureActive} />
        <Text style={[styles.text, {color: isFutureActive}]}>
          Przyszłe mecze
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(STATS);
          dispatch(setScreen(STATS));
        }}>
        <FontAwesomeIcon icon={faStar} color={isStatsActive} />
        <Text style={[styles.text, {color: isStatsActive}]}>Statystyki</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    height: '7.5%',
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  text: {
    fontWeight: 'bold',
  },
  touchable: {
    alignItems: 'center',
  },
});

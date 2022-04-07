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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(LIVE_GAMES);
          dispatch(setScreen(LIVE_GAMES));
        }}>
        <FontAwesomeIcon
          icon={faBasketballBall}
          color={name === LIVE_GAMES ? 'orange' : 'red'}
        />
        <Text style={styles.text}>Na żywo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(HISTORY);
          dispatch(setScreen(HISTORY));
        }}>
        <FontAwesomeIcon
          icon={faHistory}
          color={name === HISTORY ? 'orange' : 'red'}
        />
        <Text style={styles.text}>Historia meczy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(FUTURE);
          dispatch(setScreen(FUTURE));
        }}>
        <FontAwesomeIcon
          icon={faPerson}
          color={name === FUTURE ? 'orange' : 'red'}
        />
        <Text style={styles.text}>Przyszłe mecze</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          navigation.navigate(STATS);
          dispatch(setScreen(STATS));
        }}>
        <FontAwesomeIcon
          icon={faStar}
          color={name === STATS ? 'orange' : 'red'}
        />
        <Text style={styles.text}>Statystyki</Text>
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
    color: 'red',
    fontWeight: 'bold',
  },
  touchable: {
    alignItems: 'center',
  },
});

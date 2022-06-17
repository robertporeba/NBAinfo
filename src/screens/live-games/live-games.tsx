import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import liveGamesService from '../../services/live-games.service';

export default function LiveGames() {
  useEffect(() => {
    liveGamesService.getLiveGames().then(response => {});
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Na Żywo</Text>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Aktualnie nie odbywa się żaden mecz
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Odśwież</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF0',
  },
  title: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
  card: {
    marginTop: 10,
    backgroundColor: 'black',
    paddingTop: 30,
    paddingBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'orange',
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

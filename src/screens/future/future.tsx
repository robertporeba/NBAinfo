import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import futureService from '../../services/future.service';

export default function Future() {
  const [futureGames, setFutureGames] = useState<any[]>([]);

  useEffect(() => {
    futureService.getFutureGames().then(response => {
      setFutureGames(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Przyszłe mecze</Text>
      <ScrollView style={{flex: 1, marginBottom: 60}}>
        {futureGames.map((game, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.league}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray'}}>{game.country_name} </Text>
                <Text style={{color: 'gray'}}>{game.league_name}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray'}}>{game.event_date} </Text>
                <Text style={{color: 'gray'}}>{game.event_time}</Text>
              </View>
            </View>
            <View style={styles.teams}>
              <View style={styles.firstTeam}>
                <Image
                  style={styles.firstTeamLogo}
                  source={{uri: game.event_away_team_logo}}
                />
                <Text style={styles.firstTeamText}>{game.event_away_team}</Text>
              </View>
              <View style={styles.pause}>
                <Text style={styles.pauseText}>-</Text>
              </View>
              <View style={styles.secondTeam}>
                <Text style={styles.secondTeamText}>
                  {game.event_home_team}
                </Text>
                <Image
                  style={styles.secondTeamLogo}
                  source={{uri: game.event_home_team_logo}}
                />
              </View>
            </View>
          </View>
        ))}
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
    paddingTop: 10,
    paddingBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  league: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstTeam: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstTeamText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pause: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  secondTeam: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondTeamText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstTeamLogo: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  secondTeamLogo: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
});

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import historyService from '../../services/history.service';
import useHistory from './use-history';

export default function History() {
  const [historyGames, setHistoryGames] = useState<any[]>([]);
  const [loader, setLoader] = useState(false);

  const {isFirstTeamWinner, getTeamScore} = useHistory();

  useEffect(() => {
    setLoader(true);
    historyService
      .getHistoryGames()
      .then(response => {
        setHistoryGames(response);
      })
      .finally(() => setLoader(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Przeszłe mecze</Text>
      {loader ? (
        <ActivityIndicator size={'large'} style={styles.loader} />
      ) : (
        <ScrollView style={styles.scrollView}>
          {historyGames.map(game => (
            <View style={styles.gameContainer}>
              <View style={styles.gameHeader}>
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
                    style={{height: 40, width: 40, marginRight: 10}}
                    source={{uri: game.event_away_team_logo}}
                  />
                  <Text
                    style={{
                      color: isFirstTeamWinner(game.event_final_result)
                        ? 'green'
                        : 'red',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {game.event_away_team}
                  </Text>
                </View>
                <View style={styles.teamPause}>
                  <Text style={styles.teamPauseText}>-</Text>
                </View>
                <View style={styles.secondTeam}>
                  <Text
                    style={{
                      color: !isFirstTeamWinner(game.event_final_result)
                        ? 'green'
                        : 'red',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {game.event_home_team}
                  </Text>
                  <Image
                    style={{height: 40, width: 40, marginLeft: 10}}
                    source={{uri: game.event_home_team_logo}}
                  />
                </View>
              </View>
              <View style={styles.score}>
                <View style={styles.firstScore}>
                  <Text style={styles.firstScoreText}>
                    {getTeamScore(game.event_final_result, 1)}
                  </Text>
                </View>
                <View style={styles.pause}>
                  <Text style={styles.pauseText}>-</Text>
                </View>
                <View style={styles.secondScore}>
                  <Text style={styles.secondScoreText}>
                    {getTeamScore(game.event_final_result, 2)}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
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
  scrollView: {
    flex: 1,
    marginBottom: 60,
  },
  loader: {
    marginTop: 20,
  },
  gameContainer: {
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
  gameHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondScoreText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondScore: {
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
  pause: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstScoreText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstScore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondTeam: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamPauseText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  teamPause: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstTeam: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

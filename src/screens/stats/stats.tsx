import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import statsService from '../../services/stats.service';
import useStats from './use-stats';

export default function Stats() {
  const [teams, setTeams] = useState<any[]>([]);
  const [leagueName, setLeagueName] = useState('');
  const [teamsLogo, setTeamsLogo] = useState<any[]>([]);

  const {getLogo} = useStats();

  useEffect(() => {
    statsService.getTeams().then(response => {
      setTeams(response.total);
    });
    statsService.getLeague().then(response => {
      setLeagueName(response[0].country_name + ' ' + response[0].league_name);
    });
    statsService.getTeamsLogo().then(response => {
      setTeamsLogo(response);
    });
  }, []);

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>{leagueName}</Text>
      <ScrollView style={styles.scrollView}>
        {teams.map(team => (
          <View key={team.team_key} style={styles.team}>
            <Image
              style={styles.image}
              source={{uri: getLogo(team.team_key, teamsLogo)}}
            />
            <Text style={styles.teamName}>
              {team.standing_place}. {team.standing_team}
            </Text>
            <Text style={styles.stats}>
              P:{team.standing_P} W:{team.standing_W} L:{team.standing_L}{' '}
              {team.standing_F}:{team.standing_A}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
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
    paddingTop: 20,
  },
  team: {
    flexDirection: 'row',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  teamName: {
    fontSize: 14,
  },
  stats: {
    textAlign: 'right',
    flex: 1,
  },
});

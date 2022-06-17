import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import statsService from '../../services/stats.service';

export default function Stats() {
  const [teams, setTeams] = useState<any[]>([]);
  const [leagueName, setLeagueName] = useState('');
  const [teamsLogo, setTeamsLogo] = useState<any[]>([]);
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

  const getLogo = (id: string) => {
    const logo: any = teamsLogo.filter((x: any) => x.team_key === id);
    return logo[0] ? logo[0].team_logo : '';
  };

  return (
    <View style={{flex: 1, backgroundColor: '#EBECF0'}}>
      <Text
        style={{
          backgroundColor: 'white',
          fontWeight: 'bold',
          fontSize: 18,
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 10,
          textTransform: 'uppercase',
        }}>
        {leagueName}
      </Text>
      <ScrollView style={{flex: 1, marginBottom: 60, paddingTop: 20}}>
        {teams.map(team => (
          <View
            key={team.team_key}
            style={{
              flexDirection: 'row',
              height: 30,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 10,
            }}>
            <Image
              style={{height: 18, width: 18, marginRight: 5}}
              source={{uri: getLogo(team.team_key)}}
            />
            <Text style={{fontSize: 14}}>
              {team.standing_place}. {team.standing_team}
            </Text>
            <Text style={{textAlign: 'right', flex: 1}}>
              P:{team.standing_P} W:{team.standing_W} L:{team.standing_L}{' '}
              {team.standing_F}:{team.standing_A}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

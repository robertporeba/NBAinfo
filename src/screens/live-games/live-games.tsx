import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import liveGamesService from '../../services/live-games.service';

export default function LiveGames() {
  const [image, setImage] = useState();
  const test = () => {
    liveGamesService.getLiveGames().then(response => {
      //console.log('DDDDD', response);
    });
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
        Na Żywo
      </Text>
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'black',
            paddingTop: 30,
            paddingBottom: 20,
            marginRight: 10,
            marginLeft: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Aktualnie nie odbywa się żaden mecz
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              width: 100,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>Odśwież</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

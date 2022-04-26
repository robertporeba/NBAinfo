import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import liveGamesService from '../../services/live-games.service';

export default function LiveGames() {
  const [image, setImage] = useState();
  useEffect(() => {
    liveGamesService.getTestData().then(response => {
      setImage(response.message);
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#EBECF0'}}>
      <Image
        style={{height: 500}}
        source={{
          uri: image,
        }}
      />
      <Text>GRY NA ŻYWO</Text>
    </View>
  );
}

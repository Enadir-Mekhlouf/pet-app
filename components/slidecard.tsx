import {View, Text} from 'react-native';
import React from 'react';

const slidecard = ({animal}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width: 100,
        margin: 5,
        height: 70,
        padding: 10,
        borderRadius: 35,
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 19}}>{animal}</Text>
    </View>
  );
};

export default slidecard;

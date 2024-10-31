import {View, Text} from 'react-native';
import React from 'react';

const Petcard = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        rowGap: 10,
        height: 200,
        width: 200,
        backgroundColor: '#050505',
        borderRadius: 30,
        padding: 15,
        marginHorizontal: 3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: 30,
            backgroundColor: 'gray',
            width: 60,
            height: 60,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>icon</Text>
        </View>
        <Text style={{color: '#FFFFFF'}}>icon</Text>
      </View>
      <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>
        Charlie
      </Text>
      <Text style={{color: 'gray', fontSize: 18}}>
        American pit Bull Terrier
      </Text>
    </View>
  );
};

export default Petcard;

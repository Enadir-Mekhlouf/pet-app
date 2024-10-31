import {View, Text} from 'react-native';
import React from 'react';

const Userdetail = () => {
  return (
    <View
      style={{
        width: 405,
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
        height: 80,
        paddingHorizontal: 5,
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row', columnGap: 20}}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: 'gray',
            borderRadius: 35,
          }}></View>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{color: '#050505', fontSize: 20, fontWeight: 'bold'}}>
            Hi, Kriston Watson
          </Text>
          <Text style={{color: 'gray', fontSize: 16}}>
            wotson_kristy@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Userdetail;

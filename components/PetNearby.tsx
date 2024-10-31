import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Slidecard from './slidecard';

const PetNearby = () => {
  return (
    <View
      style={{
        width: 393,
        height: 200,
        backgroundColor: 'rgba(128, 128, 128, 0.6)',
        borderRadius: 40,
        paddingHorizontal: 15,
        paddingTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#050505',
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>icon</Text>
        </View>
        <Text>Animal Pet Care</Text>
        <Text>Icon</Text>
      </View>
      <View style={{height: 80, borderRadius: 40}}>
        <ScrollView
          horizontal={true}
          style={{
            marginHorizontal: -15,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
          showsHorizontalScrollIndicator={false}>
          <Slidecard animal={'bathing'} />
          <Slidecard animal={'bathing'} />
          <Slidecard animal={'bathing'} />
          <Slidecard animal={'bathing'} />
          <Slidecard animal={'bathing'} />
          <Slidecard animal={'bathing'} />
        </ScrollView>
      </View>
    </View>
  );
};

export default PetNearby;

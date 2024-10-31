import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Userdetail from '../../components/Userdetail';
import Petcard from '../../components/Petcard';
import PetNearby from '../../components/PetNearby';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: '#FED5C5',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 16}}>icon</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Profile</Text>
        <Text style={{fontSize: 16}}>icon</Text>
      </View>
      <View style={{alignItems: 'center', width: '100%', paddingVertical: 10}}>
        <Userdetail />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#050505', fontSize: 21, fontWeight: 'bold'}}>
          Your pets
        </Text>
        <Text>See all</Text>
      </View>
      <View style={{height: 210}}>
        <ScrollView horizontal={true} style={{marginHorizontal: -10}}>
          <Petcard />
          <Petcard />
          <Petcard />
          <Petcard />
          <Petcard />
          <Petcard />
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#050505', fontSize: 22, fontWeight: 'bold'}}>
          Pet Care Nearby
        </Text>
        <Text>See all</Text>
      </View>
      <PetNearby />

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: [{translateX: -130}],
        }}>
        <View
          style={{
            paddingHorizontal: 3,
            height: 70,
            width: 300,
            backgroundColor: '#050505',
            justifyContent: 'space-between',
            borderRadius: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{paddingLeft: 20}}>
            <MaterialCommunityIcons name="home" size={35} color={'#FFFFFF'} />
          </View>
          <MaterialCommunityIcons name="magnify" size={35} color={'#FFFFFF'} />

          <View
            style={{
              height: 65,
              width: 65,
              borderRadius: 30,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center', // not working for me
            }}>
            <MaterialCommunityIcons name="account" size={35} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

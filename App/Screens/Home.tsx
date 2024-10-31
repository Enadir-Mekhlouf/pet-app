import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';
import Slidecard from '../../components/slidecard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: wWidth, height} = Dimensions.get('window');
const SNAP_POINTS = [-wWidth, 0, wWidth];
const cards = [
  {
    source: require('../../assets/dog1.png'),
  },
  {
    source: require('../../assets/dog2.png'),
  },
  {
    source: require('../../assets/dog3.png'),
  },
];

const Card = ({
  card: {source},
  index,
  backgroundColor,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const rotateZ = useSharedValue(Math.random() * 20 - 15);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; y: number}
  >({
    onStart(_, ctx) {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: ({translationX, translationY}, ctx) => {
      x.value = ctx.x + translationX;
      y.value = ctx.y + translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS);

      // Run swipe logic based on the snap destination
      if (dest === SNAP_POINTS[0]) {
        // Swiped to the left
        runOnJS(onSwipeLeft)(index);
      } else if (dest === SNAP_POINTS[2]) {
        // Swiped to the right
        runOnJS(onSwipeRight)(index);
      }

      // Snap card back to center after swiping
      x.value = withSpring(dest, {velocity: velocityX});
      y.value = withSpring(0, {velocity: velocityY});
    },
  });
  //console.log(x);
  const style = useAnimatedStyle(() => ({
    transform: [
      // {rotateX: '10deg'},
      // {rotateY: '30deg'},
      {rotateZ: `${rotateZ.value}deg`},
      {translateX: x.value},
      {translateY: y.value},
    ],
  }));
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.card, style, {backgroundColor}]}>
        <Image source={source} style={{width: '100%', height: 500}} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export const assets = cards.map(card => card.source);
const Home = ({navigation}) => {
  const [leftSwipedCards, setLeftSwipedCards] = useState([]);
  const [rightSwipedCards, setRightSwipedCards] = useState([]);

  const handleSwipeLeft = index => {
    setLeftSwipedCards(prev => [...prev, cards[index]]);
  };

  const handleSwipeRight = index => {
    setRightSwipedCards(prev => [...prev, cards[index]]);
  };

  console.log('left', leftSwipedCards);
  console.log('right', rightSwipedCards);

  const arrayColor = ['#B2D6E2', '#FAA7B9', '#FAEAC3'];
  return (
    <View
      style={{
        backgroundColor: '#FED5C5',
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MaterialCommunityIcons name="menu" size={30} />
        <MaterialCommunityIcons name="magnify" size={30} />
      </View>
      <Text style={{fontSize: 35, fontWeight: 'bold'}}>Discover</Text>
      <Text style={{fontSize: 20, fontWeight: '500'}}>find a pet for you</Text>
      <View style={{height: 100}}>
        <ScrollView
          horizontal={true}
          style={{height: 70, marginHorizontal: -10}}>
          <Slidecard animal={'Dog'} />
          <Slidecard animal={'cat'} />
          <Slidecard animal={'Dog'} />
          <Slidecard animal={'Dog'} />
          <Slidecard animal={'Dog'} />
        </ScrollView>
      </View>

      <View style={{alignItems: 'center'}}>
        {cards.map((card, index) => (
          <Card
            card={card}
            key={index}
            index={index}
            backgroundColor={arrayColor[index]}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        ))}
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: [{translateX: -90}],
        }}
        onPress={() => navigation.navigate('Profile')}>
        <View
          style={{
            paddingHorizontal: 3,
            height: 70,
            width: 200,
            backgroundColor: '#050505',
            justifyContent: 'space-between',
            borderRadius: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontSize: 20,
              flex: 1,
            }}>
            See more
          </Text>
          <View
            style={{
              height: 65,
              width: 65,
              borderRadius: 30,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="home" size={40} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    position: 'absolute',
    width: '80%',
    height: 500,
    justifyContent: 'center',
    borderRadius: 40,
  },
  image: {
    height: 400,
    width: '90%',
  },
});

export default Home;

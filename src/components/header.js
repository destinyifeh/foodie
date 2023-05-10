import React from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';
import {H2, H3} from '../ui/tags';
import Styles from '../utils/styles';

export default function Header(props) {
  const {width, height} = useWindowDimensions();
  const deviceWidth = Dimensions.get('window').height;
  console.log(deviceWidth, 'widths');
  return (
    <View style={Styles.headerContainer}>
      <View style={Styles.topHeader}>
        <H2 style={Styles.headerText}>Foodie</H2>
        <TouchableOpacity onPress={() => props.handleMenu()}>
          <Entypo name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: width <= 430 ? 'row' : 'column',
          alignItems: 'center',
        }}>
        <View style={{width: 200}}>
          <Image
            source={require('../assets/images/custom6.png')}
            resizeMode="center"
            // resizeMethod="resize"
            style={{width: 200, height: 150}}
          />
        </View>
        <View style={width <= 430 ? {flex: 1} : {flex: 0}}>
          <H3
            style={{
              color: 'white',
              paddingLeft: 0,
              fontFamily: 'Roboto-Thin',
            }}>
            Get your delicious food here
          </H3>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              padding: 5,
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Items')}>
              <Button mode="elevated">Make a request</Button>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

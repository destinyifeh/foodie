import React from 'react';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {Surface} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {H3} from '../../src/ui/tags';
export default function ScreenHeader(props) {
  const {width} = useWindowDimensions();
  React.useEffect(() => {
    console.log(props, 'route');
  }, []);
  return (
    <Surface
      elevation={5}
      style={{
        backgroundColor: '#8b0000',
        padding: 20,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{alignSelf: 'flex-start'}}
        onPressIn={() =>
          props.navigation.reset({index: 0, routes: [{name: 'Home'}]})
        }>
        <Entypo name="chevron-with-circle-left" color="white" size={25} />
      </TouchableOpacity>
      <H3
        style={{
          color: 'white',
          alignSelf: 'center',
          textAlign: 'center',
          left: width <= 430 ? 100 : 105,
          fontFamily: 'Roboto-Bold',
        }}>
        Foodie Varieties
      </H3>
    </Surface>
  );
}

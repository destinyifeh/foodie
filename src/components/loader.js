import React from 'react';
import {Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import * as Animatable from 'react-native-animatable';
export const Loader = ({setLoading}) => {
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <Animatable.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animation={'flash'}
        iterationCount="infinite">
        <Entypo name="dots-three-horizontal" size={80} color="#8b0000" />
      </Animatable.View>
      <Text style={{textAlign: 'center'}}>Please wait...</Text>
    </>
  );
};

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Nav(props) {
  const navigation = useNavigation();
  React.useEffect(() => {
    console.log(props.navigation, 'nav');
  }, []);

  const handleContact = () => {
    props.handleCloseMenu();
    props.handleOpen();
  };
  return (
    <>
      <Animatable.View animation={'fadeInLeft'}>
        <View style={{backgroundColor: '#8b0000', height: '100%'}}>
          <TouchableOpacity
            onPress={() => props.handleCloseMenu()}
            style={{top: 8, alignSelf: 'flex-end', right: 10}}>
            <Entypo name="cross" size={30} color="white" />
          </TouchableOpacity>
          <View style={{marginTop: '20%', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => props.handleCloseMenu()}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  padding: 10,
                  fontFamily: 'Roboto-Bold',
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleContact()}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  padding: 10,
                  fontFamily: 'Roboto-Bold',
                }}>
                Contact Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.handleCloseMenu()}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  padding: 10,
                  fontFamily: 'Roboto-Bold',
                }}>
                About Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Items')}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  padding: 10,
                  fontFamily: 'Roboto-Bold',
                }}>
                Food Library
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </>
  );
}

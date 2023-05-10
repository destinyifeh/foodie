import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, HelperText} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {H3} from '../ui/tags';
import Styles from '../utils/styles';
function ContactInfo() {
  const [message, setMessage] = React.useState({body: '', email: ''});
  const [alert, setAlert] = React.useState({
    errorEmail: '',
    errorBody: '',
    success: '',
  });
  const [loading, setLoading] = React.useState(false);
  function handleChange(name, value) {
    setMessage({...message, [name]: value});
  }

  function onSubmit() {
    let error, success;
    setLoading(true);
    if (!message?.email) {
      error = 'Add your email address!';
      setAlert({...alert, errorEmail: error});
      setLoading(false);
      return false;
    } else if (!message?.body) {
      error = 'Add message!';
      setAlert({...alert, errorBody: error});
      setLoading(false);

      return false;
    }
    setLoading(true);

    const messageBody = {
      ...message,
    };

    console.log(messageBody, 'message');
    setTimeout(() => {
      success = 'Message delivered successfully';
      setMessage({...message, email: '', body: ''});
      setLoading(false);
      setAlert({...alert, errorBody: '', errorEmail: '', success: success});
    }, 5000);

    setTimeout(() => {
      setAlert({...alert, success: ''});
    }, 9000);
  }

  function handleContact() {
    let whatsapp_url =
      'whatsapp://send?text=' +
      'Hello from Foodie!' +
      '&phone=234' +
      '9033662731';
    Linking.openURL(whatsapp_url)
      .then(supported => {
        console.log(supported);
      })
      .catch(err => {
        console.log(err, 'err');
        Alert.alert(
          null,
          'An error occured while opening whatsapp on your device!',
        );
      });
  }

  return (
    <ScrollView style={{flex: 1, margin: 5, padding: 5}}>
      <H3 style={Styles.openingText}>Get In Touch With Us</H3>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => handleContact()}>
          <FontAwesome5Brands
            name="whatsapp-square"
            size={35}
            color="#25d366"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => Linking.openURL('mailto:destechofficial@gmail.com')}>
          <MaterialCommunityIcons name="gmail" size={40} color="#BB001B" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Entypo name="facebook-with-circle" size={40} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => Linking.openURL('https://www.twitter.com/')}>
          <Entypo name="twitter-with-circle" size={40} color="#00acee" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Entypo name="instagram-with-circle" size={40} color="#d62976" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => Alert.alert('Foodie', 'Coming soon!')}>
          <Entypo name="linkedin-with-circle" size={40} color="#0e76a8" />
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 20}}>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
          Or Use The form Below
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'green',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {alert.success}
        </Text>
        <KeyboardAvoidingView
          behavior="position"
          style={{marginHorizontal: 20}}>
          <TextInput
            style={{
              backgroundColor: 'ghostwhite',
              borderBottomWidth: 2,
              borderBottomColor: '#8b0000',

              borderRadius: 30,
            }}
            placeholder="your email..."
            textContentType="emailAddress"
            onChangeText={val => handleChange('email', val)}
            value={message?.email}
            keyboardType="email-address"
          />
          <HelperText type="error" visible={true}>
            {!message?.email ? alert.errorEmail : ''}
          </HelperText>
          <TextInput
            style={{
              backgroundColor: 'ghostwhite',
              borderBottomWidth: 2,
              borderBottomColor: '#8b0000',
              borderRadius: 30,
              marginVertical: 0,
            }}
            placeholder="your message..."
            multiline={true}
            numberOfLines={4}
            onChangeText={val => handleChange('body', val)}
            value={message?.body}
          />
          <HelperText type="error" visible={true}>
            {!message?.body ? alert.errorBody : ''}
          </HelperText>
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={{marginVertical: 15}}>
            <Button
              disabled={loading ? true : false}
              mode="elevated"
              loading={loading ? true : false}>
              {loading ? 'Sending...' : 'Send '}
            </Button>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default ContactInfo;

import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import codePush from 'react-native-code-push';
import Routes from './src/routes';

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#8b0000'} barStyle="default" />
      <Routes />
    </View>
  );
}

export default codePush(codePushOptions)(App);

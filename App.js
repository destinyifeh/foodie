import {STAGING_DEPLOYMENT_KEY} from '@env';
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import codePush from 'react-native-code-push';
import {CODEPUSH_DEPLOYMENT_KEY} from './src/constants/setup';
import Routes from './src/routes';

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

function App() {
  //onPress={handle.bind(this, 'desto')}>

  useEffect(() => {
    RNBootSplash.hide({fade: true});
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: CODEPUSH_DEPLOYMENT_KEY,
    });
    console.log(STAGING_DEPLOYMENT_KEY, 'STAGG');
    console.log(CODEPUSH_DEPLOYMENT_KEY, 'read');
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#8b0000'} barStyle="default" />
      <Routes />
    </View>
  );
}

export default codePush(codePushOptions)(App);

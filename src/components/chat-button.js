import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function ChatButton() {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: 55,
          height: 55,
          borderRadius: 55,
          backgroundColor: '#8b0000',
          alignItems: 'center',
          position: 'absolute',
          // top: height / 1.5,
          bottom: 0,
          right: 10,
          zIndex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const Skeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={'#8b0000'}>
      <View
        style={{
          marginVertical: 10,
        }}>
        <View
          style={{
            width: '90%',
            height: 100,
            borderRadius: 0,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginVertical: 10,
              width: 150,
              height: 150,
              borderRadius: 10,
            }}
          />
          <View style={{width: 150, height: 150, borderRadius: 10}} />
          <View style={{width: 150, height: 150, borderRadius: 10}} />
          <View style={{width: 150, height: 150, borderRadius: 10}} />
        </View>
        <View
          style={{
            width: '90%',
            height: 100,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginVertical: 10,
              width: 150,
              height: 150,
              borderRadius: 10,
            }}
          />
          <View style={{width: 150, height: 150, borderRadius: 10}} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;

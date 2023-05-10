import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function Map() {
  const initialRegion = {
    // latitude: 37.78825,
    //longitude: -122.4324,
    latitude: 6.524379,
    longitude: 3.379206,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <>
      <MapView
        style={{width: '100%', height: 200, alignSelf: 'center'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
        <Marker coordinate={initialRegion} pinColor="#8b0000" />
      </MapView>
    </>
  );
}

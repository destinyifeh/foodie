import React, {useEffect} from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Loader} from '../../../../components/loader';
import {H3} from '../../../../ui/tags';
export default function ItemDetailScreen(props) {
  const [loading, setLoading] = React.useState(true);
  const [device, setDevice] = React.useState('');
  const {item} = props;
  useEffect(() => {
    const checkDevice = async () => {
      const carrier = await DeviceInfo.getCarrier();
      const system = await DeviceInfo.getSystemName();
      const name = DeviceInfo.getBrand();
      const deviceInfo = {
        carrier,
        system,
        name,
      };
      setDevice(deviceInfo);
      console.log(deviceInfo, 'ggt');
    };
    console.log(props?.item, 'props');
    checkDevice();
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <>
          <Loader setLoading={setLoading} />
        </>
      ) : (
        <View>
          <H3 style={{textAlign: 'center'}}>Request Received. Details Below</H3>
          <Text style={{margin: 20, fontSize: 15}}>
            A request has been received from,{' '}
            <Text style={{fontWeight: 'bold'}}>{device.name}</Text>,{' '}
            <Text style={{fontWeight: 'bold'}}>{device.system}</Text>{' '}
            <Text>phone with</Text>{' '}
            <Text style={{fontWeight: 'bold'}}>{device.carrier}</Text>{' '}
            <Text>network</Text>
          </Text>
          <View style={styles.detailsView}>
            <Text style={styles.text}>
              Requested Food: <Text>{item?.type}</Text>
            </Text>
            <Text style={styles.text}>
              Price: <Text>N{item?.price}</Text>
            </Text>
            <Text style={styles.text}>
              Address: <Text>{item?.address}</Text>
            </Text>
            <Text style={styles.text}>
              Phone: <Text>{item?.phone}</Text>
            </Text>

            <Text style={[styles.text, {marginTop: 30}]}>
              Your request will be delivered within a few minute
            </Text>
            <Text style={[styles.text, {marginTop: 30}]}>
              Thanks for trusting us!
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

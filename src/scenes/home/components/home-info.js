import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Button, Surface} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Map from '../../../components/map';
import {homeData} from '../../../fixtures/items';
import {H3} from '../../../ui/tags';
import Styles from '../../../utils/styles';
export default function HomeInfo(props) {
  const {width, height} = useWindowDimensions();

  return (
    <ScrollView style={{backgroundColor: 'ghostwhite', flex: 1}}>
      <Surface
        style={{
          padding: 10,
          backgroundColor: 'ghostwhite',
          // borderBottomWidth: 1,
          //borderBottomColor: 'grey',
          marginTop: 20,
        }}>
        <H3 style={Styles.openingText}>Opening Hours</H3>
        <View style={{alignItems: 'center', padding: 10}}>
          <Entypo name="clock" color="#8b0000" size={18} />
          <Text style={Styles.openingText}>Call Us</Text>
          <Text style={{color: '#8b0000', fontWeight: 'bold', fontSize: 18}}>
            09022334455
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View>
            <Text style={Styles.openingText}>Mon to Fri</Text>
            <Text style={Styles.openingText}>09:00 am - 22:00 pm</Text>
          </View>
          <View>
            <Text style={Styles.openingText}>Sat to Sun</Text>
            <Text style={Styles.openingText}>09:00 am - 22:00 pm</Text>
          </View>
        </View>
      </Surface>
      <View style={{marginVertical: 10, height: 200}}>
        <H3
          style={{
            color: 'black',
            //fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
            fontFamily: 'Roboto-Bold',
          }}>
          Locate Us
        </H3>

        <Map />
      </View>

      <View style={{marginVertical: 20}}>
        <H3
          style={{
            color: 'black',
            // fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 10,
            fontFamily: 'Roboto-Bold',
          }}>
          24/7 Delivery Service
        </H3>
        <View style={{position: 'absolute', top: 95, left: 80, zIndex: 1}}>
          <Text style={{color: 'white'}}>Foodie</Text>
          <Text style={{color: 'white'}}>Delivery</Text>
        </View>
        <Image
          source={require('../../../assets/images/rider4.png')}
          resizeMode="contain"
          style={{
            height: 200,
            width: 300,
            alignSelf: 'center',
          }}
        />
      </View>
      <Surface
        style={{
          marginVertical: 20,
          backgroundColor: 'ghostwhite',
          padding: 10,
        }}>
        <H3
          style={{
            marginBottom: 15,
            textAlign: 'center',
            color: 'black',
            fontFamily: 'Roboto-Bold',
          }}>
          Your Favourite
        </H3>
        <ScrollView horizontal={true}>
          {homeData.map((item, idx) => {
            return (
              <View
                key={item.type + idx}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 8,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: 10,
                    zIndex: 1,
                    // left: 20,
                    left: 7,
                  }}>
                  <Text
                    style={[
                      Styles.openingText,
                      {fontSize: 19, color: 'white'},
                    ]}>
                    N{item.price}
                  </Text>
                  <Text
                    style={[
                      Styles.openingText,
                      {fontSize: 16, color: 'white'},
                    ]}>
                    {item.type}
                  </Text>

                  <TouchableOpacity
                    style={{marginTop: 20}}
                    onPress={() => props.handleOpenItemInfo(item)}>
                    <Button mode="elevated">Order Now</Button>
                  </TouchableOpacity>
                </View>
                <Image
                  source={item.image}
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: 10,
                    //opacity: 0.6,
                    // backgroundColor: 'grey',
                    position: 'relative',
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </Surface>
      <View>
        <H3
          style={{
            color: 'black',
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 10,
            fontFamily: 'Roboto-Bold',
          }}>
          Pay On Delivery
        </H3>
        <View style={{marginVertical: 10, zIndex: 1}}>
          <Text
            style={{
              position: 'absolute',
              top: 2,
              left: 130,
              color: '#8b0000',
              fontWeight: 'bold',
            }}>
            Foodie
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 2,
              right: 130,
              color: '#8b0000',
              fontWeight: 'bold',
              fontFamily: 'Roboto-Thin',
            }}>
            Client
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/deliver.png')}
          resizeMode="contain"
          style={{
            height: 250,
            width: 300,
            alignSelf: 'center',
            position: 'relative',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Items')}
        style={{width: width / 2, alignSelf: 'center', marginVertical: 20}}>
        <Button mode="elevated">
          Go TO Food Library
          <Entypo name="arrow-long-right" />
        </Button>
      </TouchableOpacity>
    </ScrollView>
  );
}

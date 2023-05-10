import React, {useRef} from 'react';

import {TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import ContactInfo from '../../components/contact-info';
import Header from '../../components/header';
import Nav from '../../components/nav';
import BottomSheet from '../../components/RBSheet';
import ItemInfo from '../items/components/item-info';
import ItemDetailScreen from '../items/scenes/item-detail';
import HomeInfo from './components/home-info';
export default function HomeScreen(props) {
  const {width, height} = useWindowDimensions();
  const [show, setShow] = React.useState(false);
  const [item, setItem] = React.useState('');
  const [itemDetails, setItemDetails] = React.useState('');

  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const itemDetailsRefRBSheet = useRef();

  const handleOpen = () => {
    refRBSheet.current.open();
  };
  const handleOpenItemInfo = item => {
    setItem(item);
    // setItemDetails(item);
    refRBSheet2.current.open();
  };
  const handleItemDetails = items => {
    const details = {
      ...item,
      ...items,
    };
    setItemDetails(details);
    itemDetailsRefRBSheet?.current?.open();
    refRBSheet2?.current?.close();
  };

  const handleMenu = () => {
    setShow(true);
  };
  const handleCloseMenu = () => {
    setShow(false);
  };
  return (
    <View style={{flex: 1}}>
      {show ? (
        <Nav
          handleOpen={handleOpen}
          navigation={props.navigation}
          show={show}
          handleCloseMenu={handleCloseMenu}
        />
      ) : null}
      <Header handleMenu={handleMenu} navigation={props.navigation} />
      <HomeInfo
        handleOpenItemInfo={handleOpenItemInfo}
        navigation={props.navigation}
      />
      <View>
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            borderRadius: 55,
            backgroundColor: '#8b0000',
            alignItems: 'center',
            position: 'absolute',
            bottom: 20,
            right: 15,
            zIndex: 1,
            justifyContent: 'center',
          }}
          onPress={() => handleOpen()}>
          <Entypo name="message" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <BottomSheet refRBSheet={refRBSheet} style={{height: '55%'}}>
          <ContactInfo />
        </BottomSheet>

        <BottomSheet refRBSheet={refRBSheet2} style={{height: '55%'}}>
          <ItemInfo item={item} handleItemDetails={handleItemDetails} />
        </BottomSheet>

        <BottomSheet refRBSheet={itemDetailsRefRBSheet} style={{height: '55%'}}>
          <ItemDetailScreen item={itemDetails} />
        </BottomSheet>
      </View>
    </View>
  );
}

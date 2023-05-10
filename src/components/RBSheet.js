import React from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
const BottomSheet = ({children, refRBSheet, style}) => {
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="fade"
        customStyles={{
          draggableIcon: {
            backgroundColor: '#8b0000',
          },
          wrapper: {},
          container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            ...style,
          },
        }}>
        {children}
      </RBSheet>
    </View>
  );
};

export default BottomSheet;

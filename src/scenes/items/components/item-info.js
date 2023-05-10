import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, HelperText} from 'react-native-paper';
import {Loader} from '../../../components/loader';
import {H3} from '../../../ui/tags';
export default function ItemInfo({item, handleItemDetails}) {
  const [loading, setLoading] = React.useState(true);
  const [values, setValues] = React.useState(initialState);
  const [errorMessage, setErrorMessage] = React.useState({
    noPhone: '',
    phoneLength: '',
    address: '',
  });

  const initialState = {
    address: '',
    phone: '',
  };
  const inputRef = React.useRef();
  React.useEffect(() => {
    console.log(item, 'itemsss');
    console.log(values, 'values');
  }, []);

  function handleChange(name, val) {
    setValues({...values, [name]: val});
    console.log(values, 'val');
  }
  const handleSubmit = () => {
    let error;
    if (!values?.address) {
      error = 'Input your address!';
      setErrorMessage({...errorMessage, address: error});
      return false;
    } else if (!values?.phone) {
      error = 'Input phone number!';
      setErrorMessage({...errorMessage, noPhone: error});
      return false;
    } else if (values?.phone.length !== 11) {
      error = 'Phone number is incorrect!';
      setErrorMessage({...errorMessage, phoneLength: error});
      return false;
    }
    setErrorMessage('');
    handleItemDetails(values);
  };

  return (
    <ScrollView>
      {loading ? (
        <>
          <Loader setLoading={setLoading} />
        </>
      ) : (
        <View>
          <H3
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Selected Food Details
          </H3>
          <View style={{margin: 0, width: '70%', alignSelf: 'center'}}>
            <View style={{marginVertical: 2}}>
              <Text>Type</Text>
              <TextInput
                style={{
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'ghostwhite',
                  backgroundColor: 'ghostwhite',
                }}
                value={item.type}
                editable={false}
                textAlign="center"
              />
            </View>
            <View style={{marginVertical: 2}}>
              <Text>Price</Text>
              <TextInput
                style={{
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'ghostwhite',
                  backgroundColor: 'ghostwhite',
                }}
                value={'N' + item.price}
                editable={false}
                textAlign="center"
              />
            </View>
            <View style={{marginVertical: 2}}>
              <Text>Address</Text>
              <TextInput
                placeholder="Enter your address"
                style={{
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'ghostwhite',
                  backgroundColor: 'ghostwhite',
                }}
                value={values?.address}
                textContentType="location"
                onChangeText={val => handleChange('address', val)}
              />
              <HelperText type="error" visible={true}>
                {values?.address ? '' : errorMessage?.address}
              </HelperText>
            </View>
            <View style={{marginVertical: 2}}>
              <Text>Phone number</Text>
              <TextInput
                placeholder="Enter your mobile number"
                style={{
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'ghostwhite',
                  backgroundColor: 'ghostwhite',
                }}
                onChangeText={val => handleChange('phone', val)}
                value={values?.phone}
                keyboardType="phone-pad"
                ref={inputRef}
              />
              <HelperText type="error" visible={true}>
                {values?.phone ? '' : errorMessage?.noPhone}
                {values?.phone?.length === 11 || !values?.phone
                  ? ''
                  : errorMessage?.phoneLength}
              </HelperText>
            </View>

            <TouchableOpacity
              // onPress={() => handleItemDetails(values)}
              onPress={() => handleSubmit()}
              style={{marginVertical: 20}}>
              <Button mode="elevated">Submit Request</Button>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

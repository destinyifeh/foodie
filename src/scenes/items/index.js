import React, {useRef} from 'react';

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {Badge, Button, Searchbar, Surface} from 'react-native-paper';
import BottomSheet from '../../components/RBSheet';
import Skeleton from '../../components/skeleton';
import mainItems from '../../fixtures/mainItems';
import {H3} from '../../ui/tags';
import Styles from '../../utils/styles';
import ItemInfo from './components/item-info';
import SearchItems from './components/search-items';
import ItemDetailScreen from './scenes/item-detail';
export default function ItemsScreen() {
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState('');
  const [searchData, setSearchData] = React.useState('');
  const [exist, setExist] = React.useState(false);
  const [theItem, setTheItem] = React.useState('');
  const [itemDetails, setItemDetails] = React.useState('');
  const {width} = useWindowDimensions();

  const refRBSheet = useRef();
  const itemDetailsRefRBSheet = useRef();
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    console.log(mainItems, 'items data');
  }, []);

  function handleClear() {
    setQuery('');
    setExist(false);
  }
  const onSubmit = () => {
    console.log('demi');
    let searchData = mainItems.filter(
      item =>
        item.type.slice(0, 2).toLowerCase() ===
          query.slice(0, 2).toLowerCase() ||
        item.searchName.slice(0, 2).toLowerCase() ===
          query.slice(0, 2).toLowerCase(),
    );
    setSearchData(searchData);
    setExist(true);
    console.log(searchData, 'search data');
  };
  const handleOpenItemInfo = item => {
    console.log(item, 'the item');
    setTheItem(item);
    refRBSheet.current?.open();
  };
  const handleItemDetails = items => {
    const details = {
      ...theItem,
      ...items,
    };
    setItemDetails(details);
    itemDetailsRefRBSheet.current?.open();
    refRBSheet.current?.close();
  };

  const handleQuery = query => {
    setQuery(query);
  };
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'ghostwhite'}}>
        {loading ? (
          <>
            <Skeleton />
          </>
        ) : (
          <View>
            <View style={styles.banner}>
              <ImageBackground
                resizeMode="cover"
                imageStyle={{opacity: 0.6}}
                style={{minHeight: 120}}
                source={require('../../assets/images/fb5.jpg')}>
                <Text
                  style={{
                    fontSize: 16,
                    top: 50,
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Roboto-Light',
                  }}>
                  We are tested and trusted!
                </Text>
              </ImageBackground>
            </View>
            <View>
              <Searchbar
                placeholder="Search..."
                onIconPress={() => onSubmit()}
                onClearIconPress={() => handleClear()}
                clearIcon={query.length === ''}
                value={query}
                onChangeText={val => handleQuery(val)}
                onSubmitEditing={() => onSubmit()}
              />
            </View>
            {exist === false ? (
              <>
                <H3
                  style={{
                    paddingVertical: 10,
                    textAlign: 'center',
                    fontFamily: 'Roboto-Light',
                  }}>
                  Your Favourites
                </H3>
                <View style={styles.cardView}>
                  {mainItems &&
                    mainItems.slice(0, 2).map((item, idx) => {
                      return (
                        <Surface elevate={5} style={styles.card} key={item.id}>
                          <Badge
                            style={{
                              position: 'absolute',
                              color: '#8b0000',
                              fontWeight: 'bold',
                              zIndex: 1,
                              right: 0,
                              backgroundColor: 'white',
                            }}>
                            Hot
                          </Badge>
                          <Image
                            style={styles.img}
                            resizeMode="cover"
                            source={item.image}
                          />
                          <TouchableOpacity
                            onPress={() => handleOpenItemInfo(item)}>
                            <Text
                              style={{
                                color: '#8b0000',
                                textAlign: 'center',
                                padding: 10,
                              }}>
                              {item.type} / N{item.price}
                            </Text>
                          </TouchableOpacity>
                        </Surface>
                      );
                    })}
                </View>
                <View>
                  <Surface elevate={5} style={styles.longCard}>
                    <H3
                      style={{
                        paddingVertical: 10,
                        textAlign: 'center',
                        fontFamily: 'Roboto-Light',
                      }}>
                      Your Desires
                    </H3>
                    <ScrollView horizontal={true}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginHorizontal: 8,
                        }}>
                        {mainItems?.map((item, idx) => {
                          return (
                            <View style={{marginHorizontal: 10}} key={item.id}>
                              <View
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  zIndex: 1,
                                  left: 7,
                                }}>
                                <Badge
                                  style={{
                                    color: '#8b0000',
                                    fontWeight: 'bold',
                                    backgroundColor: 'white',
                                    left: 3,
                                    top: 1,
                                  }}>
                                  Chill
                                </Badge>
                                <Text
                                  style={[
                                    Styles.openingText,
                                    {fontSize: 19, color: 'white'},
                                  ]}>
                                  {item.price}
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
                                  onPress={() => handleOpenItemInfo(item)}>
                                  <Button mode="elevated">Order Now</Button>
                                </TouchableOpacity>
                              </View>

                              <Image
                                source={item.image}
                                style={{
                                  width: 130,
                                  height: 135,
                                  borderRadius: 10,
                                  //opacity: 0.6,
                                  // backgroundColor: 'grey',
                                  position: 'relative',
                                }}
                              />
                            </View>
                          );
                        })}
                      </View>
                    </ScrollView>
                  </Surface>
                </View>
                <H3
                  style={{
                    paddingVertical: 10,
                    textAlign: 'center',
                    fontFamily: 'Roboto-Light',
                  }}>
                  Your Wants
                </H3>
                <View style={styles.cardView}>
                  {mainItems?.slice(2, 9).map((item, idx) => {
                    return (
                      <Surface elevate={5} style={styles.card} key={item.id}>
                        <Badge
                          style={{
                            position: 'absolute',
                            color: '#8b0000',
                            fontWeight: 'bold',
                            zIndex: 1,
                            right: 0,
                            backgroundColor: 'white',
                          }}>
                          wow
                        </Badge>
                        <Image
                          style={styles.img}
                          resizeMode="cover"
                          source={item.image}
                        />
                        <TouchableOpacity
                          onPress={() => handleOpenItemInfo(item)}>
                          <Text
                            style={{
                              color: '#8b0000',
                              textAlign: 'center',
                              padding: 10,
                            }}>
                            {item.type} / N{item.price}
                          </Text>
                        </TouchableOpacity>
                      </Surface>
                    );
                  })}
                </View>
              </>
            ) : (
              <SearchItems query={query} searchData={searchData} />
            )}

            <BottomSheet refRBSheet={refRBSheet} style={{height: '55%'}}>
              <ItemInfo item={theItem} handleItemDetails={handleItemDetails} />
            </BottomSheet>
            <BottomSheet
              refRBSheet={itemDetailsRefRBSheet}
              style={{height: '55%'}}>
              <ItemDetailScreen item={itemDetails} />
            </BottomSheet>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    minHeight: 120,
    backgroundColor: 'brown',
    margin: 10,
    width: '95%',
  },
  cardView: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    minHeight: 150,
    minWidth: 150,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  longCard: {
    minHeight: 200,
    width: '100%',
    marginVertical: 10,
  },
  img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
});

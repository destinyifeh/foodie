import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Badge, Surface} from 'react-native-paper';
import {Loader} from '../../../components/loader';
export default function SearchItems(props) {
  const [loading, setLoading] = React.useState(true);
  const {query, searchData} = props;
  useEffect(() => {
    console.log(searchData, 'queryy');
  });
  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          {searchData?.length > 0 ? (
            <Text
              style={{marginTop: 10, color: '#8b0000', textAlign: 'center'}}>
              Search result for "{query}" found
            </Text>
          ) : (
            ''
          )}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 5,
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            {searchData.length > 0 ? (
              searchData.map((item, idx) => {
                return (
                  <Surface
                    elevate={5}
                    style={styles.card}
                    key={item.type + idx}>
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
                    <TouchableOpacity>
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
              })
            ) : (
              <Text style={{color: '#8b0000', textAlign: 'center'}}>
                No search result for "{query}" found
              </Text>
            )}
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  card: {
    minHeight: 150,
    width: 150,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

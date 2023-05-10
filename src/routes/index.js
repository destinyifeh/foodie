import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import ScreenHeader from '../components/screen-header';
import HomeScreen from '../scenes/home';
import ItemsScreen from '../scenes/items';
import ItemDetailScreen from '../scenes/items/scenes/item-detail';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <Stack.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          headerShown: true,
          // presentation: 'modal',

          header: props => (
            <>
              <ScreenHeader {...props} />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetailScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Navigation} screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarIcon: ({route}) => (
              <Entypo
                name="home"
                size={20}
                onPress={() => console.log(route, 'dee')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Items"
          component={ItemsScreen}
          options={{
            tabBarActiveTintColor: '#8b0000',
            header: props => (
              <>
                <ScreenHeader {...props} />
              </>
            ),
            tabBarIcon: () => (
              <Entypo name="archive" size={20} color="#8b0000" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

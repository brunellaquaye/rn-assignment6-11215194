import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';

const Drawer = createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options = {{
        headerShown: true
      }}
        />
      <Drawer.Screen name="CartScreen" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

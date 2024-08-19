import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBusksComponent from './SearchBusksComponent';
import BuskersListComponent from './BusksListComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleBuskScreen from './SingleBuskScreen';
import BuskScreen from './BusksScreen';

const Stack = createNativeStackNavigator()

export function BuskStack({navigation}) {

  // function handlePress() {
  //   console.log("Pressed")
  //   navigation.navigate("SingleBuskScreen")
  // }

  return (
    <Stack.Navigator initialRouteName='BusksScreen'>
      <Stack.Screen name="BuskScreen" component={BuskScreen}/>
      <Stack.Screen name="SingleBuskScreen" component={SingleBuskScreen}/>
    </Stack.Navigator>
  )
}

export default function BusksScreen() {

  return (
    // <View style={styles.container}>
    //     <SearchBusksComponent/>
      <NavigationContainer>
        <BuskStack />
      </NavigationContainer>
      // {/* <Text style={styles.text}>BusksScreen</Text> */}
      // <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40
  }
});

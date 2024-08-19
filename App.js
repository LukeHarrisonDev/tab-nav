import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { StyleSheet } from "react-native";
import BuskersListScreen from "./screens/BuskersProfileScreen";
import UserComponent from "./screens/UserComponent";
import ChatListScreen from "./screens/ChatListScreen";
import { BuskStack } from "./screens/BuskStack";
import { Ionicons } from '@expo/vector-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import BusksScreen, { BuskStack } from "./screens/BusksScreen";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "deeppink",
        tabBarInactiveTintColor: "indigo",
          showIcon: true,
         
      }}>
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: () => <Ionicons name="home" size={20}/>
        }}/>
        <Tab.Screen name="User" component={UserComponent} 
        options={{
          tabBarIcon: () => <Ionicons name="person" size={20}/>
        }}/> 
        <Tab.Screen name="Busks" component={BuskStack} 
        options={{
          tabBarIcon: () => <Ionicons name="musical-notes" size={20}/>
        }}/>
        <Tab.Screen name="Buskers" component={BuskersListScreen} 
        options={{
          tabBarIcon: () => <Ionicons name="people" size={20}/>
        }}/>
        <Tab.Screen name="Chats" component={ChatListScreen} 
        options={{
          tabBarIcon: () => <Ionicons name="chatbubbles" size={20}/>
        }}/>
      </Tab.Navigator>
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
  text: {
    fontSize: 40
  }
});

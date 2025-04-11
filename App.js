import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';



// importinf the navigation component....
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// importing the context provider and context to use centrallized state management...
import AuthContextProvider from './store/auth-context';
import DeviceContextProvider from './store/device-context';
import { authContext } from './store/auth-context';



// importing all the screens....
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AddDeviceScreen from './screens/AddDeviceScreen';
import DeviceDetailScreen from './screens/DeviceDetailScreen';
import DocumentationScreen from './screens/DocumentationScreen';
import ContributionScreen from './screens/ContributionScreen';
import ControllerCodeScreen from './screens/ControllerCodeScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Singup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HOME" component={HomeScreen} />

      <Drawer.Screen name="ADDDEVICES" component={AddDeviceScreen} />

      <Drawer.Screen name="GET-CODE" component={ControllerCodeScreen} />

      <Drawer.Screen name="DOCUMENTATION" component={DocumentationScreen} />

      <Drawer.Screen name="CONTRIBUTE" component={ContributionScreen} />

    </Drawer.Navigator>
  )
}


function AuthenticatedStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} 
         options={
          {
            headerShown: false,
          }
         }
      />
      <Stack.Screen name="DeviceInDetails" component={DeviceDetailScreen} />
    </Stack.Navigator>

  )
}


function Navigation() {
  const authCtx = useContext(authContext);
  const { isAuthenticated } = authCtx;

  return (
    <NavigationContainer>
      {isAuthenticated && <AuthenticatedStack />}
      {!isAuthenticated && <AuthStack />}
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AuthContextProvider>
      <DeviceContextProvider>
        <StatusBar style="light" />
        <Navigation />
      </DeviceContextProvider>
    </AuthContextProvider>
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

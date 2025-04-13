import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';



// importinf the navigation component....
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
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
import AddDevicePopupScreen from './screens/AddDevicePopupScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#050505',
  },
};


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerStyle: {
            backgroundColor: '#f6e193',
          },
        }
      }
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Singup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerStyle: {
            backgroundColor: '#f6e193',
          },
        }
      }
    >
      <Drawer.Screen name="HOME" component={DeviceDetailScreen}
      />

      <Drawer.Screen name="ADDDEVICES" component={AddDeviceScreen}
      />

      <Drawer.Screen name="GET-CODE" component={ControllerCodeScreen} />

      <Drawer.Screen name="DOCUMENTATION" component={DocumentationScreen} />

      <Drawer.Screen name="CONTRIBUTE" component={ContributionScreen} />

    </Drawer.Navigator>
  )
}


function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerStyle: {
            backgroundColor: '#f6f1dd',
          },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' }
        }
      }
    >
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator}
        options={
          {
            headerShown: false,
          }
        }
      />
      <Stack.Screen name="DeviceInDetails" component={DeviceDetailScreen} />

      <Stack.Screen name="AddDevicePopup" component={AddDevicePopupScreen} 
        options = {{
          presentation: 'modal',
          headerShown: false,
          animation : 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>

  )
}


function Navigation() {
  const authCtx = useContext(authContext);
  const { isAuthenticated } = authCtx;

  return (
    <NavigationContainer theme={MyTheme}>
      {isAuthenticated && <AuthenticatedStack />}
      {!isAuthenticated && <AuthStack />}
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AuthContextProvider>
      <DeviceContextProvider>
        <StatusBar style="dark"
          //  backgroundColor="#ffffff"
        />
        <Navigation />
      </DeviceContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({

});

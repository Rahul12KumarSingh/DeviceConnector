import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContextProvider from './store/auth-context';

const Stack = createNativeStackNavigator();


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
      <Drawer.Screen name="ADDDEVICES" component={DeviceScreen} />

      <Drawer.Screen name="GET-CODE" component={ControllerCodeScreen} />

      <Drawer.Screen name="DOCUMENTATION" component={DocumentationScreen} />

      <Drawer.Screen name="CONTRIBUTE" component={ContributionScreen} />

    </Drawer.Navigator>
  )
}


function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeviceInDetails" component={DeviceDetailScreen} />
    </Stack.Navigator>
  )
}


function Navigation() {
  const authContext = useContext(authContext);
  const { isAuthenticated } = authContext;

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
      <StatusBar style="light" />
      <Navigation />
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

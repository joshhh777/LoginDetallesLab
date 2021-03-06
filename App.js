import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './componentes/login';
import Detalles from './componentes/Detalles';
import Lista from './componentes/Home';
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">        
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Lista" component={Lista} />
          <Stack.Screen name="Detalles" component={Detalles}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



export default App;



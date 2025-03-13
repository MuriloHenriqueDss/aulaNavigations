import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sobre from './screens/Sobre';
import Inicio from './screens/Inicio';
import Mulher1 from './screens/Mulher1';
import Mulher2 from './screens/Mulher2';
import Mulher3 from './screens/Mulher3';
import Mulher4 from './screens/Mulher4';
import Mulher5 from './screens/Mulher5';
import Mulher6 from './screens/Mulher6';

export default function App() {
  return (
    <NavigationContainer>
      <Mynavigation />
    </NavigationContainer>
  );
}

const BotaoRodape = createBottomTabNavigator();
function Mynavigation() {
  return (
    <BotaoRodape.Navigator initialRouteName="Inicio" screenOptions={{ tabBarActiveTintColor: '#c1c1c1'}}>
      <BotaoRodape.Screen name="Inicio" component={Inicio} options={{tabBarLabel: 'Inicio', headerShown: false}} />
      <BotaoRodape.Screen name="Sobre" component={Sobre} options={{tabBarLabel: 'Sobre', headerShown: false}} />
      <BotaoRodape.Screen name="Mulher1" component={Mulher1} options={{tabBarLabel: 'Mulher1', headerShown: false}} />
      <BotaoRodape.Screen name="Mulher2" component={Mulher2} options={{tabBarLabel: 'Mulher2', headerShown: false}} />
      <BotaoRodape.Screen name="Mulher3" component={Mulher3} options={{tabBarLabel: 'Mulher3', headerShown: false}} />
      <BotaoRodape.Screen name="Mulher4" component={Mulher4} options={{tabBarLabel: 'Mulher4', headerShown: false}} />
      <BotaoRodape.Screen name="Mulher5" component={Mulher5} options={{tabBarLabel: 'Mulher5', headerShown: false}} />
      <BotaoRodape.Screen name="Mulher6" component={Mulher6} options={{tabBarLabel: 'Mulher6', headerShown: false}} />
    </BotaoRodape.Navigator>
  );
}
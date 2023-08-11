import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import PagInicial from './src/components/PagInicial';
import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import Menu from './src/components/Menu';
import GPS from './src/components/Sensores/GPS';
import BPM from './src/components/Sensores/BPM';
import Som from './src/components/Sensores/Som';
import Atividade from './src/components/Sensores/Atividade';
import Estresse from './src/components/Estresse';
import Informacao from './src/components/Informacao';
import Configuracao from './src/components/Configuracao';
import EdicaoUsuario from './src/components/EdicaoUsuario';
import ListaPets from './src/components/ListaPets';
import CadastroPet from './src/components/CadastroPet';

const Stack = createStackNavigator();

function NavegacaoStack() {
  return (
    <Stack.Navigator initialRouteName="PagInicial">

      <Stack.Screen
        name="PagInicial"
        component={PagInicial}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="GPS"
        component={GPS}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="BPM"
        component={BPM}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Som"
        component={Som}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Atividade"
        component={Atividade}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Estresse"
        component={Estresse}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Informacao"
        component={Informacao}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Configuracao"
        component={Configuracao}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="EdicaoUsuario"
        component={EdicaoUsuario}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="ListaPets"
        component={ListaPets}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="CadastroPet"
        component={CadastroPet}
        options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoStack />
    </NavigationContainer>

  );
}


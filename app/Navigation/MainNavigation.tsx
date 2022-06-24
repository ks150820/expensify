import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeLayout';
import AddingScreen from '../screens/AddExpensify/AddingScreen';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: '#fff',
      }}
      initialRouteName="Home">
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Expensify', headerTitleAlign: 'center'}}
      />
      <StackNavigator.Screen
        name="AddExpense"
        component={AddingScreen}
        options={{title: 'Expensify', headerTitleAlign: 'center'}}
      />
    </StackNavigator.Navigator>
  );
};

export default MainNavigator;

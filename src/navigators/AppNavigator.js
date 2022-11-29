import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import commonOptions from './CommonOptions';

/* ------------- SCREENS ------------- */

import List from '../screens/List';
import RepoView from '../screens/RepoView';
import UserView from '../screens/UserView';

/* ------------- SCREENS ------------- */

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="list">
      <Stack.Screen options={{...commonOptions}} name="list" component={List} />
      <Stack.Screen
        options={{...commonOptions}}
        name="repoView"
        component={RepoView}
      />
      <Stack.Screen
        options={{...commonOptions}}
        name="userView"
        component={UserView}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;

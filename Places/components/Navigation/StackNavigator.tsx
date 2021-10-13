import { StackActionHelpers } from '@react-navigation/routers';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import UserProfile from '../UserProfile/UserProfile';

const Stack: any = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="userProfile" component={UserProfile} />
    </Stack.Navigator>
  );
}

export default MyStack;

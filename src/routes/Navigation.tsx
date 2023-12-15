import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoScreen from '../screens/TodoScreen';
import TodoListScreen from '../screens/TodoListScreen';
import Test from '../screens/Test';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="todo"
        component={TodoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

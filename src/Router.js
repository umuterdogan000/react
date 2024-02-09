
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AddButton from './components/AddButton';
import Detail from './screens/Home/Questions/Detail';





const Stack = createNativeStackNavigator();

function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home"
           component={Home}
           options={{
            title: "SORULAR",
            headerTitleStyle: {fontSize: 25,},
            headerTitleAlign: 'center', 
          }}
            
            />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Router;



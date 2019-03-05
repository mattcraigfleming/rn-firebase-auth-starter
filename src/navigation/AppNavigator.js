import { createStackNavigator, createAppContainer } from 'react-navigation'

//Screens
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Splash from '../screens/Splash'
import Dashboard from '../screens/Dashboard'

const AppNavigator = createStackNavigator(
  {
    SignUp,
    Login,
    Splash,
    Dashboard
  },
  { headerMode: 'modal' },
  {
    initialRouteName: 'Splash'
  }
)

export default createAppContainer(AppNavigator)

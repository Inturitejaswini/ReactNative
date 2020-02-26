import {createStackNavigator} from 'react-navigation-stack'
import Login from './components/login'
import Register from './components/registration'
import Forgot from './components/forgotPassword'
const AppNavigation=createStackNavigator(
    {
        login:{
            screen:Login,
            navigationOptions:{
                header:null
            }
        },
        registration:{
            screen:Register,
            navigationOptions:{
                header:null
            }
        },
        forgotPassword:{
            screen:Forgot,
            navigationOptions:{
                header:null
            }
        }
    },
    {
     initialRouteName:"forgotPassword"
    }
)
export default AppNavigation
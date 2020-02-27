import {createStackNavigator} from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forgot from './components/forgotPassword'
import DashBoard from './components/dashboard'
const AppNavigation=createStackNavigator(
    {
        login:{
            screen:LoginComponent,
            navigationOptions:{
                header:null
            }
        },
        registration:{
            screen:RegisterComponent,
            navigationOptions:{
                header:null
            }
        },
        forgotPassword:{
            screen:Forgot,
            navigationOptions:{
                header:null
            }
        },
        dashboard:{
            screen:DashBoard,
            navigationOptions:{
                header:null
            }
        }
    },
    {
     initialRouteName:"dashboard"
    }
)
export default AppNavigation
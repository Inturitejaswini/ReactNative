import {createStackNavigator} from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forget from './components/forgetPassword'
import DashBoard from './components/dashboard'
// import DrawerComponent from './components/drawerComponent'
import { Drawer } from 'react-native-paper'
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
        forgetPassword:{
            screen:Forget,
            navigationOptions:{
                header:null
            }
        },
        dashboard:{
            screen:DashBoard,
            navigationOptions:{
                header:null
            }
        },
        // drawerComponent:{
        //     screen:Drawer,
        //     navigationOptions:{
        //         header:null
        //     }
        // },
    },
    {
     initialRouteName:"dashboard"
    }
)
export default AppNavigation
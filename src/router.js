import { createStackNavigator } from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forget from './components/forgetPassword'
import DashBoard from './components/dashboard'
import { Drawer } from 'react-native-paper'
import Notes from './components/notes'
// import Drawer from './components/drawerComponent'
// import { Drawer } from 'react-native-paper'
const AppNavigation = createStackNavigator(
    {
        login: {
            screen: LoginComponent,
            navigationOptions: {
                header: null
            }
        },
        registration: {
            screen: RegisterComponent,
            navigationOptions: {
                header: null
            }
        },
        forgetPassword: {
            screen: Forget,
            navigationOptions: {
                header: null
            }
        },
        dashboard: {
            screen: DashBoard,
            navigationOptions: {
                header: null
            }
        },
        notes:{
            screen:Notes,
            navigationOptions:{
                header:null
            }
        }
    },
{
    initialRouteName: "notes"
}
)
export default AppNavigation
import { createStackNavigator } from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forget from './components/forgetPassword'
import DashBoard from './components/dashboard'
import Notes from './components/notes'
import drawerComponent from './components/drawerComponent'
// import ReminderComponent from './components/remainder'
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
        drawerComponent: {
            screen: drawerComponent,
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
        notes: {
            screen: Notes,
            navigationOptions: {
                header: null
            }
        },
        // remainder:{
        //     screen:ReminderComponent,
        //     navigationOptions:{
        //         header:null
        //     }
        // }
    },
    {
        initialRouteName: "login"
    }
)
export default AppNavigation
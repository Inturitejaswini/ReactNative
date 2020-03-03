import { createStackNavigator } from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forget from './components/forgetPassword'
import DashBoard from './components/dashboard'
import Notes from './components/notes'
// import Example from './components/more'
// import Drawer from './components/drawerComponent'
import drawerComponent from './components/drawerComponent'
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
        drawerComponent:{
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
        // more: {
        //     screen: Example,
        //     navigationOptions: {
        //         header: null
        //     }
        // },
        notes:{
            screen:Notes,
            navigationOptions:{
                header:null
            }
        },
    },
{
    initialRouteName: "drawerComponent"
}
)
export default AppNavigation
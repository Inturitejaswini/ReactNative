import { createStackNavigator } from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forget from './components/forgetPassword'
import DashBoard from './components/dashboard'
// import { Drawer } from 'react-native-paper'
import Notes from './components/notes'
import  { MoreComponent } from './components/moreComponent'
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
        // drawerComponent:{
        //     screen: Drawer,
        //     navigationOptions: {
        //         header: null
        //     }
        // },
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
        },
        moreComponent:{
            screen:MoreComponent,
            navigationOptions:{
                header:null
            }
        }
    },
{
    initialRouteName: "login"
}
)
export default AppNavigation
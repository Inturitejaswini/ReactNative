import {createStackNavigator} from 'react-navigation-stack'
import Login from './components/login'
const AppNavigation=createStackNavigator(
    {
        login:{
            screen:Login,
            navigationOptions:{
                header:null
            }
        }
    },
    {
        initialRouteName:"login"
    }
)
export default AppNavigation
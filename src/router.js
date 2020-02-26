import {createStackNavigator} from 'react-navigation-stack'
import Login from './components/login'
import Register from './components/registration'
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
        }
    },
    {
     initialRouteName:"registration"
    }
)
export default AppNavigation
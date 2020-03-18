import { createStackNavigator } from 'react-navigation-stack'
import LoginComponent from './components/login'
import RegisterComponent from './components/registration'
import Forget from './components/forgetPassword'
import DashBoard from './components/dashboard'
import Notes from './components/notes'
import CreateLabelComponent from './components/createLabel'
import ReminderComponent from './components/remainder'
import GetNoteComponent from './components/getNoteComponent'
import drawerComponent from './components/drawerComponent'
import EditComponent from './components/editComponent'
import Trash from './components/trashComponent'
import ArchiveComponent from './components/archiveComponent'
import ReminderComponent1 from './components/getReminder'
import EditReminderComponent from './components/editReminder'
import EditArchiveComponent from './components/editArchive'
import EditTrashComponent from './components/editTrash'
import SearchComponent from './components/searchComponent'
import GetLabelComponent from './components/getLabelComponent'
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
        remainder: {
            screen: ReminderComponent,
            navigationOptions: {
                header: null
            }
        },
        getNoteComponent:{
            screen:GetNoteComponent,
            navigationOptions:{
                header:null
            }
        },
        editComponent:{
            screen:EditComponent,
            navigationOptions:{
                header:null
            }
        },
        createLabel:{
            screen:CreateLabelComponent,
            navigationOptions:{
                header:null
            }
        },
        trashComponent:{
            screen:Trash,
            navigationOptions:{
                header:null
            }
        },
        archiveComponent:{
            screen:ArchiveComponent,
            navigationOptions:{
                header:null
            }
        },
        getReminder:{
            screen:ReminderComponent1,
            navigationOptions:{
                header:null
            }
        },
        editReminder:{
            screen:EditReminderComponent,
            navigationOptions:{
                header:null
            }
        },
        editArchive:{
            screen:EditArchiveComponent,
            navigationOptions:{
                header:null
            }
        },
        editTrash:{
            screen:EditTrashComponent,
            navigationOptions:{
                header:null
            }
        },
        searchComponent:{
            screen:SearchComponent,
            navigationOptions:{
                header:null
            }
        },
       getLabelComponent:{
           screen:GetLabelComponent,
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
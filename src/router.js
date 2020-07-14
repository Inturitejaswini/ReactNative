import {createStackNavigator} from 'react-navigation-stack';
import LoginComponent from './screens/login';
import RegisterComponent from './screens/registration';
import Forget from './screens/forgetPassword';
import DashBoard from './components/dashboard';
import Notes from './components/notes';
import CreateLabelComponent from './components/createLabel';
import ReminderComponent from './components/reminder';
import GetNoteComponent from './components/getNote';
import drawerComponent from './components/drawer';
import EditComponent from './components/edit';
import Trash from './components/trash';
import ArchiveComponent from './components/archive';
import ReminderComponent1 from './components/getReminder';
import EditReminderComponent from './components/editReminder';
import EditArchiveComponent from './components/editArchive';
import EditTrashComponent from './components/editTrash';
import SearchComponent from './components/search';
import GetLabelComponent from './components/getLabel';
const AppNavigation = createStackNavigator(
  {
    login: {
      screen: LoginComponent,
      navigationOptions: {
        header: null,
      },
    },
    registration: {
      screen: RegisterComponent,
      navigationOptions: {
        header: null,
      },
    },
    forgetPassword: {
      screen: Forget,
      navigationOptions: {
        header: null,
      },
    },
    drawer: {
      screen: drawerComponent,
      navigationOptions: {
        header: null,
      },
    },
    dashboard: {
      screen: DashBoard,
      navigationOptions: {
        header: null,
      },
    },
    notes: {
      screen: Notes,
      navigationOptions: {
        header: null,
      },
    },
    reminder: {
      screen: ReminderComponent,
      navigationOptions: {
        header: null,
      },
    },
    getNote: {
      screen: GetNoteComponent,
      navigationOptions: {
        header: null,
      },
    },
    edit: {
      screen: EditComponent,
      navigationOptions: {
        header: null,
      },
    },
    createLabel: {
      screen: CreateLabelComponent,
      navigationOptions: {
        header: null,
      },
    },
    trash: {
      screen: Trash,
      navigationOptions: {
        header: null,
      },
    },
    archive: {
      screen: ArchiveComponent,
      navigationOptions: {
        header: null,
      },
    },
    getReminder: {
      screen: ReminderComponent1,
      navigationOptions: {
        header: null,
      },
    },
    editReminder: {
      screen: EditReminderComponent,
      navigationOptions: {
        header: null,
      },
    },
    editArchive: {
      screen: EditArchiveComponent,
      navigationOptions: {
        header: null,
      },
    },
    editTrash: {
      screen: EditTrashComponent,
      navigationOptions: {
        header: null,
      },
    },
    search: {
      screen: SearchComponent,
      navigationOptions: {
        header: null,
      },
    },
    getLabel: {
      screen: GetLabelComponent,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'drawerComponent',
  },
);
export default AppNavigation;

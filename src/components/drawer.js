import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import DashBoard from '../components/dashboard';
import ReminderComponent1 from '../components/getReminder';
import ArchiveComponent from '../components/archive';
import CreateLabelComponent from '../components/createLabel';
import Trash from './trash';
const Drawer = createDrawerNavigator(
  {
    Notes: {
      screen: DashBoard,
    },
    Remainder: {
      screen: ReminderComponent1,
    },
    createLabel: {
      screen: CreateLabelComponent,
    },
    trash: {
      screen: Trash,
    },
    archive: {
      screen: ArchiveComponent,
    },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentOptions: {},
  },
);
export default drawer = createAppContainer(Drawer);

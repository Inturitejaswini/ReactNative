/******************************************************************************
 *  Execution       :   1. default node         cmd> node drawerComponent.js 
 *                      2. if nodemon installed cmd> nodemodule drawerComponent.js
 * 
 *  Purpose         : creating drawercomponent menu.
 *  @description    
 * 
 *  @file           :drawercomponent.js
 *  @overview       : creating drawercomponent.
 *  @module         :drawerComponent - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :25-2-2020
 ******************************************************************************/
import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import DashBoard from '../components/dashboard';
import { StyleSheet } from 'react-native'
import ReminderComponent from '../components/remainder'
import GetReminderComponent from '../components/getReminder'
// import Notes from '../components/notes'
import ArchiveComponent from '../components/archiveComponent'
import CreateLabelComponent from '../components/createLabel'
import Trash from '../components/trashComponent';
const Drawer = createDrawerNavigator({
    Notes: {
        screen: DashBoard
    },
    Remainder: {
        screen: GetReminderComponent
    },
    createLabel:{
        screen:CreateLabelComponent
    },
    trashComponent:{
        screen:Trash
    },
    archiveComponent:{
        screen:ArchiveComponent
    }
},
{
        drawerWidth: 300,
        drawerPosition: "left",
        contentOptions: {
        }
    }
)
export default drawer = createAppContainer(Drawer);

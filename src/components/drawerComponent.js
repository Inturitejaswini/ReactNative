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
// import Notes from '../components/notes'
import CreateLabelComponent from '../components/createLabel'
const Drawer = createDrawerNavigator({
    // dashboard: {
    //     screen: DashBoard
    // },
    Notes: {
        screen: DashBoard
    },
    Remainder: {
        screen: ReminderComponent
    },
    createLabel:{
        screen:CreateLabelComponent
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

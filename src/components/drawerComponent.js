/******************************************************************************
 *  Execution       :   1. default node         cmd> node drawerComponent.jsx 
 *                      2. if nodemon installed cmd> nodemodule drawerComponent.jsx
 * 
 *  Purpose         : creating drawercomponent menu.
 *  @description    
 * 
 *  @file           :drawercomponent.jsx
 *  @overview       : creating drawercomponent.
 *  @module         :drawerComponent - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :25-2-2020
 ******************************************************************************/
import React, { Component } from 'react';
import createDrawerNavigator from 'react-navigation-drawer'
const Drawer = createDrawerNavigator({
    notes:{
     screen:dashboard
 }
})

export default AppContainer=createAppContainer(Drawer);
/******************************************************************************
 *  Execution       :   1. default node         cmd> node drawerComponent.jsx 
 *                      2. if nodemon installed cmd> nodemodule drawerComponent.jsx
 * 
 *  Purpose         : creating drawercomponent menu.
 *  @description    
 * 
 *  @file           :drawercomponent.jsx
 *  @overview       : creating drawercomponent.
 *  @module         :draweComponent - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :16-1-2019
 ******************************************************************************/
import React, { Component } from 'react';
import { Drawer } from 'react-navigation-drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
class DrawerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View >
                <NavigationContainer>
                    <Drawer >
                        hai
                    </Drawer>
                </NavigationContainer>
            </View>
        )
    }


}
export default DrawerComponent
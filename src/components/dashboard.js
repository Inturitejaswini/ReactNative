/******************************************************************************
 *  Execution       :   1. default node         cmd> node dashBoard.jsx 
 *                      2. if nodemon installed cmd> nodemodule dashBoard.jsx
 * 
 *  Purpose         : creating dashboard application page.
 *  @description    
 * 
 *  @file           :dashBoard.jsx
 *  @overview       : creating dashBoard page.
 *  @module         :dashBoard - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :24-0-2020
 ******************************************************************************/
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from '../Css';
// import { DrawerActions } from 'react-navigation-drawer';
import { View, Text } from 'react-native';
import {Image} from 'react-native'
export class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            // openDrawer: false,
        }
    }
    // openDrawer=()=>{
    //     this.setState({openDrawer:!this.state.openDrawer})
    // }
    render() {
        return (
            <View>
                <Appbar style={styles.top}>
                    <View style={styles.menuitem}>
                        <Image source={require("../assets/menuicon.png")}></Image>
                    </View>
                    <View >
                        <Image source={require("../assets/keepicon.png")} style={styles.keepicon}></Image>
                    </View>
                    <View>
                        <Text style={styles.fundooText}>FundooNote</Text>
                    </View>
                    <View style={styles.searchicon}>
                        <Image source={require("../assets/searchicon.png")}></Image>
                    </View>
                    <View style={styles.gridicon}>
                        <Image source={require("../assets/gridicon.png")}></Image>
                    </View>
                    <View >
                        <Image source={require("../assets/accounticon.png")} style={styles.accounticon}></Image>
                    </View>
                </Appbar>
            </View>
        );
    }
}


export default DashBoard

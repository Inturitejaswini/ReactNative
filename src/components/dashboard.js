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
import styles from '../../Css';
import Icon from 'react-native-vector-icons/Entypo';
// import image from '../assets/menu'
// import { DrawerActions } from 'react-navigation-drawer';
import { View, Text,TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            openDrawer: false,
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
                        {/* <TouchableOpacity onPress={this.props.navigation.dispatch(DrawerActions.openDrawer())}> */}
                            <Image source={require("../assets/menu.png")}> </Image>
                        {/* </TouchableOpacity> */}
                    </View>
                    <View >
                        <Image source={require("../assets/keepicon.png")} style={styles.keepicon}></Image>
                    </View>
                    <View>
                        <Text style={styles.fundooText}>FundooNote</Text>
                    </View>
                    <View style={styles.searchicon} >
                        <Image source={require("../assets/searchicon.png")}></Image>
                    </View>
                    <View style={styles.gridicon}>
                        <Image source={require("../assets/gridiconicon.png")}></Image>
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

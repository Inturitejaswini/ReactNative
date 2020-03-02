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
import { Appbar, Toolbar } from 'react-native-paper';
import styles from '../Css';
import { DrawerActions } from 'react-navigation-drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native'
// import Drawer from '../components/drawerComponent'
export class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            openDrawer: false,
            open:false
        }
    }
    handleopenDrawer = () => {
        this.setState({ openDrawer: !this.state.openDrawer })
    }
    render() {
        return (
            <View>
                <Appbar style={styles.top}>
                    <View style={styles.menuitem}>
                        <TouchableOpacity>
                            <Image source={require("../assets/menuicon.png")}
                             onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            </Image>
                        </TouchableOpacity>
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
                    {!this.state.open? (
                    <View style={styles.gridicon}>
                        <Image source={require("../assets/gridicon.png")}></Image>
                    </View>
                     ) : (
                    <View style={styles.listicon}>
                        <Image source={require("../assets/listview.png")}></Image>
                    </View>)}
                    <View >
                        <Image source={require("../assets/accounticon.png")} style={styles.accounticon}></Image>
                    </View>
                    {/* {<Drawer  openDrawer={this.state.openDrawer}></Drawer>} */}
                </Appbar>
                <View>
                    <Appbar style={styles.input4}>
                    <View style={styles.checkicon}>
                        <Image source={require("../assets/checkbox.png")}></Image>
                    </View>
                    <View style={styles.brushicon}>
                        <Image source={require("../assets/brush.png")}></Image>
                    </View>
                    <View style={styles.voiceicon}>
                        <Image source={require("../assets/voice.png")}></Image>
                    </View>
                    <View style={styles.imageicon}>
                        <Image source={require("../assets/image.png")}></Image>
                    </View>
                    </Appbar>
                </View>
            </View>
        );
    }
}


export default DashBoard

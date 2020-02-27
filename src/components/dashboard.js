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
 *  @since          :14-1-2019
 ******************************************************************************/
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from '../../Css';
import Icon from 'react-native-vector-icons/Entypo';
// import image from '../assets/menu'
import { View, Text } from 'react-native';
import { Image } from 'react-native';
export class DashBoard extends React.Component {
    render() {
        return (
            <View>
                <Appbar style={styles.top}>
                    <View style={styles.menuitem}>
                        <Image source={require("../assets/menu.png")}></Image>
                    </View>
                    <View >
                        <Image source={require("../assets/keep.png")} style={styles.keepicon}></Image>
                    </View>
                    <View>
                        <Text style={styles.fundooText}>FundooNote</Text>
                    </View>
                    <View style={styles.searchicon}>
                        <Image source={require("../assets/search.png")}></Image>
                    </View>
                </Appbar>
            </View>
        );
    }
}


export default DashBoard

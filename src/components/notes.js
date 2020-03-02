import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Css';
import { TextInput, } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
// import MoreComponent from '../components/moreComponent';
import { BottomSheet } from 'react-native-raw-bottom-sheet'
export class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        }
    }
    // _toggleBottomNavigationView = () => {
    //     //Toggling the visibility state of the bottom sheet
    //     this.setState({ visible: !this.state.visible });
    // };
    render() {
        return (
            <View>
                    <View >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('dashboard')}>
                            <Image source={require("../assets/goback.png")} style={styles.gobackicon}></Image>
                        </TouchableOpacity>
                    </View>
                    <View >
                         <Image source={require("../assets/pushpin.jpeg")} style={styles.pushpinicon}></Image>
                    </View>
                    <View >
                         <Image source={require("../assets/alert.png")} style={styles.alerticon}></Image>
                    </View>
                    <View >
                        <Image source={require("../assets/archive.png")} style={styles.archiveicon}></Image>
                    </View>
                    <View>
                    <View >
                        <TextInput placeholder={'Title'} style={styles.textinput}></TextInput>
                    </View>
                    <View >
                        <TextInput placeholder={'Note'} style={styles.textinput1}></TextInput>
                    </View>
                </View>

                <TouchableOpacity>
                    <Image source={require("../assets/more.png")}
                     style={styles.moreicon}></Image>
                </TouchableOpacity>
                {/* <BottomSheet visible={this.state.visible}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={this._toggleBottomNavigationView}
                    //Toggling the visibility state on the click of the back botton
                    onBackdropPress={this._toggleBottomNavigationView}>
                </BottomSheet> */}
            </View>
        )
    }
}
export default Notes
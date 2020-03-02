import React, { Component } from 'react';
//import react in our project
import { StyleSheet, View, Platform, Text, Button } from 'react-native';
//import basic react native components
import { BottomSheet } from 'react-native-raw-bottom-sheet';
//import for the bottom sheet
import { SocialIcon } from 'react-native-elements';
//import to show social icons
import styles from '../Css';
export class App extends Component {
    constructor() {
        super();
        this.state = {
            //default visibility state of the bottom sheet
            visible: false,
        };
    }
    _toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        this.setState({ visible: !this.state.visible });
    };
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
                    Example of Bottom Sheet in React Native
                </Text>
                <Button
                    onPress={this._toggleBottomNavigationView}
                    //on Press of the button bottom sheet will be visible
                    title="Show Bottom Sheet"
                />
                <BottomSheet
                    visible={this.state.visible}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={this._toggleBottomNavigationView}
                    //Toggling the visibility state on the click of the back botton
                    onBackdropPress={this._toggleBottomNavigationView}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                    {/*Bottom Sheet inner View*/}
                    <View style={styles.bottomNavigationView}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                            <Text style={{ textAlign: 'center', padding: 20, fontSize: 20 }}>
                                Share Using
                           </Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <SocialIcon
                                    //Social Icon using react-native-elements
                                    type="twitter"
                                    //Type of Social Icon
                                    onPress={() => {
                                        //Action to perform on press of Social Icon
                                        this._toggleBottomNavigationView();
                                        alert('twitter');
                                    }}
                                />
                                <SocialIcon
                                    type="gitlab"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('gitlab');
                                    }}
                                />
                                <SocialIcon
                                    type="medium"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('medium');
                                    }}
                                />
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('facebook');
                                    }}
                                />
                                <SocialIcon
                                    type="instagram"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('instagram');
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('facebook');
                                    }}
                                />
                                <SocialIcon
                                    type="instagram"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('instagram');
                                    }}
                                />
                                <SocialIcon
                                    type="gitlab"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('gitlab');
                                    }}
                                />
                                <SocialIcon
                                    type="twitter"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('twitter');
                                    }}
                                />
                                <SocialIcon
                                    type="medium"
                                    onPress={() => {
                                        this._toggleBottomNavigationView();
                                        alert('medium');
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </BottomSheet>
            </View>
        );
    }
}
export default App
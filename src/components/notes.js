import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Css';
import { TextInput, } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
// import { SocialIcon } from 'react-native-elements';
// import MoreComponent from '../components/moreComponent';
// import { BottomSheet } from 'react-native-raw-bottom-sheet'
export class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        }
    }
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
                {/* <TouchableOpacity onPress={() => { this.RBSheet.open() }}>
                <Image source={require("../assets/addbox.png")}
                        style={styles.boxicon}>
                    </Image>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={300}
                        duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "center",
                                alignItems: "center"}}}>

                    </RBSheet>
                </TouchableOpacity > */}
                <TouchableOpacity onPress={() => { this.RBSheet.open() }}>
                    <Image source={require("../assets/more.png")}
                        style={styles.moreicon}>
                    </Image>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={300}
                        duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }}>
                        <View style={styles.moreicons}>
                            <TouchableOpacity>
                                <View style={styles.deleteicons}>
                                    <View>
                                        <Image source={require("../assets/delete.png")} style={styles.deleteicon} ></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.deleteText}>Delete</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.copyicons}>
                                    <View>
                                        <Image source={require("../assets/copy.png")} style={styles.copy}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.copyText}>Make a Copy</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sendicons}>
                                    <View>
                                        <Image source={require("../assets/send.png")} style={styles.send} ></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.sendText}>Send</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.addpersonicons}>
                                    <View>
                                        <Image source={require("../assets/addperson.png")} style={styles.collabator}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.collabaratorText}>Collabarator</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.labelicons}>
                                    <View>
                                        <Image source={require("../assets/label.png")} style={styles.label}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.labelText}>Labels</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </RBSheet>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Notes
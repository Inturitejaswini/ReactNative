
/******************************************************************************
* Execution : 1. default node cmd> node notes.js
* 2. if nodemon installed cmd> nodemodule notes.js
* 
* Purpose : create notes page.
* @description 
* 
* @file :notes
* @overview :notes form problem.
* @module :notes - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-2-03-2020
******************************************************************************/
import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Styles';
import { TextInput, ScrollView, } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet1 from "react-native-raw-bottom-sheet";
import ReminderComponent from './remainder'
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/Ionicons";
import Icon7 from "react-native-vector-icons/Ionicons";
import Icon9 from "react-native-vector-icons/AntDesign";
import Icon10 from "react-native-vector-icons/Feather";
import Icon8 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import createNotes from '../services/noteServices'
import Icon from "react-native-vector-icons/Ionicons";
import { Chip } from 'react-native-paper';
import { Card } from 'react-native-elements';
// import ReminderComponent from '../components/remainder'
export class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            title: "",
            description: "",
            reminderDate: "",
        }
        this.reminderData = this.reminderData.bind(this);
    }
    reminderData = (value) => {
        console.warn("dataaa---->", value);
        this.setState({
            reminderDate: value
        });
        console.warn("date and time ", this.state.reminderDate);
    };
    handleNote = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            reminder: this.state.reminderDate,
        };
        // console.warn("note data", data);
        createNotes(data).then(Response => {
            console.warn("res of note data--->", Response);
        });
        this.props.navigation.navigate("dashboard");
    };
    static navigationOptions = {
        drawerLabel: "Notes",
        drawerIcon: <Icon2 name="bulb1" size={20} />
    };
    render() {
        return (
            <View>
                <ScrollView>
                {/* <Card > */}
                <View   style={styles.icons} >
                <View>
                    <TouchableOpacity onPress={() => this.handleNote()}>
                        <Image source={require("../assets/goback.png")}
                            style={styles.gobackicon}></Image>
                    </TouchableOpacity>
                </View>
               
                <View >
                    <Icon3 name="pin-outline"  style={styles.pushpinicon} size={25}></Icon3>
                </View>
                <View>
                    <ReminderComponent reminderProps={this.reminderData} ></ReminderComponent>
                </View>
                <View>
                    <Icon name="md-archive" style={styles.archiveicon} size={22}></Icon>
                </View>
                </View>
                <View >
                    <View>
                        <TextInput placeholder={'Title'}
                            style={styles.textinput}
                            onChangeText={title => this.setState({ title })}
                            value={this.state.text}>
                        </TextInput>
                    </View>
                    <View>
                        <TextInput placeholder={'Note'}
                            style={styles.textinput1}
                            onChangeText={description => this.setState({ description })}
                            value={this.state.text}>
                        </TextInput>
                    </View>
                    {/* <Chip style={{ width: 150,left: 25  }}> */}
                    <Text style={{ fontWeight: "bold", left: 25 }}>
                        {this.state.reminderDate}
                    </Text>
                    {/* </Chip> */}
                </View>
                <View>
                <View>
                 <TouchableOpacity onPress={() => { this.RBSheet1.open() }}>
                <Icon9 name="plussquareo" size={20} style={styles.plusicon}></Icon9>
                <RBSheet1
                        ref={ref => {
                            this.RBSheet1 = ref;
                        }}
                        height={300}
                        duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }}>    
                        </RBSheet1>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => { this.RBSheet.open() }}>
                    <Icon10 name="more-vertical"  style={styles.moreicon} size={20}></Icon10>
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
                                <View style={styles.deleteicons} >
                                    <View>
                                    <Icon5 name="delete" style={styles.deleteicon} size={20}></Icon5>
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
                                        <Icon6 name="md-send" style={styles.send} size={20}></Icon6>
                                    </View>
                                    <View>
                                        <Text style={styles.sendText}>Send</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.addpersonicons}>
                                    <View>
                                        <Icon7 name="md-person-add"  style={styles.collabator} size={20}></Icon7>
                                    </View>
                                    <View>
                                        <Text style={styles.collabaratorText}>Collabarator</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.labelicons}>
                                    <View>
                                    <Icon8 name="label-outline" style={styles.label} size={20}></Icon8>
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
                </View>
                {/* </Card> */}
                </ScrollView>
            </View>
        )
    }
}
export default Notes
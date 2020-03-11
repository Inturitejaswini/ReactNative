
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
import { Image, TouchableOpacity, FlatList } from 'react-native'
import styles from '../Styles';
import { TextInput, ScrollView, } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet1 from "react-native-raw-bottom-sheet";
import ReminderComponent from './remainder'
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
// import Icon5 from "react-native-vector-icons/AntDesign";
// import Icon6 from "react-native-vector-icons/Ionicons";
// import Icon7 from "react-native-vector-icons/Ionicons";
import Icon9 from "react-native-vector-icons/AntDesign";
import Icon10 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/AntDesign";
// import Icon8 from "react-native-vector-icons/MaterialCommunityIcons";
// import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { createNotes } from '../services/noteServices'
import Icon from "react-native-vector-icons/Ionicons";
// import AsyncStorage from '@react-native-community/async-storage'
// import { IconButton } from 'react-native-paper';
// import { Card } from 'react-native-elements';
const colors = [
    // { name: "blue", hexcode: "#F5F5DC" }
    { name: "blue", hexcode: " #39a78e" },
    { name: "violet", hexcode: "#7DCEA0" },
    { name: "blue", hexcode: "#76D7C4" },
    { name: "orange", hexcode: "#5499C7" },
    { name: "beige", hexcode: "#79d4e7" },
    { name: "golden", hexcode: "#EC7063" },
    { name: "lightorange", hexcode: "#E59866" },
    { name: "skyblue", hexcode: "#d3a625" },
    { name: "green", hexcode: "#F7DC6F" },
    { name: "darkseagreen", hexcode: "#BB8FCE" },
    { name: "blue", hexcode: "#D2B4DE" },
    { name: "gray", hexcode: "#ABB2B9" },
    { name: "salmon", hexcode: "#98AFC7" },
    { name: "mistyRose", hexcode: "#74a775" }
];
// import ReminderComponent from '../components/remainder'
export class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            title: "",
            description: "",
            reminderDate: "",
            color: "",
            delete: false,
            pined: false,
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
    // handleColor = async color => {
    //     console.log("colors-------->", color);
    //     await this.setState({
    //       color: color
    //     });
    //     console.log("data of color ", this.state.color);
    //   };
    handleDelete = async () => {
        await this.setState({
            delete: !this.state.delete
        });
        console.log("delete after set state", this.state.delete);
    };
    handlePin = async () => {
        await this.setState({
            pined: !this.state.pined
        });
        console.log("log of pined", this.state.pined);
    };
    handleNote = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            reminder: this.state.reminderDate,
            delete: this.state.delete,
            // Pined: this.state.pined,
        };
        // console.warn("note data", data);
        createNotes(data).then(response => {
            console.warn("response is coming to note component", response)
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

                    <View>
                        <TouchableOpacity onPress={() => this.handleNote()}>
                            <Image source={require("../assets/goback.png")}
                                style={styles.gobackicon}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.icons} >
                        <View>
                            <TouchableOpacity onPress={() => this.handlePin()}>
                                {!this.state.pined ? (
                                    <Icon3
                                        name="pushpino"
                                        size={25}
                                    />
                                ) : (
                                        <Icon3
                                            name="pushpin"
                                            size={25} />
                                    )}
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ReminderComponent reminderProps={this.reminderData} ></ReminderComponent>
                        </View>
                        <View>
                            <Icon name="md-archive" style={styles.archiveicon} size={22}></Icon>
                        </View>
                    </View>
                    <View style={styles.textinput} >
                        <View>
                            <TextInput placeholder={'Title'}
                                onChangeText={title => this.setState({ title })}
                                value={this.state.text}>
                            </TextInput>
                        </View>
                        <View>
                            <TextInput placeholder={'Note'}
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
                    <View style={styles.plusicon}>
                        <View>
                            <TouchableOpacity onPress={() => { this.RBSheet1.open() }}>
                                <Icon9 name="plussquareo" size={20} ></Icon9>
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
                                <Icon10 name="more-vertical" style={styles.moreicon} size={20}></Icon10>
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
                                    <View style={styles.deleteicons}>
                                        <View style={{
                                            flexDirection: "row",
                                            left: -90,
                                            marginTop:38
                                        }}>
                                            <TouchableOpacity onPress={() => this.handleDelete()}>
                                                <Icon0
                                                    name="delete"
                                                    size={20} />
                                                <Text style={{ fontSize: 18, left: 30 ,top:-20}}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                left: -90,
                                                marginTop: -68
                                            }}>
                                            <Icon2 name="sharealt" size={22} />
                                            <Text style={{ fontSize: 18, left: 20 }}>send</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                left: -90,
                                                marginTop: -78
                                            }}>
                                            <Icon2 name="addusergroup" size={25} />
                                            <Text
                                                style={{ fontSize: 18, left: 20 }}
                                                onPress={() => { this.RBSheet1.open() }}>collaborator</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                left: -90,
                                                marginTop: -58
                                            }} >
                                            <Icon1 name="label-outline" size={25} />
                                            <Text
                                                onPress={() => { this.RBSheet2.open(); }}
                                                style={{ fontSize: 18, left: 20 }}>Labels</Text>
                                        </View>
                                        {/* <View>
                                            <FlatList
                                                data={colors}
                                                horizontal={true}
                                                renderItem={({ item }) => (
                                                    <View>
                                                        <IconButton
                                                            style={{ backgroundColor: item.hexcode }}
                                                            value={item.hexcode}
                                                            size={20}
                                                            onPress={() => this.handleColor(item.hexcode)}
                                                        />
                                                    </View>
                                                     )}/>
                                        </View> */}
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
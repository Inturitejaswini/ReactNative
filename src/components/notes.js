
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
import Icon9 from "react-native-vector-icons/AntDesign";
import Icon10 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/AntDesign";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNotes } from '../services/noteServices'
import Icon from "react-native-vector-icons/Ionicons";
import { IconButton } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { getNotes } from '../services/noteServices'
import { archiveNotes } from '../services/noteServices'
import { deleteNotes } from '../services/noteServices'
import { pinUnPinNotes } from '../services/noteServices'
import { updateColor } from '../services/noteServices'
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
            isDeleted: false,
            isArchived: false,
            isPined: false,
            key: '',
            colors: false,
            labelValue: "",
            selectedLabels: "",
            labelData: [],
        }
        this.reminderData = this.reminderData.bind(this);
    }
    // componentDidMount() {
    //     this.getNotes();
    //     // this.getImage();
    //   }
    //   getNotes = () => {
    //     getNotes().then(res => {
    //       this.setState({
    //         notes: res.data.data.data
    //       });
    //     });
    //   };
    reminderData = (value) => {
        console.warn("dataaa---->", value);
        this.setState({
            reminderDate: value
        });
        console.warn("date and time ", this.state.reminderDate);
    };
    handleColor = async (color) => {
        console.warn("colors-------->", color);
        await this.setState({
            color: color
        });
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            color: this.state.color,
        };
        console.warn("data of updateColor", data);
        updateColor(data).then(res => {
            console.warn(" response in color updation", res)
        });
    };
    handlePin = async () => {
        await this.setState({
            // noteIdList: [this.props.navigation.state.params.key],
            isPined: !this.state.isPined,
            isPined: true
        });
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isPined: this.state.isPined,
        }
        console.warn("log of pined", data);
        pinUnPinNotes(data).then(res => {
            console.warn("response in pin notes", res);
        });
        // this.props.navigation.navigate("dashboard");
    };
    handleDelete = async () => {
        await this.setState({ isDeleted: true })
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isDeleted: this.state.isDeleted
            // delete: this.state.delete,
            // key: this.props.navigation.state.params.key
        };
        console.warn("delete after set state", data);
        deleteNotes(data).then(res => {
            console.warn("response in delete notes", res);
        });
        this.props.navigation.navigate("dashboard");
    };
    handleArchiveNote = async () => {
        await this.setState({ isArchived: true })
        console.log("archive data", this.state.isArchived);
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isArchived: this.state.isArchived
        };
        archiveNotes(data).then(res => {
            console.log("res in archive component", res);
        });
        this.props.navigation.navigate("dashboard");
    };
    handleNote = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            reminder: this.state.reminderDate,
            isDeleted: this.state.isDeleted,
            // noteId: this.props.navigation.state.params.key,
            reminder: this.state.reminderDate,
            isArchived: this.state.isArchived,
            isPined: this.state.isPined,
            color: this.state.color,
        };
        // console.warn("note data", data);
        createNotes(data).then(response => {
            console.warn("response is coming to note component", response)
        });
        this.props.navigation.navigate("dashboard");
    };
    // static navigationOptions = {
    //     drawerLabel: "Notes",
    //     drawerIcon: <Icon2 name="bulb1" size={20} />

    // };
    // componentDidMount() {
    //     // console.warn("key------>", this.props.navigation.state.params.display);
    //     this.setState({
    //         title: this.props.navigation.state.params.display.title,
    //         isDeleted: this.props.navigation.state.params.display.isDeleted,
    //         description: this.props.navigation.state.params.display.description,
    //         reminder: this.props.navigation.state.params.display.reminder,
    //         isArchived: this.props.navigation.state.params.display.isArchived,
    //         color: this.props.navigation.state.params.display.color,
    //         labelValue: this.props.navigation.state.params.display.label,


    //     })
    // }
   
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
                        {this.state.reminderDate.length > 1 &&
                            <TouchableOpacity>
                                <Chip>
                                    <IconM name="clock-outline" size={15} color="black" />
                                    {this.state.reminderDate}
                                </Chip>
                            </TouchableOpacity>}
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
                                    height={200}
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
                                            top: 20}}>
                                            <TouchableOpacity onPress={() => this.handleDelete()}>
                                                <Icon0
                                                    name="delete"
                                                    size={20} />
                                                <Text style={{ fontSize: 18, left: 39, top: -20 }}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                top: 10
                                            }}>
                                            <Icon2 name="sharealt" size={22} />
                                            <Text style={{ fontSize: 18, left: 20 }}>send</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                top: 20
                                            }}>
                                            <Icon2 name="addusergroup" size={25} />
                                            <Text
                                                style={{ fontSize: 18, left: 20 }}
                                                onPress={() => { this.RBSheet1.open() }}>collaborator</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                top: 30
                                            }} >
                                            <Icon1 name="label-outline" size={25} />
                                            <Text
                                                onPress={() => { this.RBSheet2.open(); }}
                                                style={{ fontSize: 18, left: 20 }}>Labels</Text>
                                        </View>
                                        <View>
                                            <FlatList
                                                data={colors}
                                                horizontal={true}
                                                renderItem={({ item }) => (
                                                    <View
                                                        style={{
                                                            marginTop: 30}}>
                                                        <IconButton
                                                            style={{ backgroundColor: item.hexcode, borderRadius: 15, left: -12 }}
                                                            value={item.hexcode}
                                                            size={60}
                                                            onPress={() => this.handleColor(item.hexcode)} />
                                                    </View>
                                                )} />
                                        </View>
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
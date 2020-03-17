
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
import { Image, TouchableOpacity, FlatList ,CheckBox} from 'react-native'
import styles from '../Styles';
import { TextInput, ScrollView, } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet1 from "react-native-raw-bottom-sheet";
import RBSheet2 from "react-native-raw-bottom-sheet";
import RBSheet3 from "react-native-raw-bottom-sheet";
import ReminderComponent from './remainder'
import Icon13 from "react-native-vector-icons/MaterialIcons";
import Icon12 from "react-native-vector-icons/MaterialCommunityIcons";
import Iconc from "react-native-vector-icons/Entypo";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon9 from "react-native-vector-icons/AntDesign";
import Icon10 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/AntDesign";
import { Divider } from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNotes } from '../services/noteServices'
import Icon from "react-native-vector-icons/Ionicons";
import { IconButton } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { getNotes ,getAllLabels,deleteNotes,pinNotes,UnpinNotes,updateColor,createLabels,noteCollaborator} from '../services/noteServices'
const colors = [
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
            label: false,
            value: [],
            searchedMail: "",
            users: []
        }
        this.reminderData = this.reminderData.bind(this);
    }
    componentDidMount() {
        this.getNotes();
        this.getLabels()
    }
    getNotes = () => {
        getNotes().then(res => {
            this.setState({
                notes: res.data.data.data,
            });
        });
    };
    getLabels() {
        getAllLabels().then(async res => {
            console.warn("res in getting labels", res.data.data.details)
            console.warn("res in getting labels", res)
            await this.setState({ labelData: res.data.data.details })
        })
    }
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
            isPined: true
        });
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isPined: this.state.isPined,
        }
        console.warn("log of pined", data);
        pinNotes(data).then(res => {
            console.warn("response in pin notes", res);
        });
    };
    handleUnPin = async () => {
        await this.setState({
            isPined: false
        });
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isPined: this.state.isPined,
        }
        console.warn("log of pined", data);
        UnpinNotes(data).then(res => {
            console.warn("response in unpin notes", res);
        });
    };
    handleDelete = async () => {
        await this.setState({ isDeleted: true })
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isDeleted: this.state.isDeleted
        };
        console.warn("delete after set state", data);
        deleteNotes(data).then(res => {
            console.warn("response in delete notes", res);
        });
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
            isArchived: this.state.isArchived,
            isPined: this.state.isPined,
            color: this.state.color,
            label: this.state.label
            // Collaborators: this.state.Collaborators
        };
        createNotes(data).then(response => {
            console.warn("response is coming to note component", response)
        });
        this.props.navigation.navigate("dashboard");
    };
    handleCrossicon() {
        this.RBSheet.close();
        this.RBSheet2.close();
        let data = {
            selectedMail: this.state.selectedEmail,
            noteIdList: [this.props.navigation.state.params.key],
        };
        console.warn(" selected mail", data);
        noteCollaborator(data).then(res => {
            console.warn("res in collaborator", res);
            this.setState({
                Value: res
            });
            console.warn("email result", this.state.Value);
        });
    }
    // handleClickMail = async email => {
    //     console.log("selected email", email);
    //     await this.setState({
    //         searchedMail: email
    //     });
    // };
    handleSave = async (mail) => {
        console.warn("mail", mail);
        await this.setState({
            selectedEmail: mail
        });
        console.warn("selected email", this.state.selectedEmail);
    };
    handleLabelDone = async () => {
        await this.setState({ label: true })
        console.warn("label Data", this.state.label);
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            label: this.state.label
        };
        console.warn("label data", data);
        createLabels(data).then(res => {
            console.warn(" response from label data", res);
        });
    };
    handleSelection = async (labelName) => {
        console.warn("id of label", labelName);
        await this.setState({
            selectedLabels: labelName
        });
        console.warn("label  setstate", this.state.selectedLabels);
    };
    handleLabelArrow =  async (labelValue) => {
        this.RBSheet3.close();
        this.RBSheet.close();
        await this.setState({
            labelValue: labelValue
        });
        console.warn("labelValue", this.state.labelValue);
    };
    render() {
        console.warn("to get labels", this.state.labelData)
        let labelDetails = this.state.labelData.map(labelkey => {
            console.warn("key in label component---->", labelkey.label);
            return (
                <View style={styles.labels}>
                    <Icon12 name="label-outline" size={25} />
                    <Text style={styles.labeltex}>{labelkey.label}</Text>
                    <CheckBox
                    style={styles.labelcheckbox}
                        title={labelkey.label}
                        onPress={() => this.handleSelection(labelkey.label)} />
                </View>
            );
        });
        return (
            <View style={{
                backgroundColor: this.state.color,
                height: "100%"
            }}>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={() => this.handleNote()}>
                            <Image source={require("../assets/goback.png")}
                                style={styles.gobackicon}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.icons} >
                        <View>
                            <TouchableOpacity >
                                {!this.state.isPined ? (
                                    <Icon3
                                        onPress={() => this.handlePin()}
                                        name="pushpino"
                                        size={25}
                                    />
                                ) : (
                                        <Icon3
                                            onPress={() => this.handleUnPin()}
                                            name="pushpin"
                                            size={25} />
                                    )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.icons1}>
                            <ReminderComponent reminderProps={this.reminderData} ></ReminderComponent>
                        </View>
                        <View style={styles.icons2}>
                            <Icon name="md-archive"
                                onPress={() => this.handleArchiveNote()}
                                style={styles.archiveicon} size={22}></Icon>
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
                                <Chip style={styles.chip}>
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
                                    height={220}
                                    duration={250}
                                    customStyles={{
                                        container: {
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }
                                    }}>
                                    <View style={styles.deleteicons}>
                                        <View style={{ flexDirection: "row", top: 20 }}>
                                            <TouchableOpacity onPress={() => this.handleDelete()}>
                                                <Icon0
                                                    name="delete"
                                                    size={20} />
                                                <Text style={{ fontSize: 18, left: 39, top: -20 }}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={{ flexDirection: "row", top: 10 }}>
                                            <Icon2 name="sharealt" size={22} />
                                            <Text style={{ fontSize: 18, left: 20 }}>send</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", top: 20 }}>
                                            <TouchableOpacity onPress={() => { this.RBSheet2.open() }}>
                                                <Icon2 name="addusergroup" size={25} />
                                                <Text style={{ fontSize: 18, left: 40, top: -20 }} >collaborator</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: "row", top: 30 }} >
                                            <TouchableOpacity onPress={() => { this.RBSheet3.open() }}>                                             
                                            <Icon1 name="label-outline" size={25} />
                                                <Text style={{ fontSize: 18, left: 20 }}>Labels</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <FlatList
                                                data={colors}
                                                horizontal={true}
                                                renderItem={({ item }) => (
                                                    <View
                                                        style={{
                                                            marginTop: 30
                                                        }}>
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
                    <View>
                        <TouchableOpacity onPress={() => { this.RBSheet2.open() }}>
                            <RBSheet2
                                ref={ref => {
                                    this.RBSheet2 = ref;
                                }}
                                height={620}
                                duration={250}
                                customStyles={{
                                    container: {
                                        flexDirection: "column"
                                    }
                                }}>
                                <View
                                    style={styles.collaboratorcontainer}>
                                    <TouchableOpacity>
                                        <Iconc name="cross" size={35}
                                            onPress={() => this.handleCrossicon()} />
                                    </TouchableOpacity>
                                    <Text style={styles.collaboratortext}>Collaborators</Text>
                                    <Text style={styles.savebtn}
                                        onPress={() => this.handleSave()}>Save</Text>
                                </View>
                                <Divider type='horizontal' style={{ height: 2 }}></Divider>
                                <View style={styles.accounticon}>
                                    <Icon1 name="account-circle" size={45} color="gray" />
                                    <Text style={styles.mailtext}>
                                        chowdarytejaswini2@gmail.com
                                       </Text>
                                </View>
                                <View style={styles.accountcircle}>
                                    <Icon1 name="account-circle-outline" size={45} color="gray" />
                                    <TextInput
                                        style={styles.Textinput}
                                        placeholder="enter the mail to share..."
                                        value={this.state.searchValue}
                                        onChangeText={this.handleSearchValue} />

                                </View>
                            </RBSheet2>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <RBSheet3
                            ref={ref => {
                                this.RBSheet3 = ref;
                            }}
                            height={620}
                            duration={250}
                            customStyles={{
                                container: {
                                    flexDirection: "column"
                                }
                            }}>
                            <View style={styles.selectedLabels}>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.handleLabelArrow(this.state.selectedLabels)}>
                                        <Icon1 name="arrow-left" size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TextInput
                                        style={styles.labeltext2}
                                        placeholder="Enter label name"
                                        value={this.state.label}
                                        onChangeText={label => this.setState({ label })}
                                    />
                                </View>
                                <View>
                                    <Icon13
                                        style={styles.done}
                                        name="done"
                                        size={25}
                                        onPress={() => {
                                            this.handleLabelDone();
                                        }} />
                                </View>
                            </View>
                            <Divider style={styles.divider}></Divider>
                            {/* <ScrollView>{labelDetails}</ScrollView> */}
                        </RBSheet3>
                    </View>
                    {/* </Card> */}
                </ScrollView>
            </View>
        )
    }
}
export default Notes
import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Foundation";
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/AntDesign";
import Iconp from 'react-native-vector-icons/Feather'
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet1 from "react-native-raw-bottom-sheet";
import RBSheet2 from "react-native-raw-bottom-sheet";
import { IconButton, Colors, Divider } from "react-native-paper";
import styles from "../Styles";
import { Chip } from 'react-native-paper';
import { editNotes, archiveNotes, deleteNotes, pinNotes, UnpinNotes, updateColor, createLabels, getAllLabels } from '../services/noteServices'
import ReminderComponent from '../components/remainder'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, Text, TextInput, View, FlatList, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements'
const colors = [
    // { name: "blue", hexcode: "#F5F5DC" }
    { name: "blue", hexcode: " #b8abb9" },
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
var CheckValue = [];
export class EditComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            reminderDate: "",
            reminder: "",
            isDeleted: false,
            isArchived: false,
            isPined: false,
            key: '',
            key1: '',
            colors: false,
            labelValue: "",
            selectedLabels: "",
            labelData: [],
            checkBox: [],
            checked: false,
            label: false,
            labelName: ""

        };
        this.reminderData = this.reminderData.bind(this);
    }
    reminderData = async (value) => {
        console.warn("dataaa---->", value);
        await this.setState({
            reminderDate: value
        });
        // console.warn("date and time ", this.state.reminderDate);
        // let data = {
        //     noteIdList: [this.props.navigation.state.params.key],
        //     reminderDate: this.state.reminderDate
        // }
        // console.warn('reminder update',this.state.reminderDate)
        // updateReminder(data).then(res=>{
        //     console.warn("response from update reminder",res)
        // })
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
    handleLabelDone = async () => {
        await this.setState({ label: true })
        console.warn("label Data", this.state.label);
        let data = {
            label: this.state.label,
            id: this.state.id,
            isDeleted: false
        };
        console.warn("label data", data);
        createLabels(data).then(res => {
            console.warn(" response from label data", res);
        });
    };

    handleSelection = async (labelName) => {
        console.warn(" label name", labelName);
        await this.setState({
            selectedLabels: labelName
        });
        console.warn("label setstate", this.state.selectedLabels);
    };
    handleLabelArrow = async (labelValue) => {
        this.RBSheet2.close();
        this.RBSheet.close();
        await this.setState({
            labelValue: labelValue
        });
        console.warn("labelValue", this.state.labelValue);
    };
    handleEditCard = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            isDeleted: this.state.isDeleted,
            noteId: this.props.navigation.state.params.key,
            reminder: this.state.reminderDate,
            isArchived: this.state.isArchived,
            isPined: this.state.isPined,
            color: this.state.color,
            labelValue: this.state.label
        };
        console.warn("editnote data", data); 12

        editNotes(data).then(res => {
            console.warn("response from edit note data", res);
            this.setState({
                color: res.color
            })
        });
        this.props.navigation.navigate("dashboard");
    };
    handleColor = async (color) => {
        await this.setState({
            color: color
        });
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            color: this.state.color,
        };
        console.warn("data of updateColor", data);
        updateColor(data).then(res => {
            console.warn(" response from  color updation", res)
        });
    };
    componentDidMount() {
        this.handledetails();
        this.getLabels()
    }
    handledetails() {
        this.setState({
            title: this.props.navigation.state.params.display.title,
            isDeleted: this.props.navigation.state.params.display.isDeleted,
            description: this.props.navigation.state.params.display.description,
            reminder: this.props.navigation.state.params.display.reminderDate,
            isArchived: this.props.navigation.state.params.display.isArchived,
            color: this.props.navigation.state.params.display.color,
            isPined: this.props.navigation.state.params.display.isPined,
            labelValue: this.props.navigation.state.params.display.label
        })
    }
    getLabels() {
        getAllLabels().then(async res => {
            await this.setState({
                labelData: res.data.data.details
            })
        })
    }
    render() {
        let labelDetails = [];
        labelDetails = this.state.labelData.map(labelkey => {
             CheckValue[labelkey.id] = false 
            return (
                <View style={styles.labels}>
                    <CheckBox
                        style={styles.labelcheckbox}
                        title={labelkey.label}
                        checked={this.state.checkBox[labelkey.id]}
                        onPress={() => this.handleSelection(labelkey.label, labelkey.id, this.state.checkBox[labelkey.id])}>
                    </CheckBox>
                </View>
            );
        });
        return (
            <View style={{
                backgroundColor: this.state.color,
                height: "100%"
            }}>
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <View style={{ width: "60%" }}>
                        <Icon1
                            name="arrow-left"
                            size={25}
                            onPress={() => { this.handleEditCard() }} />
                    </View>
                    <View style={styles.editIcons}>
                        <View>
                            <TouchableOpacity >
                                {!this.state.isPined ? (
                                    <Icon5
                                        onPress={() => this.handlePin()}
                                        name="pushpino"
                                        size={25}
                                    />
                                ) : (
                                        <Icon5
                                            onPress={() => this.handleUnPin()}
                                            name="pushpin"
                                            size={25} />
                                    )}
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ReminderComponent reminderProps={this.reminderData} ></ReminderComponent>
                        </View>
                        <View style={{ left: 20 }}>
                            <Icon3
                                name="archive"
                                size={25}
                                onPress={() => this.handleArchiveNote()} />
                        </View>
                    </View>
                </View>
                <View style={styles.noteData}>
                    <View>
                        <TextInput
                            style={{ height: 60, fontSize: 22, left: 20 }}
                            placeholder="Tittle"
                            defaultValue={this.props.navigation.state.params.display.title}
                            onChangeText={title => this.setState({ title })}
                            value={this.state.title}
                        />
                    </View>
                    <View style={{ marginTop: -10, left: 23 }}>
                        <TextInput
                            style={{ height: 60, fontSize: 17 }}
                            placeholder="note"
                            defaultValue={this.props.navigation.state.params.display.description}
                            value={this.state.description}
                            onChangeText={description => this.setState({ description })}
                        />
                    </View>
                    <Text style={{ fontWeight: "bold", left: 10 }}>
                            {this.state.labelValue}
                    </Text>
                    {this.state.reminderDate.length > 1 &&
                        <TouchableOpacity>
                            <Chip style={styles.chip}>
                                <IconM name="clock-outline" size={15} color="black" />
                                {this.state.reminderDate}
                            </Chip>
                        </TouchableOpacity>}
                </View>
                <View
                    style={{ top: 400, left: 340 }}>
                    <Icon4
                        name="ellipsis-v"
                        size={25}
                        onPress={() => { this.RBSheet.open() }} />
                    <RBSheet
                        ref={ref => { this.RBSheet = ref }}
                        height={230}
                        duration={250}
                        customStyles={{
                            container: {
                                flexDirection: "column",
                                // bottom:45
                            }
                        }}>
                        <View style={{
                            flexDirection: "row",
                            left: 10,
                            marginTop: 18
                        }}>
                            <TouchableOpacity onPress={() => this.handleDelete()}>
                                <Icon0
                                    name="delete"
                                    size={20} />
                                <Text style={{ fontSize: 18, left: 38, top: -20 }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                left: 10,
                                // marginTop: 18
                            }}>
                            <Icon2 name="sharealt" size={22} />
                            <Text style={{ fontSize: 18, left: 20 }}>send</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                left: 10,
                                marginTop: 18
                            }}>
                            <Icon2 name="addusergroup" size={25} />
                            <Text
                                style={{ fontSize: 18, left: 20 }}>collaborator</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                left: 10,
                                marginTop: 18
                            }} >
                            <Icon1 name="label-outline" size={25} />
                            <Text
                                onPress={() => { this.RBSheet2.open() }}
                                style={{ fontSize: 18, left: 20 }}>Labels</Text>
                        </View>
                        <View>
                            <FlatList
                                data={colors}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <IconButton
                                            style={{ backgroundColor: item.hexcode, borderRadius: 15 }}
                                            value={item.hexcode}
                                            size={40}
                                            onPress={() => this.handleColor(item.hexcode)} />
                                    </View>
                                )} />
                        </View>
                    </RBSheet>
                </View>
                <View>
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
                                    value={this.state.labelName}
                                    onChangeText={labelName => this.setState({ labelName })}
                                />
                            </View>
                            {/* <View>
                                <Icon
                                    style={styles.done}
                                    name="done"
                                    size={25}
                                    onPress={() => {
                                        this.handleLabelDone();
                                    }} />
                            </View> */}
                        </View>
                        <Divider style={styles.divider}></Divider>
                        <View>
                            <TouchableOpacity onPress={this.handleLabelDone} style={styles.done}>
                                <View >
                                    <Iconp name="plus" size={23} color="#5499C7" />
                                </View>
                                <View style={styles.labelText}>
                                    <Text style={{ fontWeight: "800", fontSize: 15 }}>Create :" {this.state.labelName} "</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>{labelDetails}</ScrollView>
                    </RBSheet2>
                </View>

            </View>

        );
    }
}
export default EditComponent

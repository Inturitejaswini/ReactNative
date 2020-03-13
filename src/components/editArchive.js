import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/AntDesign";
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet1 from "react-native-raw-bottom-sheet";
import RBSheet2 from "react-native-raw-bottom-sheet";
import { IconButton, Colors } from "react-native-paper";
import styles from "../Styles";
import { editNotes } from '../services/noteServices'
import { UnArchiveNotes } from '../services/noteServices'
import { deleteNotes } from '../services/noteServices'
import { pinUnPinNotes } from '../services/noteServices'
import { updateColor } from '../services/noteServices'
import { createLabels } from '../services/noteServices'
import ReminderComponent from '../components/remainder'
import {
    ScrollView,
    Text,
    TextInput,
    View,
    FlatList,
    TouchableOpacity
} from "react-native";
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
export class EditArchiveComponent extends Component {
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
            key1:'',
            colors: false,
            labelValue: "",
            selectedLabels: "",
            labelData: [],
            label: false

        };
        this.reminderData = this.reminderData.bind(this);
    }
    reminderData = (value) => {
        console.warn("dataaa---->", value);
        this.setState({
            reminderDate: value
        });
        console.warn("date and time ", this.state.reminderDate);
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
        pinUnPinNotes(data).then(res => {
            console.warn("response in pin notes", res);
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
    handleUnArchiveNote = async () => {
        await this.setState({ isArchived: false })
        console.log("archive data", this.state.isArchived);
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isArchived: this.state.isArchived
        };
        UnArchiveNotes(data).then(res => {
            console.log("res in unarchive component", res);
        });
        this.props.navigation.navigate("dashboard")
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
            console.log(" response from label data", res);
        });
    };
    handleSelectLabel = async (labelName) => {
        console.log("id of label", labelName);
        await this.setState({
            selectedLabels: labelName
        });
        console.warn("label  setstate", this.state.selectedLabels);
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
            labelValue: this.state.labelValue
        };
        console.warn("editnote data", data);
        editNotes(data).then(res => {
            console.warn("response from edit note data", res);
            this.setState({
                color: res.color
            })
        });
        this.props.navigation.navigate("archiveComponent");
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
        this.setState({
            title: this.props.navigation.state.params.display.title,
            isDeleted: this.props.navigation.state.params.display.isDeleted,
            description: this.props.navigation.state.params.display.description,
            reminder: this.props.navigation.state.params.display.reminder,
            isArchived: this.props.navigation.state.params.display.isArchived,
            color: this.props.navigation.state.params.display.color,
            labelValue: this.props.navigation.state.params.display.labelValue
        })
    }
    // componentWillMount() {
    //     getLabels().then(response => {
    //       console.log("res in label notes", response);
    //       this.setState({
    //         labelData: response
    //       });
    //       console.log("label data after setting state", this.state.labelData);
    //     });
    //   }
    render() {
        // let labelDetails = this.state.labelData.map(key1 => {
        //     console.log("key in label component---->", key1.data().label);
        //     return (
        //         <View>
        //             <CheckBox
        //                 title={key1.data().label}
        //                 onPress={() => this.handleSelectLabel(key1.data().label)} />
        //         </View>
        //     );
        // });
        return (
            <View style={{
                backgroundColor: this.state.color,
                height: "100%"}}>
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <View style={{ width: "60%" }}>
                        <Icon1
                            name="arrow-left"
                            size={25}
                            onPress={() => { this.handleEditCard() }} />
                    </View>
                    <View style={styles.editIcons}>
                        <View>
                            <TouchableOpacity onPress={() => this.handlePin()}>
                                {!this.state.isPined ? (
                                    <Icon5
                                        name="pushpino"
                                        size={25}
                                    />
                                ) : (
                                        <Icon5
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
                                name="unarchive"
                                size={25}
                                onPress={() => this.handleUnArchiveNote()} />
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
                        {this.state.reminder}
                    </Text>
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
                                style={{ fontSize: 18, left: 20 }}
                                onPress={() => { this.RBSheet1.open() }}>collaborator</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                left: 10,
                                marginTop: 18
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
                        <View style={{ flexDirection: "row", margin: 10 }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.handleLabelArrow(this.state.selectedLabels)}>
                                    <Icon1 name="arrow-left" size={25} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TextInput
                                    style={{
                                        height: 40,
                                        fontSize: 18,
                                        left: 30,
                                        marginTop: -3
                                    }}
                                    placeholder="Enter label name"
                                    value={this.state.label}
                                    onChangeText={label => this.setState({ label })}
                                />
                            </View>
                            <View style={{ left: 150 }}>
                                <Icon
                                    name="done"
                                    size={25}
                                    onPress={() => {
                                        this.handleLabelDone();
                                    }} />
                            </View>
                        </View>
                        {/* <ScrollView>{labelDetails}</ScrollView> */}
                    </RBSheet2>
                </View>
            </View>

        );
    }
}
export default EditArchiveComponent

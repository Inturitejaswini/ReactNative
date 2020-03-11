import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Foundation";
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/AntDesign";
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet1 from "react-native-raw-bottom-sheet";
import RBSheet2 from "react-native-raw-bottom-sheet";
import { IconButton, Colors } from "react-native-paper";
import styles from "../Styles";
import { editNotes } from '../services/noteServices'
import { archiveNotes } from '../services/noteServices'
import { deleteNotes } from '../services/noteServices'
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
export class EditComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            reminderDate: "",
            reminder: "",
            delete: false,
            archive: false,
            key: '',
            color: "",

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
            pined: !this.state.pined
        });
        console.log("log of pined", this.state.pined);
    };
    handleDelete = () => {
        let data = {
            delete: this.state.delete,
            key: this.props.navigation.state.params.key
        };
        console.log("delete after set state", data);
        deleteNotes(data).then(res => {
            console.log("res in delete notes", res.delete);
            this.setState({
                delete: res.delete
            });
        });
    };
    handleArchiveNote = (key) => {
        console.log("archive data", this.state.archive);
        let data = {
            archive: this.state.archive,
            key: this.props.navigation.state.params.key
        };
        archiveNotes(data).then(res => {
            console.log("res after api", res);
            this.setState({
                archive: res.archive
            });
            console.log("archive data after set state", this.state.archive);
        });
    };
    handleEditCard = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            delete: this.state.delete,
            noteId: this.props.navigation.state.params.key,
            reminder: this.state.reminderDate,
            archive: this.state.archive,
        };
        console.warn("editnote data", data);
        editNotes(data).then(res => {
            console.warn("res of edit note data--->", res);
        });
        this.props.navigation.navigate("dashboard");
    };
    handleColor = async color => {
        console.log("colors-------->", color);
        await this.setState({
          color: color
        });
        console.log("data of color ", this.state.color);
      };
    componentDidMount() {
        console.log("key------>", this.props.navigation.state.params.display);
        this.setState({
            title: this.props.navigation.state.params.display.title,
            delete: this.props.navigation.state.params.display.delete,
            description: this.props.navigation.state.params.display.description,
            reminder: this.props.navigation.state.params.display.reminder,
            archive: this.props.navigation.state.params.display.archive,
            color: this.props.navigation.state.params.display.color,

        })
    }
    render() {
        return (
            <View>
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
                                {!this.state.pined ? (
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
                                bottom:45}}}>
                        <View style={{
                            flexDirection: "row",
                            left: 10,
                            marginTop: 18}}>
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
                                            marginTop: 10}}>
                                        <IconButton
                                            style={{ backgroundColor: item.hexcode ,borderRadius:15}}
                                            value={item.hexcode}
                                            size={40}
                                            onPress={() => this.handleColor(item.hexcode)}/>
                                    </View>
                                )}/>
                        </View>
                    </RBSheet>
                </View>
            </View>

        );
    }
}
export default EditComponent

import React, { Component } from "react";
import { Icon1, Icon2, Icon0 } from "react-native-vector-icons/MaterialCommunityIcons";
import Icon4 from "react-native-vector-icons/FontAwesome";
import RBSheet from "react-native-raw-bottom-sheet";
import { IconButton, Colors } from "react-native-paper";
import styles from "../Styles";
import { editNotes, deleteForever, updateColor, restore } from '../services/noteServices'
import { Text, TextInput, View, FlatList, TouchableOpacity } from "react-native";
const colors = [
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
export class EditTrashComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            isDeleted: false,
            key: '',
            colors: false,

        };
    }

    handleDeleteForever = async () => {
        await this.setState({ isDeleted: false })
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isDeleted: this.state.isDeleted
        };
        deleteForever(data).then(res => {
        });
    };
    handleRestore = async () => {
        await this.setState({ isDeleted: true })
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            isDeleted: this.state.isDeleted
        };
        restore(data).then(res => {
        });
        this.props.navigation.navigate("dashboard")
    };
    handleEditCard = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            noteId: this.props.navigation.state.params.key,
            color: this.state.color,
            isDeleted: this.state.isDeleted
        };
        editNotes(data).then(res => {
            this.setState({
                color: res.color
            })
        });
        this.props.navigation.navigate("trash");
    };
    handleColor = async (color) => {
        await this.setState({
            color: color
        });
        let data = {
            noteIdList: [this.props.navigation.state.params.key],
            color: this.state.color,
        };
        updateColor(data).then(res => {
        });
    };
    componentDidMount() {
        this.setState({
            title: this.props.navigation.state.params.display.title,
            isDeleted: this.props.navigation.state.params.display.isDeleted,
            description: this.props.navigation.state.params.display.description,
            color: this.props.navigation.state.params.display.color,
        })
    }
    render() {
        return (
            <View style={{
                backgroundColor: this.state.color,
                height: "100%"
            }}>
                <View style={styles.arrowLeft}>
                    <Icon1
                        name="arrow-left"
                        size={25}
                        onPress={() => { this.handleEditCard() }} />
                </View>
                <View style={styles.noteData}>
                    <View>
                        <TextInput
                            style={styles.title}
                            placeholder="Tittle"
                            defaultValue={this.props.navigation.state.params.display.title}
                            onChangeText={title => this.setState({ title })}
                            value={this.state.title}
                        />
                    </View>
                    <View style={styles.note}>
                        <TextInput
                            placeholder="note"
                            defaultValue={this.props.navigation.state.params.display.description}
                            value={this.state.description}
                            onChangeText={description => this.setState({ description })}
                        />
                    </View>
                </View>
                <View
                    style={styles.elipsis}>
                    <Icon4
                        name="ellipsis-v"
                        size={25}
                        onPress={() => { this.RBSheet.open() }} />
                    <RBSheet
                        ref={ref => { this.RBSheet = ref }}
                        height={150}
                        duration={250}
                        customStyles={{
                            container: {
                                flexDirection: "column",
                            }
                        }}>
                        <View style={{
                            flexDirection: "row",
                            left: 10,
                            marginTop: 18
                        }}>
                            <TouchableOpacity onPress={() => this.handleRestore()}>
                                <Icon0
                                    name="restore-clock"
                                    size={20} />
                                <Text style={styles.restor}>Restore</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.deleteForever}>
                            <TouchableOpacity onPress={() => this.handleDeleteForever()}>
                                <Icon2 name="delete-forever" size={22} />
                                <Text style={styles.deleteForeverText}>DeleteForever</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                data={colors}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View
                                        style={styles.colorBtn}>
                                        <IconButton
                                            style={{
                                                backgroundColor: item.hexcode,
                                                borderRadius: 15
                                            }}
                                            value={item.hexcode}
                                            size={40}
                                            onPress={() => this.handleColor(item.hexcode)} />
                                    </View>
                                )} />
                        </View>
                    </RBSheet>
                </View>
            </View>

        );
    }
}
export default EditTrashComponent

import React, { Component } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, ScrollView ,ProgressBarAndroid} from "react-native";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Foundation";
import { Card } from "react-native-elements";
import styles from "../Styles";
import { getNotes } from "../services/noteServices";
import { DrawerActions } from "react-navigation-drawer";

// import { Chip } from "react-native-paper";
export class ArchiveComponent extends Component {
    constructor() {
        super();
        this.state = {
            listOpen: false,
            notes: [],
            // isArchived: []
        };
    }
    static navigationOptions = {
        drawerLabel: "Archive",
        drawerIcon: <Icon name="archive" size={20} />
    };
    componentDidMount() {
        getNotes().then(res => {
            this.setState({
                notes: res.data.data.data
            });
            console.warn("getNote data ", this.state.notes);
        });
    }
    handleGridView() {
        this.setState({
            listOpen: !this.state.listOpen
        });
        console.warn(" response from listview", this.state.listOpen);
    }
    render() {
        let Align = this.state.listOpen ? styles.listAlign : styles.gridAlign;
        let noteDetails = this.state.notes.map(key => {
            if (key.isArchived == true) {
                return (
                    <View style={Align}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate("editArchive", {
                                display: key,
                                key: key.id
                            })}>
                            <Card
                                containerStyle={{
                                    backgroundColor: key.color,
                                    borderRadius: 10
                                }}>
                                <Text> {key.title}</Text>
                                <Text> {key.description}</Text>
                                <Text> {key.reminder}</Text>
                            </Card>
                        </TouchableOpacity>
                    </View>
                );
            }
        });
        let pinNoteDetails = this.state.notes.map(key => {
            if (key.isPined === true&&key.isDeleted !== true&&key.isArchived!==true) {
              return (
                <View style={Align}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("editArchive", {
                        display: key,
                        key: key.id})}>
                    <Card containerStyle={{
                        backgroundColor: key.color,
                        borderRadius: 10
                      }}>
                      <Text > {key.title}</Text>
                      <Text> {key.description}</Text>
                      <Text > {key.reminder}</Text>
                      <Text style={{ fontWeight: "bold" }}>{key.label}</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            }
          });
        return (
            <ScrollView>
                <Card containerStyle={{ height: 50, borderRadius: 10 }}>
                    <View
                        style={styles.archivedrawer}>
                        <View style={{ top: -5 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                <Image source={require("../assets/menuicon.png")}></Image>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 30, top: -10 }}>Archive</Text>
                        <View style={styles.searchicon}>
                            <Image source={require("../assets/searchicon.png")}></Image>
                        </View>
                        <View
                            style={styles.archivegrid}>
                            <View>
                                {!this.state.listOpen ? (
                                    <TouchableOpacity style={{ top: -5 }}>
                                        <Icon1
                                            name="view-stream"
                                            size={32}
                                            onPress={() => { this.handleGridView() }} />
                                    </TouchableOpacity>
                                ) : (
                                        <TouchableOpacity style={{ top: -4 }}>
                                            <Icon2
                                                name="th-large"
                                                size={25}
                                                onPress={() => { this.handleGridView() }} />
                                        </TouchableOpacity>
                                    )}
                            </View>
                        </View>
                    </View>
                </Card>
                {noteDetails.length > 0 ? (
                        <View>
                            {/* <Text style={{ left: 25, fontWeight: "bold", top: 10 }}>PINED</Text> */}
                            <View style={styles.getNoteCard}>{pinNoteDetails}</View>
                            {/* <Text style={{ left: 25, fontWeight: "bold", top: 10 }}>OTHERS</Text> */}
                            <View style={styles.getNoteCard}>{noteDetails}</View>
                        </View>
                    ) : (
                            <ProgressBarAndroid
                                color="gray"
                                progress={0.9}
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: 200
                                }} />
                        )}
            </ScrollView>
        );
    }
}
export default ArchiveComponent
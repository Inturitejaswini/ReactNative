import React, { Component } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, ScrollView,ProgressBarAndroid} from "react-native";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { Card } from "react-native-elements";
import styles from "../Styles";
import { getNotes } from "../services/noteServices";
import { DrawerActions } from "react-navigation-drawer";
import Icona from "react-native-vector-icons/AntDesign"
export class Trash extends Component {
  constructor() {
    super();
    this.state = {
      listOpen: false,
      notes: [],
    };
  }
  static navigationOptions = {
    drawerLabel: "Delete",
    drawerIcon: <Icona name="delete" size={20} />
  };
  componentDidMount() {
    getNotes().then(res => {
      this.setState({
        notes: res.data.data.data
      });
      console.warn("getNotes data", this.state.notes);
    });
  }
  handleGridView() {
    this.setState({
      listOpen: !this.state.listOpen
    });
    console.warn("response from listview", this.state.listOpen);
  }
  render() {
    let Align = this.state.listOpen ? styles.listAlign : styles.gridAlign;
    let noteDetails = this.state.notes.map(key => {
      if (key.isDeleted == true) {
        return (
          <View style={Align}>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate("editTrash", {
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
      if (key.isPined === true && key.isDeleted !== true && key.isArchived !== true) {
        return (
          <View style={Align}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("editTrash", {
                  display: key,
                  key: key.id
                })}>
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
      <View>
        <Card containerStyle={{ height: 50, borderRadius: 10 }}>
          <View
            style={styles.trashdrawer}>
            <View style={{ top: -5 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={require("../assets/menuicon.png")}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ fontSize: 30, top: -10 }}>Delete </Text>
            </View>
            <View style={styles.searchicon}>
              <Image source={require("../assets/searchicon.png")}></Image>
            </View>
            <View
              style={styles.trashgrid}>
              <View >
                {!this.state.listOpen ? (
                  <TouchableOpacity style={{ top: -5 }}>
                    <Icon1
                      name="view-stream"
                      size={32}
                      onPress={() => {
                        this.handleGridView();
                      }} />
                  </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={{ top: -4 }}>
                      <Icon2
                        name="th-large"
                        size={25}
                        onPress={() => {
                          this.handleGridView();
                        }}
                      />
                    </TouchableOpacity>
                  )}
              </View>
            </View>
          </View>
        </Card>
        <ScrollView>
          {noteDetails.length > 0 ? (
            <View>
            <View style={styles.getNoteCard}>{noteDetails}</View>
            <View style={styles.getNoteCard}>{pinNoteDetails}</View>
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
        {/* <Card style={styles.reminderinput}
                    containerStyle={{  height: 50, borderRadius: 10}}>
                    <View style={styles.reminderinput5}>
                        <View >
                            <Icon4 name="checksquareo" size={20} >
                            </Icon4>
                        </View>
                        <View >
                            <Icon5 name="brush" size={20}>
                            </Icon5>
                        </View>
                        <View >
                            <Icon6 name="keyboard-voice" size={20}>
                            </Icon6>
                        </View>
                        <View >
                            <Icon7 name="image" size={20}>
                            </Icon7>
                        </View>
                        <View>
                            <TouchableOpacity  >
                                <Icon0
                                    name="pluscircleo"
                                    size={30}
                                    onPress={() => this.handleNote()}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card> */}
      </View>
    );
  }
}
export default Trash
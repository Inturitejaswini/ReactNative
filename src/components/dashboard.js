/******************************************************************************
 *  Execution       :   1. default node         cmd> node dashBoard.js
 *                      2. if nodemon installed cmd> nodemodule dashBoard.js
 * 
 *  Purpose         : creating dashboard application page.
 *  @description    
 * 
 *  @file           :dashBoard.jsx
 *  @overview       : creating dashBoard page.
 *  @module         :dashBoard - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :24-0-2020
 ******************************************************************************/
import * as React from 'react';
import { Appbar, Toolbar } from 'react-native-paper';
import styles from '../Styles';
import { DrawerActions } from 'react-navigation-drawer';
import { View, Text, TouchableOpacity, ProgressBarAndroid,TextInput} from 'react-native';
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Entypo";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/MaterialIcons";
import Icon7 from "react-native-vector-icons/Entypo";
import { Avatar, Divider } from "react-native-elements";
import Dialog from "react-native-dialog";
import { Image } from 'react-native'
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { getNotes } from '../services/noteServices'
import { userLogOut } from '../services/userServices'
import { ScrollView } from 'react-native-gesture-handler';
export class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      openDrawer: false,
      listOpen: false,
      open: false,
      notes: [],
      reminder: [],
      dialogVisible: false,
      visible: false,
      searchOpen: false,
      

    }
  }
  componentDidMount() {
    this.getNotes();
    // this.getImage();
  }
  getNotes = () => {
    getNotes().then(res => {
      this.setState({
        notes: res.data.data.data
      });
    });
  };
  openDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer })
  }
  handleNote = () => {
    this.props.navigation.navigate("notes");
  };
  handleSearch = () => {
    this.setState({
      searchOpen: !this.state.searchOpen
    });
    this.props.navigation.navigate('searchComponent')
  }
  handleGridView() {
    this.setState({
      listOpen: !this.state.listOpen
    });
    console.log("listView response", this.state.listOpen);
  }
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
  handleSignOut = () => {
    console.log("signout");
    userLogOut().then(response => {
      console.log("response in signout", response);
    });
    this.props.navigation.navigate("login");
    this.setState({ dialogVisible: false });
  };
  static navigationOptions = {
    drawerLabel: "Notes",
    drawerIcon: <Icon2 name="bulb1" size={20} />

  };

  render() {
    let Align = this.state.listOpen ? styles.listAlign : styles.gridAlign;
    let pinCount = 0
    let unPinCount = 0
    var noteDetails = this.state.notes.map(key => {
      if (key.isPined !== true && key.isDeleted !== true && key.isArchived !== true) {
        unPinCount++
        return (
          <View style={Align}>
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('editComponent', {
                    display: key,
                    key: key.id
                  })}>
                <Card containerStyle={{
                  backgroundColor: key.color,
                  borderRadius: 10
                }}>
                  <View>
                    <Text>{key.title}</Text>
                    <Text>{key.description}</Text>
                    <Text style={{ fontWeight: "bold" }}>{key.reminder}</Text>
                    <Text style={{ fontWeight: "bold" }}>{key.label}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )
      }
    });
    let pinNoteDetails = this.state.notes.map(key => {
      if (key.isPined === true && key.isDeleted !== true && key.isArchived !== true) {
        pinCount++;
        return (
          <View style={Align}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("editComponent", {
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
      <View style={styles.dashboardContainer}>
        <Card style={styles.top} containerStyle={{ height: 50, borderRadius: 10 }}>
          <View style={styles.appicons}>
            <View style={styles.menuitem}>
            <View >
              <TouchableOpacity
                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={require("../assets/menuicon.png")}>
                </Image>
              </TouchableOpacity>
            </View>
            <View >
              <Image source={require("../assets/keepicon.png")} style={styles.keepicon}></Image>
            </View>
            <View  containerStyle={{left:10 }}>
              <Text>
                <Text style={{ color: "red" }}>F</Text>
                <Text style={{ color: "aqua" }}>u</Text>
                <Text style={{ color: "blue" }}>n</Text>
                <Text style={{ color: "darkGreen" }}>d</Text>
                <Text style={{ color: "purple" }}>o</Text>
                <Text style={{ color: "orange" }}>o</Text>
                <Text style={{ color: "black" }}>Note</Text>
              </Text>
            </View>
            </View>
            <View  style={styles.searchicon}>
            <View style={styles.search}>
              <TouchableOpacity onPress={() => {this.handleSearch()}}>
              <Image source={require("../assets/searchicon.png")}>
              </Image>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              {!this.state.listOpen ? (
                <TouchableOpacity >
                  <Icon1
                    name="view-stream"
                    size={30} onPress={() => this.handleGridView()} />
                </TouchableOpacity>
              ) : (
                  <TouchableOpacity>
                    <Icon
                      name="grid"
                      size={30} onPress={() => this.handleGridView()} />
                  </TouchableOpacity>
                )}
            </View>
            <View style={{ top: -2 }}>
              <View>
                <TouchableOpacity>
                  <Icon3
                    name="account-circle"
                    size={40}
                    rounded
                    source={this.state.profile}
                    activeOpacity={0.7}
                    onPress={this.showDialog}
                  />
                </TouchableOpacity>
                <Dialog.Container visible={this.state.dialogVisible}>
                  <View style={{ flexDirection: "row", marginTop: -10 }}>
                    <View>
                      <Icon3
                        name="account-circle"
                        size={40}
                        rounded
                        source={this.state.profile}
                        activeOpacity={0.7}
                        onPress={this.handleProfile}
                      />
                    </View>
                    <View style={{ left: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        Inturitejaswini
                          </Text>
                      <Text>chowdarytejaswini2gmail.com</Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Dialog.Button label="Manage Your Google Account"></Dialog.Button>
                  </View>
                  <Divider style={{ marginTop: 15 }} />
                  <View style={{ left: 70, flexDirection: "row" }}>
                    <Dialog.Button
                      label="Cancel"
                      onPress={this.handleCancel}
                    />
                    <Dialog.Button
                      label="Logout"
                      onPress={() => this.handleSignOut()}
                    />
                  </View>
                </Dialog.Container>
              </View>
            </View>
            </View>
          </View>
        </Card>
        <ScrollView>
          {noteDetails.length > 0 ? (
            <View>
              <Text style={styles.carddetails}>PINED :{pinCount}</Text>
              <View style={styles.getNoteCard}>{pinNoteDetails}</View>
              <Text style={styles.notecarddetails}>OTHERS :{unPinCount}</Text>
              <View style={styles.getNoteCard}>{noteDetails}</View>
            </View>
          ) : (
              <ProgressBarAndroid
                color="gray"
                progress={0.9}
                style={styles.progress} />
            )}
        </ScrollView>

        <Card style={styles.input4}
          containerStyle={{ height: 50, borderRadius: 10 }}>
          <View style={styles.input5}>
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
        </Card>

      </View>
    );
  }
}


export default DashBoard

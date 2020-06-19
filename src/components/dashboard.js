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
import styles from '../Styles';
import { DrawerActions } from 'react-navigation-drawer';
import { View, Text, TouchableOpacity, ProgressBarAndroid, Image } from 'react-native';
import { Card } from "react-native-elements";
import { GridIcon, BrushIcon, ImageIcon } from "react-native-vector-icons/Entypo";
import { PlusCircleIcon, CheckSquare, BulbIcon } from "react-native-vector-icons/AntDesign";
import KeyboardVoice from "react-native-vector-icons/MaterialIcons";
import { Avatar, Divider } from "react-native-elements";
import Dialog from "react-native-dialog";
import { ViewStreamIcon, AccountCircleIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import { getNotes } from '../services/noteServices'
import { userLogOut, uploadProfile } from '../services/userServices'
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
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
      labelValue: [],
      fileData: "",
      filePath: "",
      fileUri: ""
    }
  }
  componentDidMount() {
    this.getNotes();
  }
  getNotes = () => {
    getNotes().then(res => {
      this.setState({
        notes: res.data.data.data
      });
    });
  };
  handleProfile = () => {
    const options = {
      title: "Select Avatar",
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = {
          uri: response.uri
        };
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
        uploadProfile(source).then(res => {
          this.setState({
            resImage: res
          });
        })
          .catch(err => {
          });
      }
    });
  }

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
    this.props.navigation.navigate('search')
  }
  handleGridView() {
    this.setState({
      listOpen: !this.state.listOpen
    });
  }
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
  handleSignOut = () => {
    userLogOut().then({
    });
    this.props.navigation.navigate("login");
    this.setState({ dialogVisible: false });
  };
  static navigationOptions = {
    drawerLabel: "Notes",
    drawerIcon: <BulbIcon name="bulb" size={20} />

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
                  this.props.navigation.navigate('edit', {
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
                    <Text>{key.reminder}</Text>
                    <Text>{key.labelValue}</Text>
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
                this.props.navigation.navigate("edit", {
                  display: key,
                  key: key.id
                })}>
              <Card containerStyle={{
                backgroundColor: key.color,
                borderRadius: 10
              }}>
                <Text> {key.title}</Text>
                <Text> {key.description}</Text>
                <Text> {key.reminder}</Text>
                <Text>{key.labelValue}</Text>
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
              <View containerStyle={{ left: 10 }}>
                <Text style={styles.fundootext}>
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
            <View style={styles.searchicon}>
              <View style={styles.search}>
                <TouchableOpacity onPress={() => { this.handleSearch() }}>
                  <Image source={require("../assets/searchicon.png")}>
                  </Image>
                </TouchableOpacity>
              </View>
              <View style={styles.grid}>
                {!this.state.listOpen ? (
                  <TouchableOpacity >
                    <ViewStreamIcon
                      name="view-stream"
                      size={30} onPress={() => this.handleGridView()} />
                  </TouchableOpacity>
                ) : (
                    <TouchableOpacity>
                      <GridIcon
                        name="grid"
                        size={30} onPress={() => this.handleGridView()} />
                    </TouchableOpacity>
                  )}
              </View>
              <View >
                <View>
                  <TouchableOpacity>
                    <AccountCircleIcon
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
                        <AccountCircleIcon
                          name="account-circle"
                          size={40}
                          rounded
                          source={this.state.fileData}
                          activeOpacity={0.7}
                          onPress={this.handleProfile}
                        />
                      </View>
                      <View>
                        <Text>
                          Inturitejaswini
                          </Text>
                        <Text>chowdarytejaswini2gmail.com</Text>
                      </View>
                    </View>
                    <View>
                      <Dialog.Button label="Manage Your Google Account"></Dialog.Button>
                    </View>
                    <Divider />
                    <View>
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

        <Card style={styles.input4}>
          <View style={styles.input5}>
            <View >
              <CheckSquare name="checksquareo" size={20} >
              </CheckSquare>
            </View>
            <View >
              <BrushIcon name="brush" size={20}>
              </BrushIcon>
            </View>
            <View >
              <KeyboardVoice name="keyboard-voice" size={20}>
              </KeyboardVoice>
            </View>
            <View >
              <ImageIcon name="image" size={20}>
              </ImageIcon>
            </View>
            <View>
              <TouchableOpacity  >
                <PlusCircleIcon
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

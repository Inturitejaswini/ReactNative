/******************************************************************************
 *  Execution       :   1. default node         cmd> node dashBoard.jsx 
 *                      2. if nodemon installed cmd> nodemodule dashBoard.jsx
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
import { View, Text, TouchableOpacity ,ProgressBarAndroid} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/Entypo";
import Icon0 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/MaterialIcons";
import Icon7 from "react-native-vector-icons/Entypo";
import { Image } from 'react-native'
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { getNotes } from '../services/noteServices'
// import Drawer from '../components/drawerComponent'
import GetNoteComponent from "../components/getNoteComponent";
export class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      openDrawer: false,
      open: false,
      notes: [],
      reminder: [],

    }
  }
  componentDidMount = () => {
    this.getAllNotes();
  }
  getAllNotes = () => {
    getNotes()
      .then(res => {
        this.setState({
          notes: res.data.data.data
        })
        console.log("getNote data ", this.state.notes)

      })
    this.setState({
      open: false
    })
  }
  openDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer })
  }
  handleNote = () => {
    this.props.navigation.navigate("notes");
  };

  handleGridView() {
    // console.log("listview response", listOpen);
    this.setState({
      listOpen: !this.state.listOpen
    });
    console.log("listView response", this.state.listOpen);
  }

  render() {
    // let noteDetails = this.state.notes.map(key => {
    //   let notes = key.data();
    //    {
    //     return (
    //       <View >
    //         <TouchableOpacity>
    //           <Card >
    //             <Text > {notes.title}</Text>
    //             <Text> {notes.description}</Text>
    //             <Text >{notes.reminder}</Text>
    //           </Card>
    //         </TouchableOpacity>
    //       </View>
    //     );
    //   }
    // });
    return (
      <View>
        <Appbar style={styles.top}>
          <View style={styles.menuitem}>
            <TouchableOpacity
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={require("../assets/menuicon.png")}>
              </Image>
            </TouchableOpacity>
          </View>
          <View >
            <Image source={require("../assets/keepicon.png")} style={styles.keepicon}></Image>
          </View>
          <View>
            <Text style={styles.fundooText}>FundooNote</Text>
          </View>
          <View style={styles.searchicon}>
            <Image source={require("../assets/searchicon.png")}></Image>
          </View>
          <View style={styles.grid}>
            {!this.state.listOpen ? (
              <TouchableOpacity >
                <Icon1
                  name="view-stream"
                  size={30}
                  onPress={() => {
                    this.handleGridView();
                  }}
                />
              </TouchableOpacity>
            ) : (
                <TouchableOpacity >
                  <Icon
                    name="grid"
                    size={30}
                    onPress={() => {
                      this.handleGridView();
                    }}
                  />
                </TouchableOpacity>
              )}
          </View>
          <View>
            <Icon3 name="account-circle"
              size={40}
              style={styles.accounticon}></Icon3>
          </View>
        </Appbar>
        <GetNoteComponent ></GetNoteComponent>
        {/* {noteDetails.length > 0 ? (
            <View>
              <View>{noteDetails}</View>
            </View>
          ) : (
            <ProgressBarAndroid
              color="gray"
              progress={0.9}
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center"
              }}
            />
          )} */}
        <View>
          <Appbar style={styles.input4}>
            <View style={styles.checkicon}>
              <Icon4 name="checksquareo" size={20}>
              </Icon4>
            </View>
            <View style={styles.brushicon}>
              <Icon5 name="brush" size={20}>
              </Icon5>
            </View>
            <View style={styles.voiceicon}>
              <Icon6 name="keyboard-voice" size={20}>
              </Icon6>
            </View>
            <View style={styles.imageicon}>
              <Icon7 name="image" size={20}>
              </Icon7>
            </View>
          </Appbar>
        </View>
        <TouchableOpacity style={styles.plusIcon} onPress={() => this.handleNote()}>
          <Icon0
            style={styles.Icon}
            name="pluscircleo"
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


export default DashBoard

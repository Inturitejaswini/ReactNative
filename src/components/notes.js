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
import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../Styles';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {
  RBSheet,
  RBSheet1,
  RBSheet2,
  RBSheet3,
} from 'react-native-raw-bottom-sheet';
import PlusIconSquare from 'react-native-vector-icons/Feather';
import ReminderComponent from './remainder';
import CrossIcon from 'react-native-vector-icons/Entypo';
import {
  DeletIcon,
  ShareAltIcon,
  PlusIcon,
  PushPinIcon,
  LabelIcon,
} from 'react-native-vector-icons/AntDesign';
import {
  AccountIcon,
  ClockIcon,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import MoreIcon from 'react-native-vector-icons/Feather';
import {Divider, IconButton, Chip} from 'react-native-paper';
import ArchiveIcon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {
  getNotes,
  getAllLabels,
  deleteNotes,
  pinNotes,
  UnpinNotes,
  updateColor,
  createLabels,
  noteCollaborator,
  createNotes,
} from '../services/noteServices';
let CheckValue = [];
const colors = [
  {name: 'blue', hexcode: ' #39a78e'},
  {name: 'violet', hexcode: '#7DCEA0'},
  {name: 'blue', hexcode: '#76D7C4'},
  {name: 'orange', hexcode: '#5499C7'},
  {name: 'beige', hexcode: '#79d4e7'},
  {name: 'golden', hexcode: '#EC7063'},
  {name: 'lightorange', hexcode: '#E59866'},
  {name: 'skyblue', hexcode: '#d3a625'},
  {name: 'green', hexcode: '#F7DC6F'},
  {name: 'darkseagreen', hexcode: '#BB8FCE'},
  {name: 'blue', hexcode: '#D2B4DE'},
  {name: 'gray', hexcode: '#ABB2B9'},
  {name: 'salmon', hexcode: '#98AFC7'},
  {name: 'mistyRose', hexcode: '#74a775'},
];
export class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      title: '',
      description: '',
      reminderDate: '',
      isDeleted: false,
      isArchived: false,
      isPined: false,
      key: '',
      colors: false,
      labelValue: '',
      selectedLabels: '',
      labelData: [],
      label: false,
      value: [],
      searchedMail: '',
      users: [],
      checkBox: [],
      checked: false,
    };
    this.reminderData = this.reminderData.bind(this);
  }
  componentDidMount() {
    this.getNotes();
    this.getLabels();
  }
  getNotes = () => {
    getNotes().then((res) => {
      this.setState({
        notes: res.data.data.data,
      });
    });
  };
  getLabels() {
    getAllLabels().then((res) => {
      this.setState({
        labelData: res.data.data.details,
      });
    });
  }
  reminderData = (value) => {
    this.setState({
      reminderDate: value,
    });
  };
  handleColor = (color) => {
    this.setState({
      color: color,
    });
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      color: this.state.color,
    };
    updateColor(data);
  };
  handlePin = () => {
    this.setState({
      isPined: true,
    });
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isPined: this.state.isPined,
    };
    pinNotes(data);
  };
  handleUnPin = () => {
    this.setState({
      isPined: false,
    });
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isPined: this.state.isPined,
    };
    UnpinNotes(data);
  };
  handleDelete = () => {
    this.setState({isDeleted: true});
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isDeleted: this.state.isDeleted,
    };
    deleteNotes(data);
  };
  handleArchiveNote = () => {
    this.setState({isArchived: true});
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isArchived: this.state.isArchived,
    };
    archiveNotes(data);
    this.props.navigation.navigate('dashboard');
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
      label: this.state.label,
    };
    createNotes(data);
    this.props.navigation.navigate('dashboard');
  };
  handleCrossicon() {
    this.RBSheet.close();
    this.RBSheet2.close();
    let data = {
      selectedMail: this.state.selectedEmail,
      noteIdList: [this.props.navigation.state.params.key],
    };
    noteCollaborator(data).then((res) => {
      this.setState({
        Value: res,
      });
    });
  }
  handleSave = (mail) => {
    this.setState({
      selectedEmail: mail,
    });
  };
  handleLabelDone = () => {
    this.setState({label: true});
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      label: this.state.label,
    };
    createLabels(data);
  };
  handleSelection = (labelName) => {
    this.setState({
      selectedLabels: labelName,
    });
  };
  handleLabelArrow = (labelValue) => {
    this.RBSheet3.close();
    this.RBSheet.close();
    this.setState({
      labelValue: labelValue,
    });
  };
  render() {
    let labelDetails = [];
    labelDetails = this.state.labelData.map((labelkey) => {
      CheckValue[labelkey.id] = false;
      return (
        <View style={styles.labels}>
          <CheckBox
            style={styles.labelcheckbox}
            title={labelkey.label}
            checked={this.state.checkBox[labelkey.id]}
            onPress={() =>
              this.handleSelection(
                labelkey.label,
                labelkey.id,
                this.state.checkBox[labelkey.id],
              )
            }></CheckBox>
        </View>
      );
    });
    return (
      <View style={{backgroundColor: this.state.color}}>
        <ScrollView>
          <View>
            <TouchableOpacity onPress={() => this.handleNote()}>
              <Image
                source={require('../assets/goback.png')}
                style={styles.gobackicon}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <View>
              <TouchableOpacity>
                {!this.state.isPined ? (
                  <PushPinIcon
                    onPress={() => this.handlePin()}
                    name="pushpino"
                    size={25}
                  />
                ) : (
                  <PushPinIcon
                    onPress={() => this.handleUnPin()}
                    name="pushpin"
                    size={25}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.icons1}>
              <ReminderComponent
                reminderProps={this.reminderData}></ReminderComponent>
            </View>
            <View style={styles.icons2}>
              <ArchiveIcon
                name="md-archive"
                onPress={() => this.handleArchiveNote()}
                style={styles.archiveicon}
                size={22}></ArchiveIcon>
            </View>
          </View>
          <View style={styles.textinput}>
            <View>
              <TextInput
                placeholder={'Title'}
                onChangeText={(title) => this.setState({title})}
                value={this.state.text}></TextInput>
            </View>
            <View>
              <TextInput
                placeholder={'Note'}
                onChangeText={(description) => this.setState({description})}
                value={this.state.text}></TextInput>
            </View>
            {this.state.reminderDate.length > 1 && (
              <TouchableOpacity>
                <Chip style={styles.chip}>
                  <ClockIcon name="clock-outline" size={15} color="black" />
                  {this.state.reminderDate}
                </Chip>
              </TouchableOpacity>
            )}
            <Text style={styles.labelValue}>{this.state.labelValue}</Text>
          </View>
          <View style={styles.rbsheet1}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.RBSheet1.open();
                }}>
                <PlusIcon name="plussquareo" size={20}></PlusIcon>
                <RBSheet1
                  ref={(ref) => {
                    this.RBSheet1 = ref;
                  }}
                  height={300}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  }}></RBSheet1>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.RBSheet.open();
                }}>
                <MoreIcon name="more-vertical" size={20}></MoreIcon>
                <RBSheet
                  ref={(ref) => {
                    this.RBSheet = ref;
                  }}
                  height={200}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  }}>
                  <View style={styles.deleteicons}>
                    <View style={styles.delete1}>
                      <TouchableOpacity onPress={() => this.handleDelete()}>
                        <DeletIcon name="delete" size={20} />
                        <Text style={styles.deleteText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.send}>
                      <ShareAltIcon name="sharealt" size={22} />
                      <Text style={styles.send}>send</Text>
                    </View>
                    <View style={styles.collaboratorIcon}>
                      <TouchableOpacity
                        onPress={() => {
                          this.RBSheet2.open();
                        }}>
                        <ShareAltIcon name="addusergroup" size={25} />
                        <Text style={styles.collaboratortext}>
                          collaborator
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.labelIcon}>
                      <TouchableOpacity
                        onPress={() => {
                          this.RBSheet3.open();
                        }}>
                        <LabelIcon name="label-outline" size={25} />
                        <Text style={styles.labels}>Labels</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <FlatList
                        data={colors}
                        horizontal={true}
                        renderItem={({item}) => (
                          <View>
                            <IconButton
                              style={{backgroundColor: item.hexcode}}
                              value={item.hexcode}
                              size={60}
                              onPress={() => this.handleColor(item.hexcode)}
                            />
                          </View>
                        )}
                      />
                    </View>
                  </View>
                </RBSheet>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.RBSheet2.open();
              }}>
              <RBSheet2
                ref={(ref) => {
                  this.RBSheet2 = ref;
                }}
                height={620}
                duration={250}
                customStyles={{
                  container: {
                    flexDirection: 'column',
                  },
                }}>
                <View style={styles.collaboratorcontainer}>
                  <TouchableOpacity>
                    <CrossIcon
                      name="cross"
                      size={35}
                      onPress={() => this.handleCrossicon()}
                    />
                  </TouchableOpacity>
                  <Text style={styles.collaboratortext}>Collaborators</Text>
                  <Text
                    style={styles.savebtn}
                    onPress={() => this.handleSave()}>
                    Save
                  </Text>
                </View>
                <Divider type="horizontal" style={styles.height}></Divider>
                <View style={styles.accounticon}>
                  <AccountIcon name="account-circle" size={45} color="gray" />
                  <Text style={styles.mailtext}>
                    chowdarytejaswini2@gmail.com
                  </Text>
                </View>
                <View style={styles.accountcircle}>
                  <AccountIcon
                    name="account-circle-outline"
                    size={45}
                    color="gray"
                  />
                  <TextInput
                    style={styles.Textinput}
                    placeholder="enter the mail to share..."
                    value={this.state.searchValue}
                    onChangeText={this.handleSearchValue}
                  />
                </View>
              </RBSheet2>
            </TouchableOpacity>
          </View>

          <View>
            <RBSheet3
              ref={(ref) => {
                this.RBSheet3 = ref;
              }}
              height={620}
              duration={250}
              customStyles={{
                container: {
                  flexDirection: 'column',
                },
              }}>
              <View style={styles.selectedLabels}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.handleLabelArrow(this.state.selectedLabels)
                    }>
                    <Icon1 name="arrow-left" size={25} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TextInput
                    style={styles.labeltext2}
                    placeholder="Enter label name"
                    value={this.state.labelName}
                    onChangeText={(labelName) => this.setState({labelName})}
                  />
                </View>
              </View>
              <Divider style={styles.divider}></Divider>
              <View>
                <TouchableOpacity
                  onPress={this.handleLabelDone}
                  style={styles.done}>
                  <View>
                    <PlusIconSquare name="plus" size={23} color="#5499C7" />
                  </View>
                  <View style={styles.labelText}>
                    <Text style={styles.createLabel1}>
                      Create :" {this.state.labelName} "
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <ScrollView>{labelDetails}</ScrollView>
            </RBSheet3>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Notes;

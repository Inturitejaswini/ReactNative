import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../Styles';
import {
  ArrowLeftIcon,
  BellPlusIcon,
  LabelIcon,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, Card} from 'react-native-paper';
import {getNotes} from '../services/noteServices';
import ArchiveIcon from 'react-native-vector-icons/Ionicons';
export class SearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      listOpen: false,
      open: false,
      notes: [],
      reminder: [],
      dialogVisible: false,
      visible: false,
      searchOpen: false,
    };
  }
  componentDidMount() {
    this.getNotes();
  }
  getNotes = () => {
    getNotes().then((res) => {
      this.setState({
        notes: res,
      });
    });
  };
  handleSearchArrow = () => {
    this.setState({
      searchOpen: false,
    });
    this.props.navigation.navigate('dashboard');
  };
  handleSearchValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };
  render() {
    return (
      <View>
        <View style={styles.searchView}>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.handleSearchArrow();
              }}>
              <ArrowLeftIcon name="arrow-left" size={25} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={styles.searchInput}
              placeholder="search your notes...."
              onChangeText={this.handleSearchValue}
            />
          </View>
        </View>
        <Divider type="horizontal" style={styles.height}></Divider>
        <View style={styles.typetext}>
          <Text>Types</Text>
        </View>
        <View style={styles.cards}>
          <View>
            <TouchableOpacity>
              <Card
                style={styles.searchcard}
                onPress={() => this.props.navigation.navigate('getReminder')}>
                <BellPlusIcon
                  name="bell-plus-outline"
                  size={20}
                  style={styles.bell}
                />
                <Text style={styles.bellText}>Reminders</Text>
              </Card>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Card
                style={styles.listcard}
                onPress={() =>
                  this.props.navigation.navigate('archiveComponent')
                }>
                <ArchiveIcon
                  name="md-archive"
                  size={20}
                  style={styles.checklist}
                />
                <Text style={styles.checklisttext}>Archive</Text>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.labeltext}>
          <Text>Labels</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Card style={styles.labelcard}>
              <LabelIcon
                name="label-outline"
                size={20}
                style={styles.labelicon}
              />
              <Text style={styles.labeltext1}>Labels</Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SearchComponent;

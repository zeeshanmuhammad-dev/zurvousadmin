import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const AdminMoreOptions = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AdminManageGyms')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Manage Gyms</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AdminManageUsers')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Manage Users</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AdminAddInfluencers')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Add Influencers</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AdminAddPartener')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Add Partener</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AddTutorial')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Upload Tutorials</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AddProduct')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Upload Product</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        onPress={() => navigation.navigate('AddFaq')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Edit FAQ</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>

      <View style={Styles.space} />

      <TouchableHighlight
        style={Styles.listItem}
        underlayColor={'#ebebebff'}
        onPress={() => navigation.navigate('Signin')}>
        <View style={Styles.listItemInnerContentView}>
          <Text style={Styles.textStyle}>Log Out</Text>
          <Icon name={'chevron-right'} type={'entypo'} size={23} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    paddingVertical: 10,
  },
  listItem: {
    backgroundColor: '#f6f6f6ff',
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
  },
  listItemInnerContentView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: '#676767ff',
    fontWeight: '400',
  },
  space: {
    height: 10,
  },
});

export default AdminMoreOptions;

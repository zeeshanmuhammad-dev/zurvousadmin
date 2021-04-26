import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { Icon, Divider, SearchBar } from 'react-native-elements';
import Menu, { MenuItem } from 'react-native-material-menu';

import Colors from '../../../colors';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';

export default function UserFeedBackRow({ index, item, callBack }) {
  const deleteItem = (i) => {
    callBack(item.id,index)
  }

  return (
    <View style={Styles.contentView}>
      <View style={Styles.spacer} />
      <View style={Styles.listItem}>
        <View style={Styles.listItemHeader}>
        <TouchableOpacity onPress={()=>{deleteItem()}}>
        <Text style={Styles.listItemHeaderRightText}>DELETE</Text>

        </TouchableOpacity>
        </View>
        <View style={Styles.listContentView}>
          <View style={Styles.listContent}>
            <View style={Styles.imageView} />
            <View style={Styles.listContentTextView}>
              <Text style={Styles.listContentText1}>{item.full_name}</Text>
              <View style={Styles.listContentLocationTextView}>
                <Icon
                  name={'location'}
                  type={'evilicon'}
                  size={24}
                  style={Styles.icon}
                />
                <Text style={Styles.listContentText2}>{item.street_address}</Text>
              </View>
            </View>
          </View>
          <Text style={Styles.feedback}>{item.feedback}</Text>
          <Text style={Styles.feedbackDescription}>{item.improvement}</Text>
        </View>
      </View>
      <View style={Styles.spacer} />
    </View>
  );
}

const Styles = StyleSheet.create({
  headerLeftView: {
    paddingLeft: 8,
  },
  headerLeftText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    paddingRight: 8,
  },
  headerRightIconView: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 50,
  },
  headerRightIcon: {
    borderRadius: 50,
  },
  container: {
    width: '100%',
    //flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
  listItem: {
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: Colors.VIEWS_BACKGROUND,
  },
  listItemHeader: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  listItemHeaderLeftText: {
    fontSize: 22,
  },
  listItemHeaderRightText: {
    fontSize: 15,
  },
  listContentView: {
    paddingVertical: 0,
  },
  listContent: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
    //alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageView: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.TOUCHABLE_BUTTON,
  },
  listContentTextView: {
    paddingLeft: 14,
    flex: 2,
  },
  listContentTextView2: {
    flex: 2,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContentMenuIcon: {
    alignSelf: 'flex-start',
  },
  listContentText1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContentText2: {
    fontSize: 18,
  },
  listContentText3: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.6)',
  },
  listContentdateText: {
    marginTop: 5,
  },
  icon: {
    fontWeight: 'bold',
  },
  listContentLocationTextView: {
    flexDirection: 'row',
    marginTop: 0,
    alignItems: 'center',
  },
  spacer: {
    height: 10,
  },
  feedback: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feedbackDescription: {
    fontSize: 20,
    marginVertical: 20,
    marginBottom: 40,
  },
});


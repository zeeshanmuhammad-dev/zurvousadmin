import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { Icon, Divider, SearchBar } from 'react-native-elements';

export default function RowGymEditProfile({ item,title,cost }) {
  return (
    <View style={Styles.rowStyle}>
      {/* <Image source={item.image} style={{ height: 90, width: 90, borderRadius: 45 }} /> */}
      <View style={{ height: 90, width: 90, borderRadius: 45 , backgroundColor: 'gray' }} />
      <View style={{ flex: 1, marginLeft: 5 }}>

        <Text style={{}}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-around' }}>
          <View style={Styles.viewStyleMid}>
            <Icon
              name={'map-marker-outline'}
              type={'material-community'}
              size={25}
              color={'black'}
            />
            <Text style={{}}>{item.location}</Text>
          </View>
          <View style={Styles.viewStyleMid}>
            <Text style={{}}>{item.loc}</Text>
            <Text style={{}}>{item.loc}</Text>
          </View>
          <View style={Styles.viewStyleMid}>
            <Text style={{}}>{item.loc}</Text>
            <Text style={{}}>{item.loc}</Text>

          </View>


        </View>
        <Text>${cost}/day</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  rowStyle: {
    marginTop: 10,
    padding: 10,
    flex: 1, flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 1,
  },
  socialIndicationTest: {
    fontWeight: 'bold', fontSize: 20
  },
  viewStyleMid: {
    flexDirection: 'row', alignItems: 'center'
  },
  iconView: {
    paddingHorizontal: 6,
    borderRadius: 50,
  },

});

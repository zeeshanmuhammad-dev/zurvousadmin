import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet,FlatList } from 'react-native';
import { Icon, Divider, SearchBar } from 'react-native-elements';
import Menu, { MenuItem } from 'react-native-material-menu';

import Colors from '../../../colors';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';

export default function ManageGymRows({ navigation,index, item, callBackRemove,callBackAprove }) {
    const menuRef = useRef([]);
    const hideMenu =(item,i) => {
        navigation.navigate('GymDetailScreen',{id:item.id});
        menuRef.current[i].hide();
    };




    const deleteItem=(i)=>{
        callBackRemove(item.id,index+1)
        menuRef.current[i].hide();
         

  
        }

        const aproveItem=(i)=>{
            callBackAprove(item.id,index+1)
            menuRef.current[i].hide();
            }

    const showMenu = i => {
        menuRef.current[i].show();
    };

    return (
        <View style={Styles.contentView}>

            <View style={Styles.contentMainView}>
                <View style={Styles.contentMainViewImageView}>
                    <Image
                        source={require('../../../assets/images/Slice_3.png')}
                        style={Styles.imageStyle}
                    />
                </View>
                <View style={Styles.contentMainViewTextView}>
                    <View style={Styles.titleView}>
    <Text style={Styles.nameText}>{item.full_name}</Text>
                        <Menu
                            ref={r => (menuRef.current[index] = r)}
                            button={
                                <Icon
                                    name={'dots-vertical'}
                                    type={'material-community'}
                                    size={25}
                                    style={Styles.listItemMenuIcon}
                                    onPress={() => showMenu(index)}
                                />
                            }
                            style={Styles.menuStyle}>
                            <MenuItem
                                onPress={() => hideMenu(item,index)}
                                style={Styles.menuItemStyle}
                                textStyle={Styles.menuTextStyle}>
                                View Profile
                                </MenuItem>
                            <Divider style={Styles.menuDividerStyle} />
                            <MenuItem
                                onPress={() => aproveItem(index)}
                                style={Styles.menuItemStyle}
                                textStyle={Styles.menuTextStyle}>
                                Approve on listing
                                </MenuItem>
                            <Divider style={Styles.menuDividerStyle} />
                            <MenuItem
                                onPress={() => deleteItem(index)}
                                style={Styles.menuItemStyle}
                                textStyle={Styles.menuTextStyle}>
                                Delete
                                </MenuItem>
                        </Menu>
                    </View>
                    <View style={Styles.listItemLocationTextView}>
                        <View style={Styles.listItemLocationTextViewInner}>
                            <Icon
                                name={'location'}
                                type={'evilicon'}
                                size={18}
                                style={Styles.icon}
                            />
                            <Text style={Styles.listItemText2}>{item.full_name1}</Text>
                        </View>
                        <Text>{'    '}</Text>
                      
                        <Text>{'    '}</Text>
                        <View style={Styles.listItemLocationTextViewInner}>
                            <Icon
                                name={'dot-single'}
                                type={'entypo'}
                                size={18}
                                style={Styles.icon}
                            />
                            <Text style={Styles.listItemText2}>{item.datetime}</Text>
                        </View>
                    </View>
                        <Text style={Styles.listItemText3}>Cost:{item.cost_per_day}/day </Text>
                </View>
            </View>
            <View style={Styles.spacer2} />

            <Divider style={Styles.divider} />

            <View style={Styles.spacer1} />
        </View>


    );
}


const Styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: '100%',
        backgroundColor: Colors.BACKGROUND_1,
        //paddingHorizontal: 15,
        paddingVertical: 15,
    },
    listItem: {
        backgroundColor: 'yellow',
        margin: 16
        //alignItems: 'center',
    },
    contentView: {
        marginTop: 5,
        flex: 1,
        paddingHorizontal: 15,
        //paddingVertical: 20,
        backgroundColor: '#ffffffff',
        borderRadius: 5,
        //elevation: 5,
    },
    statusView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    idText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    statusText: {
        fontSize: 12,
    },
    contentMainView: {
        flexDirection: 'row',
        //marginTop: 4,
        alignItems: 'center',
        //marginBottom: 30,
    },
    contentMainViewImageView: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderWidth: 0.3,
        borderRadius: 75 / 2,
    },
    imageStyle: {
        width: '60%',
        height: '60%',
    },
    contentMainViewTextView: {
        flex: 2,
        paddingLeft: 15,
    },
    nameText: {
        fontSize: 16.5,
        fontWeight: 'bold',
    },
    costText: {
        fontSize: 14,
        //fontWeight: 'bold',
    },
    viewDetailText: {
        fontSize: 15.5,
        marginTop: 15,
        //fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    contentViewList: {
        paddingVertical: 15,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle1: {
        fontSize: 17,
    },
    textStyle2: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    spacer: {
        height: 30,
    },
    spacer1: {
        height: 20,
    },
    spacer2: {
        height: 10,
    },
    divider2: {
        height: 2,
        backgroundColor: '#dadadaff',
    },
    listItemLocationTextView: {
        flexDirection: 'row',
        marginTop: 3,
        marginLeft: -5,
        alignItems: 'center',
    },
    listItemLocationTextViewInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemText2: {
        fontSize: 12,
    },
    listItemText3: {
        fontSize: 12,
        marginTop: 3,
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuStyle: {
        //width: 200,
        //height: 200,
        //marginRight: 15,
        //paddingVertical: 20,
        borderRadius: 10,
    },
    menuDividerStyle: { marginHorizontal: 14 },
    searchbarContainer: {
        backgroundColor: Colors.BACKGROUND_1,
        borderWidth: 0,
        borderTopColor: Colors.BACKGROUND_1,
        padding: 0,
        borderTopWidth: 0,
        borderBottomColor: Colors.BACKGROUND_1,
    },
    searchbarView: {
        paddingHorizontal: 15,
    },
    searchbarInput: {
        backgroundColor: Colors.TEXT_INPUT,
        elevation: 4,
    },
    searchbarTextInput: {
        fontSize: 14,
    },
});


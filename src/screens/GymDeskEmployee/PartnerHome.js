import React, {useEffect, useRef,useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Colors from '../../../colors';
import { Icon, Divider, SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {TouchableNativeFeedback, FlatList} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import {StackedBarChart} from 'react-native-chart-kit';
import { UserArray } from '../../../assets/Constant/Feed';
import { TabView, SceneMap } from 'react-native-tab-view';
import CheckOut from './CheckOut';
import CheckIn from './CheckIn';
import {connect} from 'react-redux';
const initialLayout = { width: Dimensions.get('window').width };
const FirstRoute = () => (
  <CheckIn/>
);
 
const SecondRoute = () => (
  <CheckOut/>
);

const PartnerHome = ({navigation,info}) => {
  const [searchValue, setSearchValue] = useState('');

  const {width} = Dimensions.get('screen');
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Check out ' },
    { key: 'second', title: 'Check In' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: Colors.HEADER_BACKGROUND,
      },
      headerShown: true,
      headerLeft: () => (
        <View style={Styles.headerLeftView}>
         <View style={{height:40,width:40,borderRadius:20,backgroundColor:"#c4c4c4",}}/> 
          <Text style={Styles.headerLeftText}>{info.name}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={Styles.headerRightView}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('AdminNotifications')}
            style={Styles.headerRightIconView}>
            <Icon
              name={'notifications-none'}
              type={'material'}
              size={25}
              color={'#ffffffff'}
              style={Styles.headerRightIcon}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('AdminInbox')}
            style={Styles.headerRightIconView}>
            <Icon
              name={'envelope'}
              type={'evilicon'}
              size={25}
              color={'#ffffffff'}
              style={Styles.headerRightIcon}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()}>
            <Icon
              name={'dots-vertical'}
              type={'material-community'}
              size={25}
              color={'#ffffffff'}
              style={Styles.headerRightIcon}
            />
          </TouchableNativeFeedback>
        </View>
      ),
    });
  });

  return (
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
  /> 
 );
};

const Styles = StyleSheet.create({
  headerLeftView: {
    paddingLeft: 8,
    flexDirection:'row',
    alignItems:"center"
  },
  headerLeftText: {
    fontSize: 20,
    marginLeft:5,
    fontWeight: 'bold',
    color: '#ffffffff',
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
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.COLOR_WHITE,
  },
  listView: {
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: Colors.VIEWS_BACKGROUND,
  },
  listViewHeader: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  listViewHeaderLeftText: {
    fontSize: 22,
  },
  listViewHeaderRightText: {
    fontSize: 16,
  },
  listItemView: {
    paddingVertical: 20,
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.TOUCHABLE_BUTTON,
  },
  listItemTextView: {
    paddingLeft: 10,
    flex: 2,
  },
  listItemTextView2: {
    flex: 2,
  },
  searchbarView: {
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemMenuIcon: {
    alignSelf: 'flex-start',
  },
  listItemText1: {
    fontSize: 18,
  },
  listItemText2: {
    fontSize: 16,
  },
  listItemText3: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.6)',
  },
  listItemdateText: {
    marginTop: 5,
  },
  icon: {
    fontWeight: 'bold',
  },
  listItemLocationTextView: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },
  spacer: {
    height: 10,
  },
  menuStyle: {
    width: 200,
    height: 200,
    //marginRight: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  menuItemStyle: {
    paddingVertical: 10,
  },
  menuTextStyle: {
    fontSize: 18,
  },
  menuDividerStyle: {marginHorizontal: 14},
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  fcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchbarContainer: {
    backgroundColor: Colors.BACKGROUND_1,
    borderWidth: 0,
    borderTopColor: Colors.BACKGROUND_1,
    padding: 0,
    borderTopWidth: 0,
    borderBottomColor: Colors.BACKGROUND_1,
  },
  searchbarView: {
  },
  searchbarInput: {
    backgroundColor: Colors.TEXT_INPUT,
    elevation: 4,
  },
  searchbarTextInput: {
    fontSize: 14,
  },
});
const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}

export default connect(mapStateToProps)(PartnerHome);

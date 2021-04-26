import React, {useEffect, useRef,useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Colors from '../../../../colors';
import { Icon, Divider, SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {TouchableNativeFeedback, FlatList} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import {StackedBarChart} from 'react-native-chart-kit';
import { TabView, SceneMap } from 'react-native-tab-view';
import AddNewPartener from '../Tabs/AddNew';
import AddNew from '../Tabs/AddNew';
import ExistanceUser from '../Tabs/ExistanceUser';

 
const initialLayout = { width: Dimensions.get('window').width };

 
const FirstRoute = () => (
  // <View style={[{flex:1}, { backgroundColor: '#ff4081' }]} />
  <AddNew/>
);
 
const SecondRoute = () => (
  <ExistanceUser/>
);
const AddEmployee = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');

  const {width} = Dimensions.get('screen');
  
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Add  New' },
    { key: 'second', title: 'Add Existance' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
 
  useEffect(() => {
    navigation.setOptions({
      title: 'Add Gym Desk Employee',
      headerStyle: {
        backgroundColor: Colors.HEADER_BACKGROUND,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: 'bold',
      },
      headerShown: true,
    });
  });



  return (
    // <ScrollView
       <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
     
    // </ScrollView> 
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

export default AddEmployee;

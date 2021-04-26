import React, {useRef, useState,useEffect}  from 'react';
import {View, Text,FlatList,TouchableOpacity} from 'react-native';
import Colors from '../../../colors';
import {Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
const BugsReport = ({navigation}) => {

  const [bugs, setBugs] = useState('');
  const [isVisible, setisVisible] = useState(false)

  

  useEffect(() => {
    setisVisible(true)
    getBugs()
  },[])

  function getBugs(){
    getRequest(ApiRoute.bugs).then(res => {
      console.log('bug report ',res)
      if(res.data!==undefined&&res.data!==[]){
        console.log('consoleee')
        setBugs(res.data)
      }
      console.log('consoleee',bugs)
      setisVisible(false)
    })
  }

 const callBackBug=((postion,index) => {
  setisVisible(true)
    getRequest(ApiRoute.deleteBug+postion).then(res=>{
      alert(res.message)
      bugs.splice(index,1)
      getBugs()
      setisVisible(false)
    })
  });
  
  const deleteBug=(item,index)=>{
    callBackBug(item.id,index+1)
    }


  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={Styles.spacer} />
      <Loader isVisible={isVisible} />
      {bugs==''||bugs==undefined?<Text style={{fontSize:20,color:'red'}}> No  Bug Reported </Text>:null
      }
      <FlatList
        data={bugs}
        renderItem={({ item, index }) => 
<View>
        <View style={Styles.listItem}>
          < TouchableOpacity style = {
            Styles.listItemHeader
          }
          onPress = {
            () => deleteBug(item, index)
          } >
            <Text style={Styles.listItemHeaderRightText}>DELETE</Text>
          </TouchableOpacity>
          <View style={Styles.listContentView}>
            <View style={Styles.listContent}>
              <View style={Styles.imageView} />
              <View style={Styles.listContentTextView}>
                <Text style={Styles.listContentText1}>{item.full_name}</Text>
                <View style={Styles.listContentEmailTextView}>
                  <Icon
                    name={'envelope'}
                    type={'evilicon'}
                    size={24}
                    style={Styles.icon}
                  />
                  <Text style={Styles.listContentText2}>{item.email}</Text>
                </View>
              </View>
            </View>
            <Text style={Styles.feedbackDescription}>
             {
               item.report_message
             }
            </Text>
            <ScrollView contentContainerStyle={Styles.listMediaView} horizontal>
              <View style={Styles.mediaItem} />
              <View style={Styles.mediaItem}>
                <Icon
                  name={'playcircleo'}
                  type={'antdesign'}
                  size={30}
                  style={Styles.icon}
                />
              </View>
              <View style={Styles.mediaItem}>
                <Icon
                  name={'playcircleo'}
                  type={'antdesign'}
                  size={30}
                  style={Styles.icon}
                />
              </View>
            </ScrollView>
          </View>
        </View>

      <View style={Styles.spacer} />
      </View>
      }
      keyExtractor={item => item.id}
    />
      {/* <View style={Styles.listItem}>
        <View style={Styles.listItemHeader}>
          <Text style={Styles.listItemHeaderRightText}>DELETE</Text>
        </View>
        <View style={Styles.listContentView}>
          <View style={Styles.listContent}>
            <View style={Styles.imageView} />
            <View style={Styles.listContentTextView}>
              <Text style={Styles.listContentText1}>John Doe</Text>
              <View style={Styles.listContentEmailTextView}>
                <Icon
                  name={'envelope'}
                  type={'evilicon'}
                  size={24}
                  style={Styles.icon}
                />
                <Text style={Styles.listContentText2}>User@gmail.com</Text>
              </View>
            </View>
          </View>
          <Text style={Styles.feedbackDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Text>
          <ScrollView contentContainerStyle={Styles.listMediaView} horizontal>
            <View style={Styles.mediaItem} />
            <View style={Styles.mediaItem}>
              <Icon
                name={'playcircleo'}
                type={'antdesign'}
                size={30}
                style={Styles.icon}
              />
            </View>
            <View style={Styles.mediaItem}>
              <Icon
                name={'playcircleo'}
                type={'antdesign'}
                size={30}
                style={Styles.icon}
              />
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={Styles.spacer} />

      <View style={Styles.listItem}>
        <View style={Styles.listItemHeader}>
          <Text style={Styles.listItemHeaderRightText}>DELETE</Text>
        </View>
        <View style={Styles.listContentView}>
          <View style={Styles.listContent}>
            <View style={Styles.imageView} />
            <View style={Styles.listContentTextView}>
              <Text style={Styles.listContentText1}>John Doe</Text>
              <View style={Styles.listContentEmailTextView}>
                <Icon
                  name={'envelope'}
                  type={'evilicon'}
                  size={24}
                  style={Styles.icon}
                />
                <Text style={Styles.listContentText2}>User@gmail.com</Text>
              </View>
            </View>
          </View>
          <Text style={Styles.feedbackDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Text>
          <ScrollView contentContainerStyle={Styles.listMediaView} horizontal>
            <View style={Styles.mediaItem} />
            <View style={Styles.mediaItem}>
              <Icon
                name={'playcircleo'}
                type={'antdesign'}
                size={30}
                style={Styles.icon}
              />
            </View>
            <View style={Styles.mediaItem}>
              <Icon
                name={'playcircleo'}
                type={'antdesign'}
                size={30}
                style={Styles.icon}
              />
            </View>
          </ScrollView>
        </View>
      </View> */}
    </ScrollView>
  );
};

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
    flex: 1,
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
    marginLeft: 5,
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
  listContentEmailTextView: {
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
  listMediaView: {
    flexDirection: 'row',
    paddingBottom: 30,
  },
  mediaItem: {
    width: 110,
    height: 110,
    marginRight: 10,
    backgroundColor: '#dbdbdbff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BugsReport;

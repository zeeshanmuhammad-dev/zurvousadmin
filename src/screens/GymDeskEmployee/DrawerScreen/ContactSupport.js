import React,{useState} from 'react';
import {View, Text,TextInput} from 'react-native';
import {Icon,Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import Colors from '../../../../colors';
import { PostReq } from '../../../../Api/Requester';
import ApiRoute from '../../../../Api/Apiroute';
import Loader from '../../../components/Common/Loader';
import {connect} from 'react-redux';
const theme = {
  Button: {
    containerStyle: {
      marginTop: 30,
    }
  }
}
const ContactSupport = ({navigation,info}) => {
  const [value, onChangeText] = React.useState('');
  const [message, setmessage] = React.useState('');
  const [loading,setLoading] =useState(false);
  const [subject, setSubject] = useState('');

  function contactGym(){
    setLoading(true)
    let dataJson = {
      customer_id:info.id,
      subject,
      user_message:message,
    }
    console.log("ssssrres",dataJson)
    PostReq(JSON.stringify(dataJson),ApiRoute.contactGym).then(res => {
      //console.log("sss",res)
        alert(JSON.stringify(res.message))
      setLoading(false)
    })
  }

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
        <Loader isVisible={loading} /> 
      <View style={{margin:16}}>
      <Text>Subject</Text>
      <TextInput
      style={{ height: 60, borderColor: 'gray' ,backgroundColor:'#c4c4c455'}}
      onChangeText={text => setSubject(text)}
      value={subject}
    />
   <Text>Your Message</Text>
      <TextInput
      placeholder={'message...'}
      style={{ height: 80, borderColor: 'gray' ,backgroundColor:'#c4c4c455'}}
      onChangeText={text => setmessage(text)}
      value={message}
    />
       <Text style={{marginTop:10}}>Character limit 100</Text>
       <Button  onPress={() => contactGym()}  buttonStyle={{marginTop:30,borderRadius:10}} title="Send to Gym manager" />

      </View>
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
const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}

export default connect(mapStateToProps)(ContactSupport);;

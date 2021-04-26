import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet,Platform,ScrollView, Image} from 'react-native';
import Colors from '../../../colors';
import {CheckBox, Icon} from 'react-native-elements';
import {
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import {
  PostReq
} from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker';


const AddProduct = ({navigation}) => {
  const [userType, setUserType] = useState(''),
  [productType, setProductType] = useState('Suppliments'),
  [productName, setproductName] = useState(''),
  [productDiscription, setproductDiscription] = useState(''),
  [productPrice, setproductPrice] = useState('$'),
  [productImage, setproductImage] = useState([]),
  [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading,setLoading] = useState(false);

  function selectImage(){
    if(productImage.length>=4){
      alert('The Max Length For Images is 4')

    }else{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(response => {
      console.log("hellooo",response);
      setIsImageUploaded(true)
      const temp=[...productImage]
      temp.push(response)
      setproductImage(temp)
      console.log(temp,'temp')
      console.log(productImage)
      ReturnImageView()
    });
  }
  };

  


  function addProduct(){
    if (productType == "") {
      alert("Select Product Type")
    } else if (productName == "") {
      alert("Enter Product name")
    } else if (productDiscription == "") {
      alert("Enter Product Discription")
    } else if (productPrice == "") {
      alert("Enter Product Price")
    } else {
      setLoading(true)
      let data=new FormData()
      data.append('product_type',productType)
      data.append('product_name',productName)
      data.append('product_description',productDiscription)
      data.append('product_price',parseInt(productPrice.substring(1)))
      data.append('product_image', productImage);
 

      PostReq(data, ApiRoute.addProduct,true).then(responseJson => {
        console.log("dscxc",responseJson)
        alert('Success Product Added')
        navigation.navigate('AdminHomePage');
        setLoading(false)
      }).catch((err) => {
        alert(JSON.stringify(err.message))
        console.log("dscxcerr",err)
        setLoading(false)
      })
    }
  }
  React.useEffect(()=>{
    console.log('return image hook called')
    ReturnImageView();
  },[productImage])
const ReturnImageView=()=>{
  console.log('return image called')
  return(
  <View style={{justifyContent:'center',alignItems:'center',marginVertical:5,flexDirection:'row'}}>
             {
              productImage.map((value,index)=>{
               console.log('image varr val ',value)
               return(
               <Image style={{width:89,height:89,marginVertical:10}} resizeMode='contain' source={{uri:value.path}}/>
               )
             })
             
             }
          </View>
  )
}
  return (
      <ScrollView contentContainerStyle={Styles.innerContainer}>
      <Loader isVisible={isLoading} />  
      
        <View style={Styles.inputFields}>
          <View style={Styles.inputView2}>
            <Text style={Styles.inputLabelText}>Product Type</Text>
            <View style={{height: 15}} />
            <RadioButton.Group
              onValueChange={value => setUserType(value)}
              value={userType}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={Styles.radioView}>
                  <RadioButton value="Suppliments" 
                  status={ productType === 'Suppliments' ? 'checked' : 'unchecked' }
                  onPress={() => setProductType('Suppliments')}/>
                  <Text>Suppliments</Text>
                </View>
                <View style={{width: 15}} />
                <View style={Styles.radioView}>
                  <RadioButton value="Accessories" 
                  status={ productType === 'Accessories' ? 'checked' : 'unchecked' }
                  onPress={() => setProductType('Accessories')}/>
                  <Text>Fitness Accessories</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Product Name</Text>
            <TextInput
              placeholder={''}
              textContentType={'name'}
              keyboardType={'default'}
              style={Styles.inputStyle}
              onChangeText={text => setproductName(text)}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Product Description</Text>
            <TextInput
              placeholder={''}
              keyboardType={'default'}
              style={Styles.inputStyle}
              onChangeText={text => setproductDiscription(text)}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Price</Text>
            <TextInput
              placeholder={''}
              keyboardType={'numeric'}
              style={Styles.inputStyle}
             onChangeText={text => setproductPrice(text)}
             value={productPrice}
            />
          </View>
         <ReturnImageView />
          <View style={Styles.inputView}>
            <TouchableNativeFeedback
              style={Styles.deviceuploadBtn}
              onPress={() => selectImage()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={'device-mobile'} type={'octicon'} size={20} />
                <Text>{'    '}</Text>
                <Text style={Styles.deviceuploadBtnText}>
                  Upload images from your device
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() => addProduct()}>
            <Text style={Styles.loginText}>ADD PRODUCT</Text>
          </TouchableNativeFeedback>
        </View>
        <Loader isVisible={isLoading} />  
      </ScrollView>
   
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },
  innerContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    //justifyContent: 'flex-end',
    alignItems: 'center',
    //flex: 1,
  },
  inputFields: {
    width: '100%',
    //bottom: 30,
  },
  inputView: {
    marginBottom: 20,
  },
  inputView2: {
    marginBottom: 20,
  },
  inputLabelText: {
    fontSize: 16,
  },
  inputStyle: {
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    marginTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#dce9f6ff',
    //fontWeight: 'bold',
  },
  checkBoxContainerStyle: {
    backgroundColor: '#f2f7fcff',
    elevation: 0,
    borderWidth: 0,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: -10,
    marginBottom: 30,
  },
  checkBoxTextStyle: {
    fontSize: 19,
    fontWeight: 'normal',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //textAlignVertical: 'center',
  },
  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#ffffffff',
  },
  resetPasswordView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPasswordTouchable: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 50,
  },
  resetPasswordText: {
    fontSize: 17,
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceuploadBtn: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dee2e7ff',
  },
  deviceuploadBtnText: {
    fontSize: 17,
  },
});

export default AddProduct;

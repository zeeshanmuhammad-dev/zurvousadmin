import AsyncStorage from '@react-native-community/async-storage';

export function isEmptyOrSpaces(str) {
    let EMPTY_REGEX = /^\s+$/;
    const Empty = EMPTY_REGEX.test(str);
  
    return str === null || str.match(/^ *$/) !== null || Empty;
  }
  
  export const countWords = str => {
    return str.trim().split(/\s+/).length;
  };
export function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  return false
}
  

  export async function getAsyncData(key) {
    return AsyncStorage.getItem(key)
  }
  
  export async function setAsyncData(key,data) {
    AsyncStorage.setItem(key,data);
  }
  export const logout = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys,(err)=>{
        return err
      });

      // const res = await fetch(`${BASE_URL}/logout`, {
      //   method: 'post',
      //   headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      // });
      return "successfully log out"
  
      // return res.json();
    } catch (error) {
      return error;
    }
  };
  
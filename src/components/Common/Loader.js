import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet,Dimensions} from 'react-native';

const Loader = ({isVisible}) => {
  return (
    isVisible && (
      <View style={styles.loadingView}>
         <View style={styles.loadingBackgroundView}>
          <ActivityIndicator
            size="large"
            color={styles.loaderColor.color}
           style={styles.commonMargin}
          />
          <Text style={{top:25}}>Loading...</Text>
      </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  loadingView: {
    // width: '100%',
    // height: '100%',
    // position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    // zIndex: 111,
    flex: 1,
   /// alignItems: 'center', 
  //  justifyContent: 'flex-start',
    zIndex:9999,
    position:'absolute',
    top:'50%',
    left:'40%'
  },
  loadingBackgroundView: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 10,
  },
  loaderColor: {
    color: '#58cd5a',
  },
  commonMargin: {
    position:'absolute',
    
  
    },
});

export default Loader;

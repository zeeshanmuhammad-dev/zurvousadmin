import React from 'react';
import { View, TextInput, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Colors from '../../../colors';

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import Loader from '../../components/Common/Loader'

const ContactSupport=(props)=>{
    return(
        <View>
            <Text> User Stats</Text>
        </View>
    )
}
export default ContactSupport;
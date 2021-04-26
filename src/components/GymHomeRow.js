import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon, Divider, SearchBar } from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

//import Colors from '../../../colors';
export default function GymHomeRow({ item,callBackLike,callBackShare,callBackFollow ,callBackComment}) {

    const [commentEnable,setCommentEnable]= useState(false)
    const [commentMsg,setCommentMsg]= useState('')
    const [followB,setFollowB]= useState(false)
    const [likeB,setLikeB]= useState(false)
    const likePost=(id)=>{
        setLikeB(true)
        callBackLike(id)
    }
  
    const sharePost=(id,post)=>{
        callBackShare(id,post)
    }
    const followPost=(follow_id)=>{
        setFollowB(true)
        callBackFollow(follow_id)
    }

    const commentPost=(id,comment)=>{
        setCommentEnable(false)
        callBackComment(id,comment)
    }
          
    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: "#c4c4c470" }} />
                    <View style={{ flexDirection: 'column' ,marginLeft:10}}>
                        <Text>{item.username}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Icon
                            name={'map-marker-outline'}
                            type={'material-community'}
                            size={25}
                            color={'black'}
                        />
                        <Text>{item.location}</Text>
                        </View>
                    
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button title={!followB?'Follow':'Unfollow'} onPress={()=>followPost(item.follow_id)}/>
                    <TouchableNativeFeedback style={{ marginLeft: 5 }} onPress={() => alert("soon")}>
                        <Icon
                            name={'dots-vertical'}
                            type={'material-community'}
                            size={25}
                            color={'black'}
                        />
                    </TouchableNativeFeedback>
                </View>

            </View>
            <Image
                style={{ width: "100%",height: 200,marginTop: 5 }}
                source={{uri:item.postimage}}
            />
            <View style={{ marginTop: 5, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => likePost(item.id)}>
                    <View style={{ flexDirection: 'row' }}>
                       {likeB?<Icon
                            name={'ios-thumbs-up'}
                            type={'ionicon'}
                            size={20}
                            color={'black'}
                            
                        />:<Icon
                            name={'like'}
                            type={'evilicon'}
                            size={25}
                            color={'black'}
                            
                        />
                        }
                        <Text>likes</Text>
                    </View>
                    <Text>{item.totalLikes}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#c3c4c4',
                    }}
                />
                <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => setCommentEnable(commentEnable?false:true)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name={'comment'}
                            type={'evilicon'}
                            size={25}
                            color={'black'}
                        />
                        <Text>comments</Text>
                    </View>
                    <Text>{item.totalComments}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#c3c4c4',
                    }}
                />
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name={'share-google'}
                            type={'evilicon'}
                            size={25}
                            color={'black'}
                            onPress={() =>sharePost(item.id,item.post_title)}
                        />
                        <Text>share</Text>
                    </View>
                    <Text>{item.totalShares}</Text>
                </View>
                


            </View>
          {commentEnable?<TextInput
      placeholder={'comment...'}
      style={[styles.inputStyle, styles.detailInput]}
              textContentType={'none'}
      multiline={true}
      onSubmitEditing={()=>commentPost(item.id,commentMsg)}
      onChangeText={text => setCommentMsg(text)}
      value={commentMsg}
    />:null}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 32,
    },
    inputStyle: {
        backgroundColor: 'white',
        height: 60,
        marginTop: 5,
        paddingLeft: 15,
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 19,
        elevation: 5,
      },
      detailInput: {
        height: 100,
        textAlignVertical: 'top',
      },
});
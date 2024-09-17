import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name: 'Golam Mahmud',
            status: 'Good Student',
            imageUrl:'../Images/My pic.png',
        },
        {
            uid:2,
            name: 'Golam Mahmud',
            status: 'Good Student',
            imageUrl:'../Images/My pic.png',
        },
        {
            uid:3,
            name: 'Golam Mahmud',
            status: 'Good Student',
            imageUrl:'../Images/My pic.png',
        },
        {
            uid:4,
            name: 'Golam Mahmud',
            status: 'Good Student',
            imageUrl:'../Images/My pic.png',
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
          {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCard}>

                     <Image
                        source={
                            require('../Images/My pic.png')
                        }
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>

                </View>
          ))}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'#F5F5F5'
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    },
    userStatus:{
        fontSize:12,
    },
})
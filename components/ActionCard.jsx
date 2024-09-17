import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openWebsite =  (websiteLink) => {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedcard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12..
            </Text>
        </View>
        <Image source={require('../Images/Node js.png')}
               style={styles.cardImage} />
        <View style={styles.bodyContainer}>
            <Text style={styles.describtionText} numberOfLines={3}>
                Just like every year, Javascript brings in new features. 
                This year javascript is bringing 4 new features, which are
                almost in production rollout. I won't be wasting much more 
                time and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View  style={styles.footerContainer}>
             <TouchableOpacity
              onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
             >
                 <Text style={styles.socialLinks}>Read more...</Text>
             </TouchableOpacity>
             <TouchableOpacity
              onPress={()=>openWebsite('https://www.linkedin.com/feed/')}
             >
                 <Text style={styles.socialLinks}>Follow Me👍</Text>
             </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'#F5F5F5',
    },
    card:{
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:6,
      borderRadius:6
    },
    elevatedcard:{
      backgroundColor:'#FF7F3E',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      },
      shadowColor:'#333',
      shadowOpacity:0.4,
    },
    describtionText:{
       color:'#fff'
    },
    headingContainer:{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       height:35
    },
    headerText:{
       color:'black',
       fontSize:16,
       fontWeight:'600'
    },
    cardImage:{
        height:180,
        width:350,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    bodyContainer:{
      padding:10,
    },
    footerContainer:{
       padding:8,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-evenly',
    },
    socialLinks:{
       fontSize:16,
       color:'#000000',
       backgroundColor:'#EEF7FF',
       paddingHorizontal:20,
       paddingVertical:6,
       borderRadius:6
    },

    
})
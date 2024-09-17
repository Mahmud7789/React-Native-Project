import { Image, StyleSheet, Text, View,} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../Images/Tajmahal.png')}
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLable}>Agra, Uttar Pradesh, India</Text>
            <Text style={styles.cardDescription}>The Taj Mahal is a palace in the city of 
              Agra, Uttar Pradesh, India.The Taj Mahal was commissioned by Shah Jahan in
              1631, to be built in the memory of his wife Mumtaz </Text>
            <Text style={styles.cardFooter}>Coordinates: 27°10′30″N 78°2′31″E</Text>
        </View>
      </View>
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
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:6,
    },
    cardElevated:{
        backgroundColor:'#F1F1F1',
        elevation:3,
        shadowOffset:{
          width:1,
          height:1
        }
    },
    cardImage:{
        height:180,
        width:350,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,

    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLable:{
         color:'#000000',
         fontSize:14,
         marginBottom:6,
    },
    cardDescription:{
         color:'#242B2E',
         fontSize:12,
         marginBottom:9,
         marginTop:6,
         flexShrink:1
    },
    cardFooter:{
         color:'#000000',
         marginBottom:1
    },

})
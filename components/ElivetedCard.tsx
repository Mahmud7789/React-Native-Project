import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElivetedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElivetedCard</Text>
      <ScrollView   horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
        <Text>Tap ❄️</Text> 
        </View>
        <View style={[styles.card,styles.cardElevated]}>
        <Text>me</Text> 
        </View>
        <View style={[styles.card,styles.cardElevated]}>
        <Text>to</Text> 
        </View>
        <View style={[styles.card,styles.cardElevated]}>
        <Text>scroll</Text> 
        </View>
        <View style={[styles.card,styles.cardElevated]}>
        <Text>more....</Text> 
        </View>  
        <View style={[styles.card,styles.cardElevated]}>
        <Text>Fun 🤩</Text> 
        </View>
      </ScrollView>
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
    container:{
        padding:8,

    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        margin:6,
        borderRadius:4,
    },
    cardElevated:{
        backgroundColor:'#59D5E0',
        elevation:4,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:2

    }
})
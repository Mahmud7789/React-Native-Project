import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardFour]}>
                <Text>Pink</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginTop:30,
        color:'#F5F5F5',
        
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:6,
    },
    cardOne:{

        backgroundColor:'red',

    },
    cardTwo:{

        backgroundColor:'green',

    },
    cardThree:{

        backgroundColor:'steelblue',

    },
    cardFour:{

        backgroundColor:'hotpink',

    },
});
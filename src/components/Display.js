import React from "react";
import {StyleSheet,Text,View} from "react-native"

const styles = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'#rgba(0,0,0,0.6)',
        alignItems:'flex-end',
        justifyContent:"flex-end",
    },
    displayValue:{
        fontSize:30,
        color:'#FFF'
    }
})

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>{props.value} {props.value2}{props.value3}{props.value4}{props.value5}</Text>
    </View>
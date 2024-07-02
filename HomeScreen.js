import { View, Text , Image, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
    <View style = {styles.title}>
    <Text>Our Story</Text>
    <View>
        <Image source = {require ('./assets/Listview.png')}/>
    </View>
    <View>
        <Image source = {require ('./assets/Filter.png')}/>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
title :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
}
})

export default HomeScreen
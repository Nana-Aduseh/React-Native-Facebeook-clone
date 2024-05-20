import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Watch = () => {
  Icon.loadFont()
  return (
    <View>
    
    <View style={styles.header}>
    <TouchableOpacity>
    <Icon style={styles.home} name="home" size={30}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.homeselected} name="users" size={30} /></TouchableOpacity>
    <View style={styles.line1}>
    <TouchableOpacity>
    <Icon style={styles.home} name="tv" size={25} color="#1877F2"/></TouchableOpacity>
    </View>
  <TouchableOpacity>
    <Icon style={styles.home} name="shopping-cart" size={25}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="bell-o" size={23}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="navicon" size={26}/></TouchableOpacity>
    
    </View>
    <View style={styles.view}>
      <Text style={{ fontSize: 30 }}>Watch</Text>
      <Icon style={styles.under} name="camera" size={25}/>
      <Icon  name="search" size={25}/>
      </View>
      <View style={styles.view}>
      <Text style={{marginLeft:20}}>For you</Text>
      <Text style={{marginLeft:30}}>Live</Text>
      <Text style={{marginLeft:30}}>Gaming</Text>
      <Text style={{marginLeft:30}}>Reels</Text>
      <Text style={{marginLeft:30}}>Following</Text>
      </View>
    </View>
  )
}

export default Watch

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderBottomColor: 'gray',
   },
   line1:{
    
    borderBottomWidth: 2, 
    borderBottomColor:'#1877F2',
   },
   homeselected:{
    marginTop:32,
    marginLeft:10,
    marginRight:5,
    width:40,
    height:25, 
    marginBottom:5,
   },
   home:{
    marginTop:32,
    marginLeft:25,
    marginRight:5,
    width:40,
    height:25, 
    marginBottom:5,
   },
   under:{
    marginLeft:230,
    marginRight:20,
   
   },
   view:{
    marginTop:5,
    flexDirection:'row'
   },
})
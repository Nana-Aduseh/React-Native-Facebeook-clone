import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const NotificationScreen = () => {
  return (
    <View>
    <ScrollView>
     <View style={styles.header}>
    <TouchableOpacity>
    <Icon style={styles.home} name="home" size={30}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="users" size={30} /></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="tv" size={25} /></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="shopping-cart" size={25}/></TouchableOpacity>
    <View style={styles.line1}>
    <TouchableOpacity>
    <Icon style={styles.homeselected} name="bell-o" size={26} color="#1877F2"/></TouchableOpacity> 
    </View>
    <TouchableOpacity>
    <Icon style={styles.home} name="navicon" size={23}/></TouchableOpacity>
    
    </View>
    <View style={styles.afterheader}>
      <Text style={styles.menu}>Notifications</Text>
      <TouchableOpacity>
    <Icon style={styles.search} name="search" size={20}/></TouchableOpacity>
      </View>
      <Text style={{marginLeft:5, marginTop:15}}>New</Text>
    </ScrollView>
    </View>
    
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderBottomColor: 'gray',
   },
   line2:{
    marginTop:18,
    marginLeft:12,
    marginBottom:15,
    marginRight:12,
    borderBottomWidth: 0.5, 
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
   afterheader:{
    marginTop:5,
    flexDirection:'row',
   },
   menu:{
    fontSize:25,
    marginLeft:5,
    marginRight:190,
   },
   search:{
    marginTop:4,
    backgroundColor:'#D3D3D3',
    borderRadius:50,
    padding:5,
    marginLeft:10,
   },
   afterheader:{
    marginTop:5,
    flexDirection:'row',
   }
})
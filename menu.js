import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const MenuScreen = ({navigation}) => {
  Icon.loadFont()
  return (
    <View>
    <ScrollView>
     <View style={styles.header}>
    <TouchableOpacity>
    <Icon style={styles.home} name="home" size={30}  onPress={()=>navigation.navigate("Home")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="users" size={30} onPress={()=>navigation.navigate("Friend")} /></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="tv" size={25}  onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="shopping-cart" size={25}  onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="bell-o" size={23}  onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <View style={styles.line1}>
    <TouchableOpacity>
    <Icon style={styles.homeselected} name="navicon" size={26} color="#1877F2"/></TouchableOpacity> 
    </View>
    </View>
  <View style={styles.afterheader}>
      <Text style={styles.menu}>Menu</Text>
      <TouchableOpacity>
    <Icon style={styles.search} name="cog" size={20}/></TouchableOpacity>
      <TouchableOpacity>
    <Icon style={styles.search} name="search" size={20}/></TouchableOpacity>
      </View>
    
        <Image style={styles.profile} source={require('./assets/profilee.jpg')}></Image>
        <View style={styles.name}>
        <Text  style={{fontSize:18}}>Nana Dents</Text>
        <Text style={{color:'gray',  textDecorationLine: 'underline',}}>See your profile</Text>
      </View>
      <View style={styles.line2}></View>
      <View style={styles.wholebox}>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Text style={{marginTop:50,marginLeft:-160,marginRight:120}}>Feeds</Text>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Icon style={{marginTop:25,marginLeft:-160}} name="search-plus" color="#1877F2" size={20}/>
      <Text style={{marginTop:50,marginLeft:-20}}>Find friends</Text>
      </View>
      <View style={styles.wholebox}>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Text style={{marginTop:50,marginLeft:-160,marginRight:113}}>Groups</Text>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Icon style={{marginTop:25,marginLeft:-160}} name="shopping-cart" color="#1877F2" size={20}/>
      <Text style={{marginTop:50,marginLeft:-20}}>Marketplace</Text>
      </View>
      <View style={styles.wholebox}>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Text style={{marginTop:50,marginLeft:-160,marginRight:125}}>Video</Text>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Icon style={{marginTop:25,marginLeft:-160}} name="clock-o" color="#1877F2" size={20}/>
      <Text style={{marginTop:50,marginLeft:-20}}>Memories</Text>
      </View>
      <View style={styles.wholebox}>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Text style={{marginTop:50,marginLeft:-160,marginRight:122}}>Saved</Text>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Icon style={{marginTop:25,marginLeft:-160}} name="flag" color="#1877F2" size={20}/>
      <Text style={{marginTop:50,marginLeft:-20}}>Pages</Text>
      </View>
      <View style={styles.wholebox}>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Text style={{marginTop:50,marginLeft:-160,marginRight:127}}>Reels</Text>
      <TouchableOpacity><View style={styles.box}></View></TouchableOpacity>
      <Icon style={{marginTop:25,marginLeft:-160}} name="calendar" color="#1877F2" size={20}/>
      <Text style={{marginTop:50,marginLeft:-20}}>Events</Text>
      </View>

      <TouchableOpacity style={styles.seeButton} >
        <Text style={{textAlign:'center'}} >See more</Text>
      </TouchableOpacity>
      <View style={styles.line2}></View>
      <TouchableOpacity style={styles.under}>
      <Icon style={{marginLeft:10,marginRight:10}}name="info-circle" size={20}/>
         <Text>Help & Support</Text>
         <Icon style={styles.down} name="chevron-down" size={15}/>
      </TouchableOpacity>
      <View style={styles.line2}></View>
      <TouchableOpacity  style={styles.under}>
    <Icon style={{marginLeft:10,marginRight:10}} name="cog" size={20}/>
        <Text>Settings & Privacy</Text>
        <Icon style={styles.down2} name="chevron-down" size={15}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.seeButton} >
        <Text style={{textAlign:'center'}} >Log out</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
    
  )
}

export default MenuScreen

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
   profile:{
    marginTop:5,
    width:45,
    height:45,
    borderRadius:50,
    marginLeft:3,
   },
   menu:{
    fontSize:25,
    marginLeft:5,
    marginRight:230,
   },
   search:{
    marginTop:4,
    backgroundColor:'#D3D3D3',
    borderRadius:50,
    padding:5,
    marginLeft:10,
   },
   name:{
    marginLeft:55,
    marginTop:-45,
   },
   down:{
    marginLeft:218,
   },
   down2:{
    marginLeft:200,
   },
   under:{
    flexDirection:'row'
   },
   wholebox:{
    flexDirection:'row',
   },
   box:{
    marginLeft:10,
    marginTop:10,
    height:70,
    width:180,
    backgroundColor: 'white',
    borderRadius:10,
    borderWidth:1,
    borderColor:'gray',
   },
   seeButton:{
    marginTop:20,
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
})
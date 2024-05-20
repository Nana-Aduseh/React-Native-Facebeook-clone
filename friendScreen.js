import { ScrollView, StyleSheet, Text,Image,TouchableOpacity, View, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const FriendScreen = ({navigation}) => {
  Icon.loadFont()
  return (
    <View>


    <View style={styles.header}>
    <TouchableOpacity>
    <Icon style={styles.home} name="home" size={30}  onPress={()=>navigation.navigate("Home")}/></TouchableOpacity>
    <View style={styles.line1}><TouchableOpacity>
    <Icon style={styles.homeselected} name="users" size={30} color="#1877F2"/>
   </TouchableOpacity>
    </View>
    <TouchableOpacity>
    <Icon style={styles.home} name="tv" size={25} onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="shopping-cart" size={25}  onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="bell-o" size={23}  onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="navicon" size={26}  onPress={()=>navigation.navigate("Menu")}/></TouchableOpacity>
    </View>
    <View>
   <Text style={styles.friends}>Friends</Text>
   <View style={styles.underfriends}>
   <Text style={styles.friendreq}>  Friend requests  </Text>
   <Text style={styles.friendreq}>  Your friends  </Text></View>
    </View>
    <View style={styles.underfriends}>
      <Text style={styles.fr}>Friend Requests(3)</Text>
      <Text style={styles.seeall}>See all</Text>
    </View>
    <View style={styles.addfriend}>
      <Image style={styles.profile} 
      source={require('./assets/profilee.jpg')}></Image>
      <Text style={styles.name} >Klenam Korku</Text>
      <TouchableOpacity style={styles.confirm}>
        <Text style={styles.confirmText} >Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete}>
        <Text style={styles.deleteText} >Delete</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.addfriend}>
      <Image style={styles.profile} 
      source={require('./assets/profile.jpg')}></Image>
      <Text style={styles.name} >don Benzy</Text>
      <TouchableOpacity style={styles.confirm1}>
        <Text style={styles.confirmText} >Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete}>
        <Text style={styles.deleteText} >Delete</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.addfriend}>
      <Image style={styles.profile} 
      source={require('./assets/profile1.jpeg')}></Image>
      <Text style={styles.name} >Cornea</Text>
      <TouchableOpacity style={styles.confirm2}>
        <Text style={styles.confirmText} >Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete}>
        <Text style={styles.deleteText} >Delete</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default FriendScreen

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
   friends:{
    marginLeft:5,
    marginTop:5,
    fontSize:25,
   },
   friendreq:{
    padding:4,
    marginTop:5,
    marginLeft:10,
    backgroundColor:'#D3D3D3',
    borderRadius:30,
   },
   underfriends:{
    flexDirection:'row'
   },
   addfriend:{
    flexDirection:'row',
    marginTop:15,
   },
   profile:{
    marginLeft:7,
    width:60,
    height:60,
    borderRadius:50,
   },
   confirm:{
    marginLeft:-120,
    marginTop:25,
    backgroundColor: '#1877F2',
    padding: 6,
    borderRadius: 20,
    width: '17%',
    alignSelf: 'center',
  },
  confirm1:{
    marginLeft:-90,
    marginTop:25,
    backgroundColor: '#1877F2',
    padding: 6,
    borderRadius: 20,
    width: '17%',
    alignSelf: 'center',
  },
  confirm2:{
    marginLeft:-64,
    marginTop:25,
    backgroundColor: '#1877F2',
    padding: 6,
    borderRadius: 20,
    width: '17%',
    alignSelf: 'center',
  },
  confirmText:{
    color:'white',
  },
  delete:{
    marginTop:25,
    marginLeft:10,
    backgroundColor: '#D3D3D3',
    padding: 7,
    borderRadius: 20,
    width: '14%',
    alignSelf: 'center',
  },
  name:{
    marginLeft:20,
    marginBottom:25,
    fontSize:18,
  },
  fr:{
    marginTop:5,
    marginLeft:10,
    fontSize:20,
  },
  seeall:{
    marginTop:5,
    marginLeft:150,
    fontSize:20,
    color:'blue',
    textDecorationLine: 'underline',
  }
})
import { StyleSheet, TextInput,Text,View,ScrollView ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  Icon.loadFont()
  return (
    <View>
    
  <View style={styles.view}>
    <Image style={styles.logo}
    source={require('./assets/wordicon.png')}>
    </Image>
    <Icon style={styles.plus} name="plus" size={25} />
    <Icon style={styles.search} name="search" size={20} />
    <Icon style={styles.messenger} name="envelope" size={25} />
    </View>
    <View style={styles.header}>
    <View style={styles.line1}><TouchableOpacity>
    <Icon style={styles.homeselected} name="home" size={30} color="#1877F2"/>
   </TouchableOpacity>

    </View>
    <TouchableOpacity>
    <Icon style={styles.home} name="users" size={30} onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="tv" size={25} onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="shopping-cart" size={25} onPress={()=>navigation.navigate("Friend")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="bell-o" size={23} onPress={()=>navigation.navigate("Notification")}/></TouchableOpacity>
    <TouchableOpacity>
    <Icon style={styles.home} name="navicon" size={26} onPress={()=>navigation.navigate("Menu")}/></TouchableOpacity>
    </View>
    <View style={styles.line}/>
    <ScrollView Vertical>
    <View style={styles.afterheader}>
      <Image style={styles.profile}
      source={require('./assets/profilee.jpg')}>
      </Image>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
      />
      <TouchableOpacity>
      <Icon style={styles.gallery} name="image" size={25} color='#32CD67'/></TouchableOpacity>
    </View>
    <View style={styles.story}>
    <ScrollView horizontal>
    <View>
    <Image style={styles.profilestory}
    source={require('./assets/profilee.jpg')}
    ></Image>
    <View style={styles.box}>
    <Text style={styles.create}>Create story</Text>
    </View>
   
    </View>
    <Icon style={styles.storyplus} name="plus" size={25} color="#1877F2"/>
    <Image style={styles.otherstory}
    source={require('./assets/story2.jpg')}></Image>
    <Image style={styles.storypro}
    source={require('./assets/profile.jpg')}></Image>
    <Text style={styles.storyname}>Nana Dents</Text>
    <Image style={styles.otherstory}
    source={require('./assets/pic2.jpg')}></Image>
     <Image style={styles.storypro}
    source={require('./assets/profile2.jpg')}></Image>
     <Text style={styles.storyname}>Bball Lovers</Text>
    <Image style={styles.otherstory}
    source={require('./assets/story3.jpg')}></Image>
     <Image style={styles.storypro}
    source={require('./assets/bavyy.jpg')}></Image>
     <Text style={styles.storyname}>Bavy store  </Text>
    <Image style={styles.otherstory}
    source={require('./assets/profile1.jpeg')}></Image>
     <Image style={styles.storypro}
    source={require('./assets/story1.jpg')}></Image>
     <Text style={styles.storyname}>Suii</Text>
    </ScrollView>
    </View>
    <View style={styles.post}>
      <View style={styles.story}></View>
      <View style={styles.postHeader}>
      <Image style={styles.postProfile}
    source={require('./assets/profile.jpg')}></Image>
    <Text style={styles.postName}>Nana Dents</Text>
    <Text style={styles.postunder}>Just Now . </Text>
    <Icon style={styles.globe} name="users" size={10}/>
    <Icon style={styles.menu} name="ellipsis-h" size={18}/>
    <Icon style={styles.exit} name="remove" size={15}/>
    </View>
    <View>
    <Text style={styles.caption}>Nature</Text>
   <Image style={styles.postPic} source={require('./assets/story2.jpg')}
   ></Image>
    <Text style={styles.number}>10 comments . 3 shares</Text>
    <View style={styles.line2}></View>
     <View style={styles.picUnder}>
     <Icon style={styles.men} name="thumbs-o-up" size={13}/>
    <Text style={styles.like}>Like</Text>
    <Icon style={styles.men1} name="comment" size={13}/>
    <Text style={styles.like}>Comment</Text>
    <Icon style={styles.men1} name="share" size={13}/>
    <Text style={styles.like}>Share</Text>
    </View>
    </View>
    <View style={styles.story}></View>
    </View>
    
    <View style={styles.post}>
      <View style={styles.story}></View>
      <View style={styles.postHeader}>
      <Image style={styles.postProfile}
    source={require('./assets/profile2.jpg')}></Image>
    <Text style={styles.postName}>Bball lovers</Text>
    <Text style={styles.postunder}>4 mins . </Text>
    <Icon style={styles.globe} name="globe" size={10}/>
    <Icon style={styles.menu} name="ellipsis-h" size={18}/>
    <Icon style={styles.exit} name="remove" size={15}/>
    </View>
    <View>
    <Text style={styles.caption}>Basketball</Text>
   <Image style={styles.postPic} source={require('./assets/pic2.jpg')}
   ></Image>
    <Text style={styles.number}>10 comments . 21 shares</Text>
    <View style={styles.line2}></View>
     <View style={styles.picUnder}>
     <Icon style={styles.men} name="thumbs-o-up" size={13}/>
    <Text style={styles.like}>Like</Text>
    <Icon style={styles.men1} name="comment" size={13}/>
    <Text style={styles.like}>Comment</Text>
    <Icon style={styles.men1} name="share" size={13}/>
    <Text style={styles.like}>Share</Text>
    </View>
    </View>
    <View style={styles.story}></View>
    </View>
    <View style={styles.post}>
      <View style={styles.story}></View>
      <View style={styles.postHeader}>
      <Image style={styles.postProfile}
    source={require('./assets/profile2.jpg')}></Image>
    <Text style={styles.postName}> Bavy</Text>
    <Text style={styles.postunder}>        Just Now . </Text>
    <Icon style={styles.globe} name="users" size={10}/>
    <Icon style={styles.menu} name="ellipsis-h" size={18}/>
    <Icon style={styles.exit} name="remove" size={15}/>
    </View>
    <View>
    <Text style={styles.caption}>Bavy's Collection</Text>
   <Image style={styles.postPic} source={require('./assets/yyy.jpg')}
   ></Image>
    <Text style={styles.number}>17 comments . 11 shares</Text>
    <View style={styles.line2}></View>
     <View style={styles.picUnder}>
     <Icon style={styles.men} name="thumbs-o-up" size={13}/>
    <Text style={styles.like}>Like</Text>
    <Icon style={styles.men1} name="comment" size={13}/>
    <Text style={styles.like}>Comment</Text>
    <Icon style={styles.men1} name="share" size={13}/>
    <Text style={styles.like}>Share</Text>
    </View>
    </View>
    <View style={styles.story}></View>
    </View>
    <View style={styles.post}>
      <View style={styles.story}></View>
      <View style={styles.postHeader}>
      <Image style={styles.postProfile}
    source={require('./assets/profile2.jpg')}></Image>
    <Text style={styles.postName}> Bavy</Text>
    <Text style={styles.postunder}>        Just Now . </Text>
    <Icon style={styles.globe} name="users" size={10}/>
    <Icon style={styles.menu} name="ellipsis-h" size={18}/>
    <Icon style={styles.exit} name="remove" size={15}/>
    </View>
    <View>
    <Text style={styles.caption}>Bavy Collection</Text>
   <Image style={styles.postPic} source={require('./assets/pic3.jpg')}
   ></Image>
    <Text style={styles.number}>17 comments . 11 shares</Text>
    <View style={styles.line2}></View>
     <View style={styles.picUnder}>
     <Icon style={styles.men} name="thumbs-o-up" size={13}/>
    <Text style={styles.like}>Like</Text>
    <Icon style={styles.men1} name="comment" size={13}/>
    <Text style={styles.like}>Comment</Text>
    <Icon style={styles.men1} name="share" size={13}/>
    <Text style={styles.like}>Share</Text>
    </View>
    </View>
    <View style={styles.story}></View>
    </View>
    </ScrollView>
  </View>
 
 
 
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  view:{
    flexDirection: 'row',
    marginTop:25,
    padding:10,
  },
  logo:{
    width:140,
    height:55,
  },
    plus:{ 
    marginTop:12,
   marginLeft:130,
    width:35,
    height:35,
    //backgroundColor:'gray',
    //borderRadius:50,
  },
  search:{ 
    marginTop:14,
   marginLeft:10,
    width:30,
    height:20,
    //backgroundColor:'gray',
    //borderRadius:90,
  },
  messenger:{ 
    marginTop:12,
    marginLeft:5,
    width:40,
    height:20,
    //backgroundColor:'gray',
    //borderRadius:20,
   },
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
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    width:40,
    height:25, 
    marginBottom:5,
   },
   storyplus:{
    marginTop:100,
    padding:4,
    height:30,
    borderRadius:50,
    backgroundColor:'#D3D3D3',
    marginLeft:-62,
    marginRight:35,
   },
   home:{
    marginTop:10,
    marginLeft:25,
    marginRight:5,
    width:40,
    height:25, 
    marginBottom:5,
   },
   profile:{
    width:40,
    height:35,
    borderRadius:50,
   },
   afterheader:{
    marginTop:9,
    flexDirection: 'row',
   },
   input: {
    marginLeft:10,
    padding:9,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    width: 290,
    height:35,
    fontSize: 16,
  },
  gallery:{
    marginTop:5,
    marginLeft:20,
    height:20,
    width:20,
  },
  story:{
    borderTopWidth:5,
    borderTopColor:'#D3D3D3',
    marginTop:5,
   flexDirection:'row'
  },
  profilestory:{
    marginLeft:10,
    marginTop:5,
    height:180,
    width:100,
    borderRadius:10,
    resizeMode: 'cover',
  },
  box:{
    marginLeft:10,
    marginTop:115,
    height:70,
    width:100,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius:10,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'gray',
   },
   storypro:{
    width:30,
    height:30,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#1877F2',
    marginTop:10,
    marginLeft:-97,
    marginRight:65,
   },
   storyname:{
    marginTop:160,
    marginLeft:-85,
    marginRight:15,
    color:'white',
  },
  otherstory:{
    marginLeft:10,
    marginTop:5,
    height:180,
    width:100,
    borderRadius:10,
    resizeMode: 'cover'
  },
  storyprofile: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  create:{
    marginLeft:'auto',
    marginRight:'auto',
    padding:2,
    marginTop:45,
  },
  plus1:{
width:30,
height:30,
  },
postProfile:{
  marginTop:5,
  width:40,
  height:35,
  borderRadius:50,
},
menu:{
  marginTop:5,
  marginLeft:210,
  width:20,
  height:15,
},
exit:{
  marginLeft:10,
  marginTop:5,
  width:20,
  height:15, 
},
postHeader:{
  flexDirection:'row',
},
postPic:{
  marginLeft:10,
  width:'95%',
  height:160,
  alignItems:'center',
},
postName:{
  marginLeft:6,
  marginTop:8,
  fontSize:15,
  
},
postunder:{
  marginLeft:-55,
  marginTop:25,
  fontSize:9,
},
globe:{
  marginTop:27,
  width:9,
  height:9,
},
caption:{
  marginLeft:15,
  marginTop:3,  
  padding:7,
},
post:{
  width:'100%',
  height:280,
},
picUnder:{
  flexDirection:'row',
},
men:{
  marginLeft:15,
  marginTop:4,
  
},
men1:{
  marginTop:4,
  marginLeft:90,
},
like:{
  marginLeft:5,
  fontSize:15,
},
line2:{
  borderBottomWidth:1,
  borderColor:'#D3D3D3',
},
number:{
  marginLeft:250,
  fontSize:12,
},

})
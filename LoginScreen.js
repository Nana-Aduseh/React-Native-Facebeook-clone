import { StyleSheet,TouchableOpacity, Text, View,Image ,TextInput} from 'react-native'
import React ,{useState}from 'react'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Image
      style={styles.logo}
      source={require('./assets/fblogo.png')}></Image>
      
         <TextInput
        style={styles.input}
        placeholder="Mobile number or email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
       onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.buttonText}  onPress={()=>navigation.navigate("Home")} >Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}  onPress={()=>navigation.navigate("Create")}>Create new account</Text>
      </TouchableOpacity>

     <Image
     style={styles.metalogo}
     source={require('./assets/meta.png')}></Image>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logo:{
    marginTop:'60%',
    height:30,
    width:30,
    padding:30,
    marginBottom:40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 9,
    width: '90%',
    height:45,
    marginBottom: 10,
    fontSize: 16,
  },
  loginButton:{
    backgroundColor: '#1877F2',
    padding: 10,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    
  },

  buttonText:{
    color:'white',
    fontSize:15,
    textAlign:'center',
  },
  
  forgotPassword:{
    marginTop:8,
    textAlign:'center',
    fontSize:15,
    textDecorationLine: 'underline',
  },

  createButton:{
    marginTop:200,
    padding: 10,
    borderWidth:1,
    borderColor:'#1877F2',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
  },

  createText:{
    color:'#1877F2',
    fontSize:15,
    textAlign:'center',
  },

  metalogo:{
    marginLeft: 'auto',
    marginRight: 'auto',
    height:30,
    width:95,
  },
});


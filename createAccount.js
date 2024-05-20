import { StyleSheet,TouchableOpacity, Text, View,Image ,TextInput} from 'react-native'
import React ,{useState}from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const CreateAccount = () => {
  Icon.loadFont()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
    <TouchableOpacity>
    <Icon style={styles.back} name="arrow-left" size={25}/>
    </TouchableOpacity>
   

       <Image
      style={styles.logo}
      source={require('./assets/fblogo.png')}></Image>
         <TextInput
        style={styles.input}
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile number or email"
        onChangeText={setEmail}
        value={email}
      />
         <TextInput
        style={styles.input}
        placeholder="Password"
       onChangeText={setPassword}
        value={password}
      />
         <TextInput
        style={styles.input}
        placeholder="Confirm Password"
       onChangeText={setPassword}
        value={password}
      />

        <TouchableOpacity style={styles.createButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountText}>Already have an account</Text>
      </TouchableOpacity>
      
      <Image
     style={styles.metalogo}
     source={require('./assets/meta.png')}></Image>
    </View>
     )
}

export default CreateAccount

const styles = StyleSheet.create({
  back:{
    marginTop:30,
    width: 30,
    height: 30,
    marginLeft:10,
  },
  logo:{
    marginTop:'35%',
    height:30,
    width:30,
    padding:30,
    marginBottom:40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText:{
    color:'white',
    fontSize:15,
    textAlign:'center',
  },
  input: {
    marginTop:5,
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
  createButton:{
    backgroundColor: '#1877F2',
    padding: 10,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
  },
  accountButton:{
    marginTop:130,
    borderWidth:1,
    borderColor: '#1877F2',
    padding: 10,
    borderRadius: 20,
    width: '90%',
    height:40,
    alignSelf: 'center',
  },
  accountText:{
    color:'#1877F2',
    fontSize:15,
    textAlign:'center',
  },
  metalogo:{
    marginTop:10,
    marginLeft: 'auto',
    marginRight: 'auto',
    height:30,
    width:95,
  }
})
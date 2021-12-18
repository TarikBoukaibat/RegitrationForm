import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
export default class LogIn extends React.Component {
  state = {
    Firstname: '',
    Lastname: '', 
    password: '', 
    email: '', 
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { Firstname,Lastname, password, email, phone_number } = this.state

    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
  handleClick(){
   let collection={}
   collection.firstname=this.state.Firstname
   collection.lastname=this.state.Lastname
   collection.email=this.state.email
   collection.password=this.state.password


    fetch("http://localhost:8080/user/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(collection)

  }).then(()=>{
    console.log("User added")
  })
}
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Firstname'
          autoCapitalize="none"
          placeholderTextColor='#696969'
          onChangeText={val => this.onChangeText('Firstname', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Lastname'
          autoCapitalize="none"
          placeholderTextColor='#696969'
          onChangeText={val => this.onChangeText('Lastname', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#696969'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#696969'
          palaceholderTextFont='verdana'
          onChangeText={val => this.onChangeText('password', val)}
        />
          <Button
          title='Sign Up'
          onPress={()=>this.handleClick()}
        />     
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#00CED1',
    margin: 10,
    padding: 8,
    color: 'black',
    fontFamily:'verdana',
    borderRadius: 14,
    fontSize: 16,
    fontWeight: '200',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `${email} + ${password}`);
  }
  handelPress=()=>{
    console.log('welcom');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Sign In'}
          style={styles.input}
          onPress={()=>handelPress()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
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
});
import React, { Component } from 'react';
import { View, Alert, AsyncStorage, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { register } from './actions/auth';
import { CardSection } from './common';

class RegisterForm extends Component {

    constructor(){
        super();
            this.state = {
                name: '',
                username: '',
                password: '',
            }
        }
    
  userSignup = () => {
    const { username, password, name } = this.state;
    if (username != '' || password != '' || name != '') {
      this.props.register({username, password, name});
    } else {
      alert('Sorry, name, username and password is required');
    }
  }

    render() {
        return (
            <View style={styles.constainerStyle}>
            <Text style={styles.textStyle}>Register Here</Text>
            <View>
                <FormLabel labelStyle={styles.labelStyles}>Name</FormLabel>
                <FormInput
                  inputStyle = {styles.formInputStyle}
                  placeholder="Name"
                  placeholderTextColor= "grey"
                  underlineColorAndroid = "transparent"
                  onChangeText={(name) => this.setState({name})}
                  value={this.state.name}
                />
            </View>
            <View>
                <FormLabel labelStyle={styles.labelStyles}>Username</FormLabel>
                <FormInput
                  inputStyle = {styles.formInputStyle}
                  placeholder="Name_example"
                  placeholderTextColor= "grey"
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                />
            </View>
            <View>
              <FormLabel labelStyle={styles.labelStyles}>Password</FormLabel>
              <FormInput
                inputStyle = {styles.formInputStyle}
                secureTextEntry
                placeholder="password"
                placeholderTextColor= "grey"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </View>
            <CardSection>
              <Button
                buttonStyle = {styles.buttonStyle}
                borderRadius={20}
                backgroundColor= 'grey'
                icon={{name: 'account-circle', size: 30}}
                title= 'Sign Up'
                onPress={this.userSignup}
              />
            </CardSection>
            <CardSection>
              <Button
                buttonStyle = {styles.buttonStyle}
                borderRadius={20}
                backgroundColor= 'grey'
                icon={{name: 'account-circle', size: 30}}
                title= 'Back to Login'
                onPress={() => {this.props.navigation.goBack()}}
              />
            </CardSection>
          </View>
        );
    }
}

const styles = {
    constainerStyle: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formInputStyle: {
      fontSize: 18,
      color: 'white',
    },
    labelStyles : {
      fontSize: 18,
      color: 'white',
  
    },
    buttonStyle: {
      width: 260,
      height: 40,
      borderWidth: 1,
      borderColor: 'white',
      alignSelf: 'center',
      marginTop: 30
    },
    textStyle: {
      fontSize: 25,
      color: 'yellow'
    }
  }
  
  export default connect(null, { register }) (RegisterForm);
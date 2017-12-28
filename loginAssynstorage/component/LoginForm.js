import React,{Component} from 'react';
import { View, Alert, AsyncStorage, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { login, authentication } from './actions/auth';
import { Spinner, CardSection } from './common'

class LoginForm extends Component {
  constructor(){
    super();
      this.state = {
        username: '',
        password: '',
        isChecking: false
      }
  }

  async componentWillMount(){
    this.setState({isChecking: true})
    try {
      const access_token = await AsyncStorage.getItem('@access_token');
      this.props.authentication(access_token);
      this.setState({isChecking: false})
    } catch (error) {
      this.setState({isChecking: false})
      // Error retrieving data or empty
    }
  }

  userLogin = () => {
    const { username, password, isChecking } = this.state;
    if (username != '' || password != '') {
      this.props.login({username, password});
    } else {
      alert('Sorry, username and password is required');
    }
  }

    render() {
      const { username, password, isChecking } = this.state;

      //spiner keluar saat mengecek token
      if (isChecking) {
        return (
          <View style={styles.container}>
            <Spinner size="large" />
            <Text>Checking...</Text>
          </View>
        )
      }
        return (
          <View style={styles.constainerStyle}>
            <Text style={styles.textStyle}>Login Please</Text>
            <View>
                <FormLabel labelStyle={styles.labelStyles}>Username</FormLabel>
                <FormInput
                  inputStyle = {styles.formInputStyle}
                  placeholder="example_username"
                  placeholderTextColor= "grey"
                  underlineColorAndroid = 'transparent'
                  onChangeText={(username) => this.setState({username})}
                  value={username}
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
                value={password}
              />
            </View>
            <CardSection>
              <Button
                buttonStyle = {styles.buttonStyle}
                borderRadius={20}
                backgroundColor= 'grey'
                icon={{name: 'account-circle', size: 30}}
                title= 'Sign In'
                onPress={this.userLogin}
              />
            </CardSection>
            <CardSection>
              <Button
                buttonStyle = {styles.buttonStyle}
                borderRadius={20}
                backgroundColor= 'grey'
                icon={{name: 'account-circle', size: 30}}
                title= 'Sign Up'
                onPress={() => {this.props.navigation.navigate('RegisterForm')}}
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

export default connect (null, { login, authentication}) (LoginForm);
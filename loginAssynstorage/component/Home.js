import React, {Component} from 'react';
import {
	AsyncStorage,
	Alert,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'
import { connect } from 'react-redux';
import { logout } from './actions/auth';

class Home extends Component {

    render() {
        return (
            <View style={styles.constainerStyle}>
							<Text style={styles.textStyle}> Anda sudah Masuk </Text>
							<Text style={styles.textSecond}> Silahkan Keluar </Text>
              <Button
                buttonStyle = {styles.buttonStyle}
                borderRadius={20}
                backgroundColor= 'grey'
                icon={{name: 'account-circle', size: 30}}
                title= 'Log Out'
                onPress={() => this.props.logout()}
              />
            </View>
        );
    }
}

const styles = {
  constainerStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
		color : 'blue',
		fontSize: 25

	},
	textSecond: {
		fontSize: 18,
		color: 'red'
	}
}

export default connect(null, { logout })(Home);

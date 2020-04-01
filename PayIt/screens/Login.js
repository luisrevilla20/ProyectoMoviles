import React, {Component} from 'react';
import { AsyncStorage } from "react-native";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  Alert,
} from 'react-native';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './../styles';
import logo from '../images/logo.png';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  state = {
    username: 'User',
    password: '',
  };


  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.container, {paddingBottom: this.keyboardHeight}]}>
          <Animated.Image
            source={logo}
            style={[styles.logo, {height: this.imageHeight}]}
          />
          <View style={styles.container}>
            <Text style={styles.welcome}>WELCOME</Text>

            <View style={styles.emailContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={value => this.setState({username: value})}
                value={this.state.username}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity>
              <View style={styles.forgotPassword}>
                <Text style={styles.forgotText}>¿Olvide mi password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                  button
                  onPress={() =>
                    this.props.navigation.push('Home', {
                      username: this.state.username,
                      password: this.state.password,
                    })
                  }
                  style={styles.buttonText}>
                  Iniciar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View style={styles.normalContainer}>
          <Text style={styles.normalText}>¿No tienes cuenta?</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.createAccount}>
            <Text style={styles.createText}>Crear una núeva</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

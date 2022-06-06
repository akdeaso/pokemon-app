import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms} from 'react-native-size-matters';
import {navigate} from '../../helpers/navigation';

const Login = () => {
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../assets/bg_img.png')}
        style={styles.bgImg}>
        <View style={styles.brandView}>
          <MaterialCommunityIcons name="pokemon-go" size={100} color="white" />
          <Text style={styles.brandViewText}>pokemon app</Text>
        </View>
      </ImageBackground>
      <View style={styles.botView}>
        <View style={{padding: 40}}>
          <Text style={styles.textTitle}>Welcome</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles.textRegister}> Register Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewInput}>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid={'#4632A1'}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid={'#4632A1'}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.loginButton}>Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgImg: {
    height: Dimensions.get('window').height / 2.5,
  },
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  botView: {
    flex: 1.5,
    backgroundColor: 'white',
    bottom: ms(50),
    borderTopStartRadius: ms(60),
    borderTopEndRadius: ms(60),
  },
  textTitle: {
    color: '#4632A1',
    fontSize: 34,
    fontWeight: '400',
  },
  textRegister: {
    color: 'red',
    fontStyle: 'italic',
  },
  viewInput: {
    marginTop: ms(50),
  },
  button: {
    height: ms(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: ms(5),
    borderRadius: ms(25),
  },
});

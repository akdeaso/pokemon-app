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
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import * as yup from 'yup';

const Register = () => {
  const RegisterValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is requiered'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const onRegister = values =>
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={onRegister}
      validationSchema={RegisterValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ScrollView
          style={styles.mainContainer}
          showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require('../../assets/bg_img.png')}
            style={styles.bgImg}>
            <View style={styles.brandView}>
              <MaterialCommunityIcons
                name="pokemon-go"
                size={100}
                color="white"
              />
              <Text style={styles.brandViewText}>pokemon app</Text>
            </View>
          </ImageBackground>
          <View style={styles.botView}>
            <View style={{padding: 40}}>
              <Text style={styles.textTitle}>Welcome</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigate('Login')}>
                  <Text style={styles.textRegister}> Login here</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid={'#4632A1'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errors}>{errors.email}</Text>
                )}
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid={'#4632A1'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={styles.errors}>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.button}
                disabled={!isValid}
                onPress={handleSubmit}>
                <Text style={styles.registerButton}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Register;

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
  registerButton: {
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
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: ms(5),
  },
});

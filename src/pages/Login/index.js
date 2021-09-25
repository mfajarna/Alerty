import React, {useState} from 'react';
import {LogBox, StyleSheet, Text, View, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILLogo} from '../../assets/icon';
import {Button, Gap, Input, Loading, TextLink} from '../../components';
import firebase from '../../config/Fire'
import {storeData, useForm} from '../../utils';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log('success', res);
        setLoading(false);
        setForm('reset');
        firebase.database()
          .ref(`users/${res.user.uid}/data`)
          .once('value')
          .then((resDB) => {
            console.log('Data User', resDB.val());
            if (resDB.val()) {
              storeData('user', form);
              navigation.reset({index: 0, routes:[{name:'MainApp'}]})
            }
          });
      })
      .catch((err) => {
        console.log('error', err);
        setLoading(false);
        showMessage({
          message: 'Email atau Password Salah',
          type: 'default',
          backgroundColor: '#CE6262',
          color: '#FFFF',
        });
      });
  };
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <ILLogo />
        <Gap height={36} />
        <Text style={styles.title}>Masuk dan Mulai Monitoring</Text>
        <Gap height={36} />
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={19} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={126} />
        <Button text="Sign In" onPress={login} />
        <Gap height={8} />
        <TextLink
          text="Create new my account"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      {loading && <Loading />}
      </ScrollView>
    </>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    paddingTop: 28,
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#F05454',
    maxWidth: 200,
  },
});

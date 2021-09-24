import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input, Loading} from '../../components';
import Fire from '../../config/Fire';
import {storeData, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    namaLengkap: '',
    pekerjaan: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onRegister = () => {
    console.log(form);

    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        showMessage({
          message: 'Berhasil Mendaftarkan Akun',
          type: 'default',
          backgroundColor: '#CE6262',
          color: 'white',
        });
        const data = {
          email: form.email,
          namaLengkap: form.namaLengkap,
          pekerjaan: form.pekerjaan,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set({data});

        storeData('user', data);
        // setLoading(true);

        navigation.reset({index: 0, routes:[{name:'MainApp'}]})
        console.log('Sukses', success);
      })
      .catch((error) => {
        const errorMessage = 'Email Sudah Digunakan';
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: '#CE6262',
          color: 'white',
        });
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Header text="Daftar Akun" onPress={() => navigation.goBack('Login')} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={49} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={17} />
            <Input
              label="Nama Lengkap"
              value={form.namaLengkap}
              onChangeText={(value) => setForm('namaLengkap', value)}
            />
            <Gap height={17} />
            <Input
              label="Profesi"
              value={form.pekerjaan}
              onChangeText={(value) => setForm('pekerjaan', value)}
            />
            <Gap height={17} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={65} />
            <Button text="Sign Up" onPress={onRegister} />
          </ScrollView>
        </View>
        {loading && <Loading />}
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  content: {
    paddingHorizontal: 25,
  },
});

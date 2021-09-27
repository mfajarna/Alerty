import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {BtnSignOut, Gap, Indikator, Status} from '../../components';
import ListPerangkat from '../../components/molecules/ListPerangkat';
import firebase from '../../config/Fire'
import NotifService from '../../NotifService';

const Dashboard = ({navigation}) => {
  const [indikatorsHujan, setIndikatorsHujan] = useState([]);
  const [indikatorsKelembapan, setIndikatorsKelembapan] = useState([]);
  const [indikatorsKemiringan, setIndikatorsKemiringan] = useState([]);
  const [indikatorsPergeseranTanah, setIndikatorsPergeseranTanah] = useState(
    [],
  );
  const [indikatorsStatus, setIndikatorsStatus] = useState([]);
  var statusIndikator = '';
  const[registerToken,setRegisterToken] = useState('');

      const onRegister = (token) => {
        setRegisterToken(token.token);
    }

      const onNotif = (notif) => {
        Alert.alert(notif.title, notif.message);
    }


  const notif = new NotifService(onRegister,onNotif);

  // const a = 1;

  // if(a == 1)
  // {
  //    notif.localNotif('Perangkat 1 Status : Aman');
  // }

  

  const[perangkat1,setPerangkat1] = useState({});
  const[perangkat2,setPerangkat2] = useState({});
  const[perangkat3,setPerangkat3] = useState({});
  const[perangkat4,setPerangkat4] = useState({});
  const signOut = () => {
    AsyncStorage.removeItem('user').then(res => {
      navigation.reset({index: 0, routes:[{name: 'Login'}]})
      firebase.auth()
      .signOut()
      .then(() => {
        console.log('berhasil')
      })
      .catch((err) => {
        showMessage({
          message: 'Eror Sign Out',
          type: 'default',
          backgroundColor: '#CE6262',
          color: '#FFFF',
        });
      });
    })

  };

  if(perangkat1.status === 'bahaya')
  {
    notif.localNotif('Perangkat 1 Status : Bahaya');
  }
  if(perangkat1.status === 'waspada')
  {
    notif.localNotif('Perangkat 1 Status : Waspada');
  }
    if(perangkat2.status === 'bahaya')
  {
    notif.localNotif('Perangkat 2 Status : Bahaya');
  }
  if(perangkat2.status === 'waspada')
  {
    notif.localNotif('Perangkat 2 Status : Waspada');
  }
  if(perangkat3.status === 'bahaya')
  {
    notif.localNotif('Perangkat 3 Status : Bahaya');
  }
  if(perangkat3.status === 'waspada')
  {
    notif.localNotif('Perangkat 3 Status : Waspada');
  }
    if(perangkat4.status === 'bahaya')
  {
    notif.localNotif('Perangkat 4 Status : Bahaya');
  }
  if(perangkat4.status === 'waspada')
  {
    notif.localNotif('Perangkat 4 Status : Waspada');
  }

  useEffect(() => {
  //   getDataCurahHujan();
  //   getDataKelembapanTanah();
  //   getDataKemiringan();
  //   getDataPergeseranTanah();
  //   getDataStatus();

  getDataPerangkat1();
  getDataPerangkat2();
  getDataPerangkat3();
  getDataPerangkat4();
   }, []);


  const getDataPerangkat1 = () => {
    firebase.database().ref('Perangkat1/')
    .on('value', res => {
      console.log(res.val())

      setPerangkat1(res.val())
    })
  }

    const getDataPerangkat2 = () => {
    firebase.database().ref('Perangkat2/')
    .on('value', res => {
      console.log(res.val())

      setPerangkat2(res.val())
    })
  }

    const getDataPerangkat3 = () => {
    firebase.database().ref('Perangkat3/')
    .on('value', res => {
      console.log(res.val())

      setPerangkat3(res.val())
    })
  }

  const getDataPerangkat4 = () => {
    firebase.database().ref('Perangkat4/')
    .on('value', res => {
      console.log(res.val())

      setPerangkat4(res.val())
    })
  }




  // const getDataCurahHujan = () => {
  //   firebase.database()
  //     .ref('Sensor/rtcurahhujan')
  //     .on('value', (res) => {
  //       console.log('Data Realtime : ', res.val());
  //       if (res.val()) {
  //         setIndikatorsHujan(res.val());
  //       }
  //     });
  // };
  // const getDataKelembapanTanah = () => {
  //   firebase.database()
  //     .ref('Sensor/rtkelembapantanah')
  //     .on('value', (res) => {
  //       console.log('Data Realtime : ', res.val());
  //       if (res.val()) {
  //         setIndikatorsKelembapan(res.val());
  //       }
  //     });
  // };

  // const getDataKemiringan = () => {
  //   firebase.database()
  //     .ref('Sensor/rtkemiringan')
  //     .on('value', (res) => {
  //       console.log('Data Realtime Kemiringan : ', res.val());
  //       if (res.val()) {
  //         setIndikatorsKemiringan(res.val());
  //       }
  //     });
  // };

  // const getDataPergeseranTanah = () => {
  //   firebase.database()
  //     .ref('Sensor/rtpergeserantanah')
  //     .on('value', (res) => {
  //       console.log('Data Realtime : ', res.val());
  //       if (res.val()) {
  //         setIndikatorsPergeseranTanah(res.val());
  //       }
  //     });
  // };

  // const getDataStatus = () => {
  //   firebase.database()
  //     .ref('status')
  //     .on('value', (res) => {
  //       console.log('Data Status : ', res.val());
  //       if (res.val()) {
  //         setIndikatorsStatus(res.val());
  //       }
  //     });
  // };

  // firebase.database()
  //   .ref('status/1/status')
  //   .on('value', (res) => {
  //     var inputStatus = res.val();
  //     statusIndikator = inputStatus;
  //   });

  // console.log(statusIndikator);

  // if (statusIndikator === 'bahaya') {
  //   showNotification('Alerty', 'Status Bahaya');
  // }
  // if (statusIndikator === 'waspada') {
  //   showNotification('Alerty', 'Status Waspada');
  // }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Dashboard</Text>
          <BtnSignOut onPress={signOut} />
        </View>
        <Gap height={20} />
       <View style={styles.content}>
         <Text style={styles.text}>List Perangkat</Text>
         <ScrollView showsVerticalScrollIndicator={false}>
          <View>
         <Gap height={10} />
          <ListPerangkat nama="Perangkat 1" onPress={() => navigation.navigate('DetailPerangkat',perangkat1 )}/>
          <ListPerangkat nama="Perangkat 2" onPress={() => navigation.navigate('DetailPerangkat',perangkat2 )}/>
          <ListPerangkat nama="Perangkat 3" onPress={() => navigation.navigate('DetailPerangkat',perangkat3 )}/>
          <ListPerangkat nama="Perangkat 4" onPress={() => navigation.navigate('DetailPerangkat',perangkat4 )}/>
          </View>
          </ScrollView>
       </View>
      </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: '#F9F9F9',
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#F05454',
  },
  title: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#7D8797',
  },
  indikator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indikatorAkhir:{
    flexDirection: 'row',
    justifyContent: 'center'
  },  
  status: {
    alignItems: 'center',
  },
  text:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#F05454',
  },
  content:{
    flex: 1
  }
});

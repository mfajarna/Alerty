import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {BtnSignOut, Gap, Indikator, Status} from '../../components';
import {Fire} from '../../config';
import {showNotification} from '../../utils';

const Dashboard = ({navigation}) => {
  const [indikatorsHujan, setIndikatorsHujan] = useState([]);
  const [indikatorsKelembapan, setIndikatorsKelembapan] = useState([]);
  const [indikatorsKemiringan, setIndikatorsKemiringan] = useState([]);
  const [indikatorsPergeseranTanah, setIndikatorsPergeseranTanah] = useState(
    [],
  );
  const [indikatorsStatus, setIndikatorsStatus] = useState([]);
  var statusIndikator = '';

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((err) => {
        showMessage({
          message: 'Eror Sign Out',
          type: 'default',
          backgroundColor: '#CE6262',
          color: '#FFFF',
        });
      });
  };

  useEffect(() => {
    getDataCurahHujan();
    getDataKelembapanTanah();
    getDataKemiringan();
    getDataPergeseranTanah();
    getDataStatus();
  }, []);

  const getDataCurahHujan = () => {
    Fire.database()
      .ref('Sensor/rtcurahhujan')
      .on('value', (res) => {
        console.log('Data Realtime : ', res.val());
        if (res.val()) {
          setIndikatorsHujan(res.val());
        }
      });
  };
  const getDataKelembapanTanah = () => {
    Fire.database()
      .ref('Sensor/rtkelembapantanah')
      .on('value', (res) => {
        console.log('Data Realtime : ', res.val());
        if (res.val()) {
          setIndikatorsKelembapan(res.val());
        }
      });
  };

  const getDataKemiringan = () => {
    Fire.database()
      .ref('Sensor/rtkemiringan')
      .on('value', (res) => {
        console.log('Data Realtime Kemiringan : ', res.val());
        if (res.val()) {
          setIndikatorsKemiringan(res.val());
        }
      });
  };

  const getDataPergeseranTanah = () => {
    Fire.database()
      .ref('Sensor/rtpergeserantanah')
      .on('value', (res) => {
        console.log('Data Realtime : ', res.val());
        if (res.val()) {
          setIndikatorsPergeseranTanah(res.val());
        }
      });
  };

  const getDataStatus = () => {
    Fire.database()
      .ref('status')
      .on('value', (res) => {
        console.log('Data Status : ', res.val());
        if (res.val()) {
          setIndikatorsStatus(res.val());
        }
      });
  };

  Fire.database()
    .ref('status/1/status')
    .on('value', (res) => {
      var inputStatus = res.val();
      statusIndikator = inputStatus;
    });

  console.log(statusIndikator);

  if (statusIndikator === 'bahaya') {
    showNotification('Alerty', 'Status Bahaya');
  }
  if (statusIndikator === 'waspada') {
    showNotification('Alerty', 'Status Waspada');
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Dashboard</Text>
          <BtnSignOut onPress={signOut} />
        </View>
        <ScrollView>
        <Gap height={43} />
        <Text style={styles.title}>Environmental Monitoring</Text>
        <Gap height={8} />
        <View style={styles.indikator}>
          {indikatorsHujan.map((item) => {
            return (
              <Indikator
                type="Curah Hujan (mm)"
                key={item.id}
                nilai={item.rtcurahhujan}
              />
            );
          })}
          {indikatorsKelembapan.map((item) => {
            return (
              <Indikator
                type="Kelembapan Tanah"
                key={item.id}
                nilai={item.rtkelembapantanah}
              />
            );
          })}
        </View>
        <Gap height={25} />
        <View style={styles.indikator}>
          {indikatorsKemiringan.map((item) => {
            return (
              <Indikator
                type="Kemiringan"
                key={item.id}
                nilai={item.rtkemiringan}
              />
            );
          })}
          {indikatorsPergeseranTanah.map((item) => {
            return (
              <Indikator
                type="Pergeseran Tanah"
                key={item.id}
                nilai={item.rtpergeserantanah}
              />
            );
          })}
        </View>
        <Gap height={25} />
        <View style={styles.indikator}>
              <Indikator
                type="PH Tanah"
                nilai={6.5}
              />
        </View>
        <View style={styles.indikator}>
              <Indikator
                type="PH Tanah"
                nilai={6.5}
              />
        </View>
        <Gap height={32} />
        <Text style={styles.title}>Status</Text>
        <Gap height={9} />
        <View style={styles.status}>
          {indikatorsStatus.map((item) => {
            return <Status key={item.id} type={item.status} />
          })}
        </View>
        </ScrollView>
      </View>
    </>
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
});

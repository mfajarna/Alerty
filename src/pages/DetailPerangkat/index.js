import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, Indikator, Status } from '../../components'

const DetailPerangkat = ({navigation, route}) => {

    const dataPerangkat = route.params;

    return (
        <View style={styles.container}>
            <Header text="Detail Perangkat" onPress={() => navigation.reset({index:0 , routes:[{name:"MainApp"}]})} />
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <Gap height={15} />
                <View style={styles.indikator}>
                    <Indikator
                        type="Curah Hujan (mm)"
                        nilai={dataPerangkat.curahujan}
                    />
                    <Indikator
                        type="Kelembapan Tanah"
                        nilai={dataPerangkat.kelembapantanah}
                    />
                </View>
                <Gap height={15} />
                <View style={styles.indikator}>
                    <Indikator
                        type="Kemiringan"
                        nilai={dataPerangkat.kemiringantanah}
                    />
                    <Indikator
                        type="Pergeseran Tanah"
                        nilai={dataPerangkat.pergeserantanah}
                    />
                </View>
                <Gap height={15} />
                <Text style={styles.text}>Status Kebencaan</Text>
                <Status type={dataPerangkat.status}/>
            </View>
        </View>
    )
}

export default DetailPerangkat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
      indikator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
  },
  text:{
          fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#F05454',
  }
})

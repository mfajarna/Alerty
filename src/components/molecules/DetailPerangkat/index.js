<ScrollView showsVerticalScrollIndicator={false}>
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
        type="Kelembaban Tanah"
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
      <Indikator
        type="Kelembaban Udara"
        nilai={45}
      />
</View>
<Gap height={25} />
<View style={styles.indikatorAkhir}>
      <Indikator
        type="Suhu Udara"
        nilai={23}
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
<Gap height={25} />
</ScrollView>
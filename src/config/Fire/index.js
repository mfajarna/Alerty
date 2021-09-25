import * as firebase from "firebase";

const config ={
      // apiKey: 'AIzaSyCktan-KGbaXnyeSTyvHclzDnU-ULIlyZI',
      // authDomain: 'monitoring-longsor-d7617.firebaseapp.com',
      // databaseURL: 'https://monitoring-longsor-d7617.firebaseio.com',
      // projectId: 'monitoring-longsor-d7617',
      // storageBucket: 'monitoring-longsor-d7617.appspot.com',
      // messagingSenderId: '821757444296',
      // appId: '1:821757444296:web:6d5d2deb954456582865fd',
      // measurementId: 'G-SW656PFP3S',
      apiKey: "AIzaSyCz-puOUyzg0gkVlgb_eRNLMJQMNd75tBA",
      authDomain: "hujan-384e4.firebaseapp.com",
      databaseURL: "https://hujan-384e4.firebaseio.com",
      projectId: "hujan-384e4",
      storageBucket: "hujan-384e4.appspot.com",
      messagingSenderId: "343494290614"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()



// Bang Amri
// apiKey: "AIzaSyCz-puOUyzg0gkVlgb_eRNLMJQMNd75tBA",
// authDomain: "hujan-384e4.firebaseapp.com",
// databaseURL: "https://hujan-384e4.firebaseio.com",
// projectId: "hujan-384e4",
// storageBucket: "hujan-384e4.appspot.com",
// messagingSenderId: "343494290614"

// Weker
// apiKey: "AIzaSyBqSic_RAzww1HWyFZMfqlTl7LBOwtFGzI",
// authDomain: "mitigasi-8e083.firebaseapp.com",
// databaseURL: "https://mitigasi-8e083-default-rtdb.firebaseio.com",
// projectId: "mitigasi-8e083",
// storageBucket: "mitigasi-8e083.appspot.com",
// messagingSenderId: "128390354900",
// appId: "1:128390354900:web:7ca4f68b6deb81577ae841",
// measurementId: "G-GR6NJ9RLZ1"
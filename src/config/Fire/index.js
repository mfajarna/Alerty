import * as firebase from "firebase";

const config ={
      apiKey: 'AIzaSyCktan-KGbaXnyeSTyvHclzDnU-ULIlyZI',
      authDomain: 'monitoring-longsor-d7617.firebaseapp.com',
      databaseURL: 'https://monitoring-longsor-d7617.firebaseio.com',
      projectId: 'monitoring-longsor-d7617',
      storageBucket: 'monitoring-longsor-d7617.appspot.com',
      messagingSenderId: '821757444296',
      appId: '1:821757444296:web:6d5d2deb954456582865fd',
      measurementId: 'G-SW656PFP3S',
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()





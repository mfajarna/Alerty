import PushNotification from 'react-native-push-notification';

export const showNotification = (title, message) => {
  PushNotification.localNotification({
    title: title, // (optional)
    message: message, // (required)
    largeIcon: 'mipmap@ic_logos',
    smallIcon: 'mipmap@ic_logos',
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    priority: 'high', // (optional) set notification priority, default: high
    visibility: 'public', // (optional) set notification visibility, default: private
    importance: 'high', // (optional) set notification importance, default: high
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    soundName: 'default',
  });
};

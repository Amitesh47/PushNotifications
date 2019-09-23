import React from 'react';
import './App.css';
import { isPushNotificationSupported } from "./pushNotifications"
import PushNotificationsComponent from "./PushNotificationsComponent"

function App() {
  console.log(isPushNotificationSupported());
  return (
    <div className="App">
      <PushNotificationsComponent/>
    </div>
  );
}

export default App;

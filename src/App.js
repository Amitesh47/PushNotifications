import React from 'react';
import './App.css';
import { isPushNotificationSupported } from "./push-notification"

function App() {
  console.log(isPushNotificationSupported());
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

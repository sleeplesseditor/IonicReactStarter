import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToast, 
  IonToolbar
} from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showToast, setShowToast] = useState(false);
  
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>An App...</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click
          </IonButton>
        <IonToast isOpen={showToast} message="I am not made of toast" />
      </IonContent>
    </IonApp>
  );
}

export default App;

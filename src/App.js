import { IonButton, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showToast, setShowToast] = useState(false);
  
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <div className="App">
     <main>
       <IonButton onClick={handleClick}>Click</IonButton>
       <IonToast isOpen={showToast} message="I am not made of toast" />
     </main>
    </div>
  );
}

export default App;

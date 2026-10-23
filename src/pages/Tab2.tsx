<<<<<<< HEAD

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
=======
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
>>>>>>> 74b9207f8d867a4d29e8acd4cc499332d22da83e
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
<<<<<<< HEAD
            <IonTitle size="large">Contatos</IonTitle>
          </IonToolbar>
        </IonHeader>
          
        <IonList>
          <IonItem>
            <IonLabel>Contato Principal: Carol</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Telefone: (11) 99199-9990</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>E-mail: sra-email@exemplo.com</IonLabel>
          </IonItem>
        </IonList>
=======
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
>>>>>>> 74b9207f8d867a4d29e8acd4cc499332d22da83e
      </IonContent>
    </IonPage>
  );
};

<<<<<<< HEAD
export default Tab2;
=======
export default Tab2;
>>>>>>> 74b9207f8d867a4d29e8acd4cc499332d22da83e

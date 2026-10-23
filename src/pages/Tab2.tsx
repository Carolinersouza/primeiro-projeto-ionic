import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contatos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
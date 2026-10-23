import { 
  IonContent, 
  IonIcon, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle 
} from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="Titulo">
            <IonIcon icon={personOutline} style={{ marginRight: '8px' }} />
            Apresentação
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              <IonIcon icon={personOutline} style={{ marginRight: '8px' }} />
              Apresentação
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Cartão de Apresentação Personalizado */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Meu objetivo é conquistar minha primeira oportunidade na área da tecnologia desenvolvendo projetos com HTML, CSS, JavaScript, React e Ionic.
            </IonCardTitle>
            <IonCardSubtitle>Objetivo</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Descrição do cartão.
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
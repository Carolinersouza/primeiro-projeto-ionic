<<<<<<< HEAD
import { IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
=======
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
>>>>>>> 74b9207f8d867a4d29e8acd4cc499332d22da83e
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
<<<<<<< HEAD
          <IonTitle className="Titulo">
            <IonIcon icon={personOutline} style={{ marginRight: '8px' }} />
            Apresentação
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            <IonIcon icon={personOutline} style={{ marginRight: '8px' }} />
            Apresentação
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* O seu cartão de apresentação */}
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

      

=======
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
         <IonCard>
      <IonCardHeader>
        <IonCardTitle>Titulo do Cartão</IonCardTitle>
        <IonCardSubtitle>Subtitulo do Cartão</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent> Pequena descrição do cartão.</IonCardContent>
    </IonCard>
>>>>>>> 74b9207f8d867a4d29e8acd4cc499332d22da83e
      </IonContent>
    </IonPage>
  );
};

<<<<<<< HEAD
export default Tab1;
=======
export default Tab1;
>>>>>>> 74b9207f8d867a4d29e8acd4cc499332d22da83e

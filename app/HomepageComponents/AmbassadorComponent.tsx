import React from 'react';
import { Card,Text,Spoiler, Flex } from '@mantine/core';
import Image from 'next/image';
import styles from '../responsive.module.css'

const AmbassadorComponent = () => {
    return (
      <div className={styles.components} >
                  <Text fw={700} td="underline" ta="center"  style={{marginBottom:"50px",fontSize:"55px"}} >
            Mot de L'ambassadeur
          </Text>
      <div className={styles.eachblock}      >
        <Card className={styles.Card}>
          <Image
            src={'/images/burkina_ambassador.jpeg'}
            alt=""
            width={1000}
            height={1000}
            style={{ height: '100%', width: '100%', alignSelf: 'center' }}
          />
        </Card>
        <Card className={styles.Card} >
        <Text style={{fontWeight:"bold",fontSize:"32px",marginBottom:"10px"}}>Chers compatriotes et amis du Burkina Faso,</Text>
          <Spoiler maxHeight={300} showLabel="Show more" hideLabel="Hide">    
            <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"100%", height:"100%"}}>
          <Text>
          C’est avec un grand plaisir que je vous accueille sur le site officiel de l’Ambassade du Burkina Faso à New Delhi. La création de ce site s’est avérée nécessaire en raison de l’obsolescence de l’ancien. À travers cette plateforme dynamique, vous trouverez des informations sur le Burkina Faso ainsi que sur les pays relevant de la juridiction de notre Ambassade. Vous y découvrirez également des renseignements pratiques concernant les services offerts par notre représentation diplomatique.
          </Text>
          <Text>
          Ce site se veut une vitrine pour le patrimoine culturel, les richesses touristiques, l’économie du Burkina Faso, ainsi que les nombreuses opportunités d'investissement qu'offre notre pays dans un environnement attractif. Je tiens à saisir cette occasion pour exprimer ma gratitude à tous mes collaborateurs ainsi qu’à toutes les personnes de bonne volonté qui ont contribué à la réalisation de ce projet
          </Text>
          <Text>
          L’Ambassade est ouverte à toutes vos suggestions et critiques constructives qui permettront d’améliorer constamment cet outil. En espérant que vous tiriez pleinement parti de ce site, je vous réaffirme que vous êtes toujours les bienvenus dans nos locaux.
          </Text>
          </div>
          </Spoiler>
          
        </Card>
      </div>
      </div>
    );
  };
  
  export default AmbassadorComponent;
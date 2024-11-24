import React from 'react'
import Image from 'next/image'
import styles from '../responsive.module.css'



function Visa_Info() {
  return (
    
 
        <div className={styles.activitesconsulaire}>
        <div style={{width:"100%"}}>
        <p>Pièces à fournir</p>
        <p>Visa diplomatique ou officiel</p>
        <ul style={{listStyle:"inside"}}>
            <li>Formulaire de demande de visa en deux originaux</li>
            <li>Note verbale</li>
            <li>Deux photos de format passeport</li>
            <li>Vaccin contre la fièvre jaune</li>
        </ul>
        <p>Visa business</p>
        <ul>
            <li>Formulaire de demande de visa en deux originaux</li>
            <li>Réservation d'hôtel</li>
            <li>Deux photos de format passeport</li>
            <li>Billet d'avion</li>
            <li>Lettre d'invitation</li>
            <li>Lettre d'entreprise</li>
            <li>Profil de la société</li>
            <li>Lettre de recommandation de votre chambre de commerce</li>
            <li>Passeport valide</li>
            <li>Vaccin contre la fièvre jaune</li>
            <p style={{fontWeight:"bold"}}>NB : certaines informations complémentaires peuvent être demandées selon la situation.</p>

        </ul>
        <p>Visa Conférences ou séminaires</p>
        <ul>
            <li>Formulaire de demande de visa en deux originaux</li>
            <li>Lettre d'invitation à la conférence</li>
            <li>Passeport valide</li>
            <li>Billet d'avion</li>
            <li>Deux photos de format passeport</li>
            <li>Vaccin contre la fièvre jaune</li>
            <p style={{fontWeight:"bold"}}>NB : certaines informations complémentaires peuvent être demandées selon la situation.</p>
</ul>

        <p>Visa de tourisme</p>
        <ul>
        <li>Deux formulaires de demande de visa originaux</li>
        <li>Réservation d'hôtel</li>
        <li>Passeport valide</li>
        <li>deux photos de format passeport</li>
        <li>Billet d'avion</li>
        <li>Vaccin contre la fièvre jaune</li>
        <li>Capacité financière</li> 
        <p style={{fontWeight:"bold"}}>NB : certaines informations complémentaires peuvent être demandées selon la situation.</p>  
        </ul> 

        <p>Frais de visa:</p> 
        <p>Business:</p>
        <ul>
            <li>3 mois entrée unique: 5625 roupies</li>
            <li>3 mois entrées multiples: 7500 roupies</li>
            <li>6 mois entrée unique: 6500 roupies</li>
            <li>6 mois entrées multiples: 8000 roupies</li>
            <li>12 mois entrée unique: 8500 roupies</li>
            <li>12 mois entrées multiples: 9800 roupies</li>
        </ul>
        <p>Conférences/ seminaries et tourisme</p>
        <ul>
            <li>4500 roupies</li>
        </ul>    
        </div>
        <div style={{width:"100%"}}>
            <p>le formulaire de demande de visas se trouve ci dessous </p>

           <a href='/documents/Formulaire_de_demande_de_visa.pdf'> <Image src="/images/Image_Formulaire_de_demande_de_visa.jpg" alt="Visa_info" width={300} height={400} style={{width:"100%",height:"100%"}} /> </a>
        </div>  
        </div>  

  )
}

export default Visa_Info

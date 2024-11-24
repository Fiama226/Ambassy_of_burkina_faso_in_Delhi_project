import React from 'react'
import Image from 'next/image'
import styles from '../responsive.module.css'

const Passeport_Info=()=>{
    const data=[{id:1,title:"Pièces à fournir pour les demandes de passeport burkinabé :",list_of_documents:[{id:1,name:"Formulaire de demande de passeport dûment rempli avec les empreintes biométriques"},{id:2,name:"1 Extrait d’acte de naissance ou un jugement supplétif"},{id:3,name:"1 Certificat de nationalité burkinabè ou une copie légalisée de celui-ci"},{id:4,name:"1 Copie légalisée de la carte d’identité burkinabè ou de la carte consulaire"},{id:5,name:"1 extrait de Casier judiciaire datant de moins de trois (3) mois"},{id:6,name:"3 Photos d’identité prise de face sur fond blanc, format 4.5x3.5 cm. Le port de boucles–d’oreilles et de verres correcteurs est admis"},{id:7,name:"1 Attestation de la profession ou une copie légalisée de celle-ci, ou une copie légalisée de la carte d’étudiant"}]},
    {id:2,title:"Pour personne ayant acquis la nationalité par mariage :",list_of_documents:[{id:1,name:"Formulaire de demande de passeport dûment rempli avec les empreintes biométriques"},{id:2,name:"1 Extrait d’acte de naissance ou une copie légalisée de celui-ci"},{id:3,name:"1 Certificat de nationalité burkinabè ou une copie légalisée de celui-ci"},{id:4,name:"1 Copie légalisée de la carte d’identité consulaire"},{id:5,name:"1 Casier judiciaire datant de moins de trois (3) mois"},{id:6,name:"1 Copie légalisée du passeport, de la CNIB ou de la carte consulaire du conjoint"},{id:7,name:"1 Copie légalisée de l’acte de mariage"},{id:8,name:"3 Photos d’identité prise de face sur fond blanc, format 4.5x3.5 cm. Le port de boucles–d’oreilles et de verres correcteurs est admis"},,{id:9,name:"1 Attestation de la profession ou une copie légalisée de celle-ci, ou une copie légalisée de la carte d’étudiant"}]},
    {id:3,title:"Pour mineur:",list_of_documents:[{id:1,name:"Formulaire de demande de passeport dûment rempli sans les empreintes"},{id:2,name:"3 Photos d’identité prise de face sur fond blanc, format 4.5x3.5 cm"},{id:3,name:"1 Extrait d’acte de naissance ou un supplétif"},{id:4,name:"1 Certificat de nationalité burkinabè ou une copie légalisée de celui-ci"},{id:5,name:"Une autorisation parentale"},{id:6,name:"Un certificat de scolarité (pour les élèves) ou une attestation d’inscription de l’année en cours (pour les étudiants)"},{id:7,name:"Une copie des documents d’identité (CNIB ou passeport) des deux parents."}]},
    {id:4,title:"Dossier de demande de renouvellement de passeport ordinaire burkinabè :",list_of_documents:[{id:1,name:"Formulaire de demande de passeport dûment rempli avec les empreintes biométriques"},{id:2,name:"Pour les passeports établis avant 1991, constituer un nouveau dossier"},{id:3,name:"Une copie du passeport expiré"},{id:4,name:"Un document justifiant la profession"},{id:5,name:"Trois (03) photos format passeport prises de face"},{id:6,name:""},{id:7,name:"Copie légalisée de la CNIB"}]}]

    return (
      <div className={styles.activitesconsulaire}>
        <div style={{width:"100%"}}>
        {data.map(item=><div key={item.id}><p >{item.title}</p><ul> {item.list_of_documents.map(i=><li key={i?.id}> {i.name}</li>)} </ul> </div>)}

        <p style={{fontWeight:"bold"}}>En cas de perte :</p>
        <p>joindre une déclaration de perte établie à l’Ambassade ou au Consulat Général, pour un renouvellement avant trois (03) mois de la date d'expiration, joindre le passeport, pour éviter les rejets pour fichier non retrouvé par les archivistes de la Division de la migration de la Police, il serait judicieux de joindre aux pièces sus citées, les copies légalisées de l’extrait de naissance et du certificat de nationalité burkinabè</p>

        </div>
        <div style={{width:"100%"}}>
        <a href='/documents/Formulaire_de_demande_de_passeport.pdf'> <Image src="/images/Image_Formulaire_de_demande_de_passeport.jpg" alt="" width={10000} height={10000} style={{width:"100%",height:"100%"}} /> </a>


        </div>
        
      </div>
    )
  }


export default Passeport_Info
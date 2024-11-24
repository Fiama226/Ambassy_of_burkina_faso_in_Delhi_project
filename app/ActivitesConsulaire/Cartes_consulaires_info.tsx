import React from 'react'
import Image from 'next/image'


function Cartes_consulaires_info() {
  return (
    <div>
        <p>La carte consulaire est un document d’identité délivré aux nationaux sur le territoire de la juridiction. L’établissement de la carte consulaire est nécessaire car elle permet l’immatriculation de ses nationaux sur le territoire de la juridiction, d’avoir des renseignements sur eux (lieux de résidence, fonction, …) et de tenir des statistiques fiables indispensables à la planification des politiques économiques et sociales du Burkina Faso.</p>
        <p>La détention de la carte consulaire donne droit à la réduction des tarifs pour certains services.</p>
        <p style={{fontWeight:"bold"}}>Pièces à fournir:</p>
        <ul>
            <li>Photocopie du certificat de nationalité burkinabè ou de la CNIB ou du passeport burkinabè</li>
            <li>Photocopie de l’acte de naissance</li>
            <li>Copie du visa d’entrée </li>
            <li>Deux (02) photos d’identité identiques.</li>

        </ul>
        <div style={{display:"flex",flexDirection:"row", justifySelf:"center",justifyContent:"center"}}> 
          <div style={{width:"20vw",marginRight:"5vw"}}>
         <a href='/documents/Formulaire_de_demande_de_carte_consulaire.pdf'> <Image src={"/images/Image_Formulaire_de_demande_de_carte_consulaire.jpg"} alt='' width={1000} height={1000} style={{width:"100%", height:"100%"}} /></a>
          </div>
          <div style={{width:"20vw"}}>
          <a href='/documents/Fiche_d’immatriculation.pdf'>  <Image src={"/images/Image_Fiche_d’immatriculation_page.jpg"} alt='' width={1000} height={1000} style={{width:"100%", height:"100%"}} /> </a>
          </div>

        </div>
      
    </div>
  )
}

export default Cartes_consulaires_info

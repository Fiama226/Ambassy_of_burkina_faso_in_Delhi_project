"use client"
import React from 'react'
import { Accordion ,Text,Card} from '@mantine/core';
import { FaPassport,FaIdCard } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import { FaGlobeAfrica } from "react-icons/fa";
import Cartes_consulaires_info from "./Cartes_consulaires_info"
import Passeport_Info from "./Passeport_Info"
import Visa_Info from "./Visa_Info"
import styles from '../responsive.module.css'



function Page() {
  return (
    <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center"}}>
    <div className={styles.components} >

    <Accordion defaultValue="item-2" style={{width:"100%",alignSelf:"center"}}>
    <Accordion.Item value={"Passeport"}>
      <Accordion.Control icon={<FaPassport/>} ><Text> Passeport</Text></Accordion.Control>
      <Accordion.Panel> <Passeport_Info/></Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item  value={"Carte consulaire"}>
      <Accordion.Control icon={<FaIdCard />} ><Text> Carte consulaire</Text></Accordion.Control>
      <Accordion.Panel> <Cartes_consulaires_info/></Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value={"Visa"}>
      <Accordion.Control icon={<FaGlobeAfrica />}  ><Text> Visa</Text></Accordion.Control>
      <Accordion.Panel> <Visa_Info/></Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value={"Actes divers"}>
      <Accordion.Control icon={<PiFilesFill />} ><Text> Actes divers</Text></Accordion.Control>
      <Accordion.Panel> 
      <p>
          L’Ambassade produits différents actes divers   tels que des laissez-passer, le certificat de capacité matrimoniale, le certificat de célibat, etc.
          </p>
          <p>
          Tous ces documents s’obtiennent en adressant une demande à l’Ambassade qui les délivrera sous la présentation d’un certain nombre de document selon le cas.
          </p>


      </Accordion.Panel>
    </Accordion.Item>


  </Accordion>
  </div>
  </div>
  )
}

export default Page
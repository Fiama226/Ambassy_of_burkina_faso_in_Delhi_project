"use client"
import React from 'react'
import { Text,Card,Flex,Tooltip } from '@mantine/core'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useRef } from 'react';
import styles from '../responsive.module.css'







const Reseau_consulaire=()=> {
    const myDivRef = useRef(null);
  return (
    <div className={styles.components}><p style={{fontWeight:"bold", fontSize:"50px",textAlign:"center"}}>Le Reseau consulaire</p>

    <Text>
    La juridiction de l’Ambassade dispose  de trois consulats honoraires à savoir celui de Mumbai dans l’Etat de Maharashtra en Inde, celui de Bangkok en Thailand et récemment celui de Jakarta en Indonésie. Seuls les consulats honoraires de Bangkok et de Jakarta ont des consuls honoraires et sont fonctionnels.
    </Text>
    <div className={styles.eachblock}>
        <div style={{width:"100%",height:"80%",display:"flex",flexDirection:"column"}}>
            <Image src={"/images/Flag_of_Indonesia.svg"} width={250} height={250} alt='' style={{display:"flex",alignSelf:"center"}} />
            <Text style={{textAlign:"center"}}>Consulat de Bangkok</Text>
            <Text>  <FaLocationDot />BHIRABHOL ISRAPRASARAT CT, TOWER, 31st FLOOR 191/2-5 RATCHADAPISEK ROAD KLONGTOEY BANGKOK 10110, TEL: 6622580060, THAILAND</Text>
            <Text>  <FaUser /> MR. ANUSAK INTHRAPHUVASAK </Text>
        </div>
        <div style={{width:"100%",height:"80%",display:"flex",flexDirection:"column"}}>
            <Image src={"/images/Flag_of_Thailand.svg"} width={250} height={250} alt='' style={{display:"flex",alignSelf:"center"}} />
            <Text style={{textAlign:"center"}}>Consulat de Jakarta</Text>
            <Text> <FaLocationDot /> MELAWAI RAYA GD. PANIN BANK LT.4 JALAN SUNGAI SAMBAS VI NO. 189 A-B KRAMAT PELA, KEBAYORAN BARU, KOTA JAKARTA SELATAN, DKI JAKARTA 12160, TEL: 02-2708345 , INDONESIE</Text>
            <Text>  <FaUser />  MR. EDDIE GUNADIRDJA </Text>
        </div>
    </div>
    

    
    </div>
  )
}

export default Reseau_consulaire
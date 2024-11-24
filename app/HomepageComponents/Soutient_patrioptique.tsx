import React from 'react'
import Image from 'next/image'
import styles from '../responsive.module.css'
import { Text } from '@mantine/core'

function Soutient_patrioptique() {
  return (
    <div  className={styles.components}>
      <div className={styles.eachblock}>
    <div style={{backgroundColor:"green",width:"100%",height:"100%"}}> <Image src={"/images/soutient_patriotique.jpg"} width={5000} height={5000} alt='' style={{width:"100%",height:"100%"}} /></div>
    <div style={{backgroundColor:"red",width:"100%",height:"100%"}}>
        <div style={{padding:"1vw",display:"flex",flexDirection:"column",justifyItems:"center",flexWrap:"wrap",alignItems:"center"}}>
        <Text style={{color:"#FFFFFF",textAlign:"center", fontSize:"30px",marginBottom:"30px"}}>ENSEMBLE, NOUS Y PARVIENDRONS </Text>
        
        <div style={{width:"75%"}}><a href='/documents/RIB-EFFORT-GUERRE.pdf' > <p style={{backgroundColor:"yellow",borderRadius:"0.5vw",padding:"0.5vw",color:"#006003",textAlign:"center",marginBottom:"3vh"}}>Télécharger le RIB Compte fonds effort de guerre</p></a></div>
        <div style={{width:"75%"}}> <a href='/documents/session-volontaire2.pdf'> <p style={{backgroundColor:"yellow",borderRadius:"0.5vw",padding:"0.5vw",color:"#006003",textAlign:"center",marginBottom:"3vh"}}>Télécharger le formulaire de cession volontaire</p></a></div>
       <div  style={{width:"75%"}}> <a href='https://www.mobilisation.gov.bf/'> <p style={{backgroundColor:"yellow",borderRadius:"0.5vw",padding:"0.5vw",color:"#006003",textAlign:"center"}}>mobilisation.gov.bf</p></a></div>
        </div>
    </div>
    </div>
        
    </div>
  )
}

export default Soutient_patrioptique
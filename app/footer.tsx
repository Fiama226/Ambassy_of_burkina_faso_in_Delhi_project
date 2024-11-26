import React from 'react'
import { FaFacebookF,FaPhoneFlip,FaEnvelope,FaLocationPin,FaSquareXTwitter,FaSquareInstagram } from "react-icons/fa6";
import Image from 'next/image'
import { Divider, Box, Flex,Text } from '@mantine/core';
import styles from './responsive.module.css'

const Footer_header =()=>{

  return (
    <Divider
    my="xs"
    variant="dashed"
    labelPosition="center"
    size={"xl"}
    color='red'
    label={ 
      <>
        <Image src={"/images/3d_map_burkina_faso.png"} alt='' width={100} height={100}  />
       
    </>

  
    }
  />
 
  )
}
const BurkinaFaso_Armorial_Image=()=>{

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:"25px",backgroundColor:"#C1E899",borderRadius:"10px",flexDirection:"column",width:"100%" }}>
      <Image src={"/images/burkina_faso_armorial.jpg"} alt='' width={200} height={300} style={{height:"90%",width:"100%"}} />
        <Text style={{textAlign:"center"}}>Ambassade du Burkina Faso en Inde</Text>
        </div>
    )
}

const Copyright_message =()=>{

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem',backgroundColor:"red",height:"30px",marginTop:"30px"}}>
      <p>© Copyright 2024 - Embassy of Burkina Faso, New delhi, India</p>
    </Box>
  )
}

const Contact_us=()=>{

  return(
    <div style={{padding:"25px",backgroundColor:"#C1E899",borderRadius:"10px",width:"100%" }}>
      <Text style={{fontSize:"30px",fontWeight:"bold",marginBottom:"10px",wordBreak:"break-all"}}>contacts informations</Text>
      <Text style={{display:"flex",flexDirection:"row"}}> <FaPhoneFlip size={15} />+91-11- 2614 0630</Text>
      <Text style={{display:"flex",flexDirection:"row",flexWrap:"wrap",wordBreak:"break-all"}} > <FaEnvelope /> ambassadeburkinafasoindia@gmail.com </Text>
      <Text  style={{display:"flex",flexDirection:"row"}}>  <FaLocationPin />F-2/4, Vasant Vihar, New Delhi- </Text>      
    </div>
  )
}

const Operational_hours =()=>{
  return(
    <div style={{padding:"25px",backgroundColor:"#C1E899",borderRadius:"10px",width:"100%" }}>
      <Text style={{fontWeight:"bold",fontSize:"30px",marginBottom:"10px",whiteSpace:"break-spaces",wordBreak:"break-all"}}>Heures d'ouverture</Text>
      <Text><b>Lundi-Jeudi </b></Text>
      <Text>De 9h à 17h</Text>
      <Text><b>Vendredi</b></Text>
      <Text>De 9h à 14h</Text>
      <Text><b>Samedi et Dimanche</b></Text>
      <Text>Ferme</Text>
      <Text><b>jours feries en Inde et au Burkina Faso</b></Text>
      <Text>Ferme</Text>
      </div>

  )
}


const Useful_links=()=>{

  const data=[{
    id: 0,
    name:"Presidence du faso",
    link:"https://www.presidencedufaso.bf/",
    title:""
  },
  {
    id: 1,
    name:"La primature",
    link:"https://www.primature.gov.bf/accueil",
    title:""
  },
  {
    id: 2,
    name:"Ministere des affaires etrangeres",
    link:"https://www.mae.gov.bf/accueil",
    title:""
  },
  {
    id: 3,
    name:"Assemblee Legislative de transition",
    link:"https://www.assembleenationale.bf/",
    title:""
  },
  {
    id: 4,
    name:"office national du Tourisme Burkinabe",
    link:"https://www.ontb.bf/",
    title:""
  },]
  const rendered_component=data.map(item=> <a key={item.id} href={item.link}><Text>{item.name}</Text></a> )

  return (
    <div style={{display:"flex",flexDirection:"column",backgroundColor:"#C1E899",borderRadius:"10px",padding:"25px",width:"100%" }}>
    <Text style={{fontSize:"30px",fontWeight:"bold",textAlign:"center"}}> Liens utiles </Text>
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{listStyle:"none"}}>
    {rendered_component}
    </div>
    </div>
    </div>
  )
} 



function Footer() {
  return (
    <div style={{flexDirection:"column",backgroundColor:"green"}} >
      <Footer_header />
      <div className={styles.footer} >
      
     <BurkinaFaso_Armorial_Image />
     
       
       <Operational_hours />
       <Useful_links />
       <Contact_us />
     </div>

     <Copyright_message />


    </div>
  )
}

export default Footer
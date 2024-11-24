"use client"
import React from 'react'
import { Tabs,rem } from '@mantine/core';
import {FaLandmark, FaLandmarkFlag } from "react-icons/fa6";
import { MdAnnouncement } from "react-icons/md";
import { Timeline } from 'react-twitter-widgets'
import { Text } from '@mantine/core';

const Nouvelles_de_lambassade=()=>{

  const data=[{id:1,date:"30.09.2024",title:"Université d’été des jeunes de l’AES : le Président du Faso invite la jeunesse à faire échec à la manipulation",content:"",images_link:"" },
    {id:2,date:"28.09.2024",title:"Nonciature apostolique du Ghana : Monseigneur Julien KABORE traduit sa reconnaissance au Président du Faso",content:"",images_link:"" },
    {id:3,date:"28.09.2024",title:"Développement du Burkina Faso : les entrepreneurs de la diaspora réaffirment leur soutien au Chef de l’État",content:"",images_link:"" },
    {id:4,date:"25.09.2024",title:"Secteur de l’assurance : le gouvernement décide de la création d’une société de réassurance",content:"",images_link:"" },
  ]
  const renderednews=data.map(item=> {return(<div key={item.id} style={{borderBottom:"0.25px solid black",borderBottomColor:"#red",margin:30}}> <Text style={{color:"#88929d"}}>{item.date}</Text> <p>{item.title}</p></div>)})


  return(
       <div style={{backgroundColor:"antiquewhite", display:"flex", flexDirection:"column",width:"100%",alignSelf:"center",marginTop:"1vw",marginBottom:"1vw"}}> 
       {renderednews}
    </div>
  )
}





function page() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <div>
      <Tabs defaultValue="Embassy_news" variant='pills' color='yellow' style={{display:"grid",flexDirection:"column",justifyContent:"center"}}>
      <Tabs.List justify='center' style={{backgroundColor:"#ffec99",padding:"22px",width:"100%",justifySelf:"center",display:"flex"}}>
        <Tabs.Tab value="Embassy_news" leftSection={<FaLandmarkFlag style={iconStyle} />} style={{}}>
        Nouvelles de l'ambassade
        </Tabs.Tab>
        <Tabs.Tab value="BurkinaFaso_news" leftSection={<FaLandmark style={iconStyle} />}>
          Nouvelles du pays
        </Tabs.Tab>
        <Tabs.Tab value="government_announces" leftSection={<MdAnnouncement style={iconStyle} />}>
          Announces gouvernementales
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="Embassy_news" style={{display:"flex",flexDirection:"column"}}>
        <Nouvelles_de_lambassade />   
      </Tabs.Panel>

      <Tabs.Panel value="BurkinaFaso_news">
     
      <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'burkina24'
  }}
  options={{
    height: '800',
    chrome: "noheader, nofooter"
  }}
/>

      </Tabs.Panel>

      <Tabs.Panel value="government_announces">
  
      <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'sigbf'
  }}
  options={{
    height: '800',
    chrome: "noheader, nofooter"
  }}
/>

      </Tabs.Panel>


      </Tabs>

    </div>
  )
}

export default page
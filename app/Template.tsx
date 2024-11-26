"use client"
import { UnstyledButton,Text,Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Footer from "./footer"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useWindowScroll } from '@mantine/hooks';
import styles from "./responsive.module.css"
import { useMediaQuery } from '@mantine/hooks';

const Mobile_menu=()=>{
  const [opened, { open, close }] = useDisclosure(false);


  return(
    <div className={styles.menu}>

      <UnstyledButton onClick={open} style={{textAlign:"center",color:"yellow"}}>Menu</UnstyledButton>
      <Drawer
        opened={opened}
        onClose={close}
        offset={8} 
        radius="md"
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
    
      
        <Drawer.Overlay  style={{backgroundImage:`url("/images/background.jpg")`, backgroundSize:"10px 10px"}}>
        <div style={{backgroundColor:"#939597",marginTop:"25px"}}>
        <Text style={{textAlign:"center",fontSize:"25px",fontWeight:"bold"}} className={styles.title} >Ambassade du burkina faso a Delhi</Text>
        </div>
          <div style={{justifySelf:'right',display:"flex",flexDirection:"column",position:"absolute"}}>
            
            <a href='/'><p className={styles.headerbutton}>Acceuille</p></a>
            <a href='/Ambassade'><p className={styles.headerbutton}>Ambassade</p></a>
            <a href='/ActivitesConsulaire'><p className={styles.headerbutton}>Activites consulaires</p></a>
            <a href='/Burkina_Faso'><p className={styles.headerbutton}>Burkina Faso</p></a>
            <a href='/News'><p className={styles.headerbutton}>Nouvelles</p></a>


            </div>
        </Drawer.Overlay>
      </Drawer>
      
    </div>
  )
}

const Menu_items=()=>{

  const data=[{id:0,title :"Ambassade",items:[{id: 0,name:"L'ambassade",link:"#"},{id: 1,name:"Service de L'ambasssade",link:"#"},{id: 2,name:"Le personnel de l'ambassade",link:"Lepersonneldelambassade"},{id:3, name:"Consulats generaux",link:"#"},{id: 4,name:"liste anciens ambassadeurs du burkina en inde",link:"#"},{id: 5,name:"Presidence du faso",link:"#"}]},
  {id:1,title :"Activites consulaire",items:[{id: 0,name:"Visa",link:"#"},{id: 1,name:"Carte consulaire",link:"#"},{id: 2,name:"Passeport",link:"#"},{id:3, name:"Actes divers",link:"#"}]},
  {id:2,title :"Vivre en Inde",items:[{id: 0,name:"Presentation generale",link:"#"},{id: 1,name:"resider en Inde",link:"#"},{id: 2,name:"Conseils aux Voyageurs ",link:"#"},{id:3, name:"Etudier en Inde",link:"#"}]},
  {id:3,title :"Bienvenue au Burkina Faso",items:[{id: 0,name:"Présentation générale",link:"#"},{id: 1,name:"Gouvernement du Burkina Faso",link:"#"},{id: 2,name:"Textes officiels",link:"#"},{id:3, name:"Sites touristiques du Burkina Faso",link:"#"},{id: 4,name:"Aller au Burkina Faso",link:"#"},{id: 5,name:"Investir au Burkina Faso",link:"#"}]},
  {id:4,title :"Nouvelles",items:[{id: 0,name:"Actualités du Burkina Faso",link:"#"},{id: 1,name:"Actualités de la diaspora",link:"#"},{id: 2,name:"Communiqués",link:"#"},{id:3, name:"Evènements",link:"#"}]},


]

  const rendered_component=data.map(item=> <ul style={{padding:"5%"}} key={item.id} ><li> <b>{item.title}</b> <p>{item.items.map(i=><p key={i.id}><a href={i.link}>{i.name}</a></p>)}</p></li></ul> )

  return (
    <>
    <Image src="/images/img.jpg" width={50} height={50} alt="Picture of the author" ></Image>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>      
    <ul style={{listStyle:"none",display:"flex",flexDirection:"row"}}>
    {rendered_component}
    </ul>
    </div>
    </>
  )
} 

export function Template({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <div style={{position:"sticky",backgroundColor:"#740938",top:"0px",zIndex:100,height:"70px",alignItems:"center",display:"flex"}}>


            <Text style={{textAlign:"left"}} className={styles.title}>Ambassade du burkina faso a Delhi</Text>
    
            <div className={styles.menubigscreen}>
            
            <a href='/'><p className={styles.headerbutton}>Acceuille</p></a>
            <a href='/Ambassade'><p className={styles.headerbutton}>Ambassade</p></a>
            <a href='/ActivitesConsulaire'><p className={styles.headerbutton}>Activites consulaires</p></a>
            <a href='/Burkina_Faso'><p className={styles.headerbutton}>Burkina Faso</p></a>
            <a href='/News'><p className={styles.headerbutton}>Nouvelles</p></a>


            </div>
            </div>



      <div style={{backgroundImage:`url("/images/background.jpg")`, backgroundSize:"20px 20px"}}>
      <div style={{paddingTop:"20px"}}>
        {children}
        </div>

        <Mobile_menu />
        <Footer />
        </div>
        </div>

  );
}

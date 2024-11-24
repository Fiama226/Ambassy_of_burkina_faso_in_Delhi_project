"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { Flex,Card,Text } from '@mantine/core';
import Things_to_do_In_Burkina_Faso from './Things_to_do_In_Burkina_Faso'
import styles from '../responsive.module.css'


const data_of_Things_To_Visit=[
  {id:1,title:"SIAO",type:"Cultural tourism",image_source:"/images/Presentation_generale_du_burkina_Faso_images/SIAO.jpg",description:"je vais faire une descriptin ici"},
  {id:2,title:" les Domes de Fabedougou",type:"ECOTourisme",image_source:"/images/Presentation_generale_du_burkina_Faso_images/Domes_de_Fabedougou.jpg",description:"je vais faire une descriptin ici"},
  {id:3,title:"le cotton",type:"Business Tourism",image_source:"/images/Presentation_generale_du_burkina_Faso_images/cotton.jpg",description:"je vais faire une descriptin ici"},
]

const Left_part_with_Map=()=>{
  return(
      <div style={{width:"100%"}}>
      <iframe width="100%" height="650px"  style={{}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Burkina%20Faso&maptype=satellite" allowFullScreen></iframe>
      <Text>Le Burkina Faso est un pays situé en Afrique de l'Ouest, sans accès direct à la mer. Il partage ses frontières avec six pays : le Mali au nord, le Niger à l’est, le Bénin au sud-est, le Togo et le Ghana au sud, et la Côte d'Ivoire à l'ouest. Le Burkina Faso couvre une superficie d'environ 272 967 km² et compte une population d'environ 23 millions d'habitants.</Text>
      <Text>Le pays tire son nom du mot "Burkina" qui signifie "homme intègre" en moré, l'une des langues principales du pays, et "Faso", qui signifie "patrie" en dioula. Il est donc le "pays des hommes intègres". Sa capitale est Ouagadougou, une ville dynamique et culturelle, connue pour son accueil et son ambiance chaleureuse.</Text>
      <Text>Le Burkina Faso est un pays majoritairement rural, avec l'agriculture comme secteur clé de son économie. Les cultures principales incluent le coton, le maïs, le mil, le sorgho et le riz. L'élevage et l'exploitation des ressources naturelles (comme l'or) contribuent également à son économie, bien que ce dernier secteur ait des impacts environnementaux et sociaux complexes. Le pays cherche à diversifier son économie, notamment par le développement des infrastructures et du secteur des services.</Text>
      <Text>Le Burkina Faso est également reconnu pour sa riche diversité culturelle. Il abrite de nombreux groupes ethniques, tels que les Mossis, les Gourmantchés, les Bobo et bien d'autres, chacun avec ses propres langues, coutumes et traditions. Le pays est aussi un centre culturel important en Afrique, célèbre pour ses festivals, comme le FESPACO (Festival Panafricain du Cinéma et de la Télévision de Ouagadougou), qui est l'un des plus grands événements cinématographiques en Afrique.</Text>
      <Text>Le Burkina Faso a une histoire politique marquée par des luttes pour l'indépendance, ainsi que par des transitions démocratiques et des périodes de régimes militaires. Le pays a été un symbole de la lutte pour la justice sociale, notamment sous la présidence de Thomas Sankara, qui a gouverné de 1983 à 1987, avant d'être assassiné lors d'un coup d'État. Son héritage reste une source d'inspiration pour beaucoup de Burkinabè et d'autres Africains.</Text>
      <Text>Le Burkina Faso est un pays francophone, et la religion principale est l'Islam, suivie par le Christianisme et des croyances traditionnelles africaines. Il est un acteur important au sein de la communauté économique de l'Afrique de l'Ouest (CEDEAO) et participe activement à la coopération régionale et internationale.</Text>
      <Text>Bien que le pays fasse face à des défis importants, notamment en matière de sécurité (à cause des groupes armés terroristes dans certaines régions) et de développement, il reste résilient grâce à la solidarité de ses habitants et à son engagement vers un avenir de paix, de stabilité et de prospérité pour tous.</Text>
  </div>
  )
}
const Burkina_faso_in_1mn=()=>{
  const data=[{id:1,title:"Capitale",information:"Ouagadougou",image:"/icons/Capitale.png"},
      {id:2,title:"Population",information:"90 millions",image:"/icons/people-together.png"},
      {id:3,title:"Language",information:"Francais, Moore,DIOULA,....",image:"/icons/conversation.png"},
      {id:4,title:"code d'appel",information:" +226",image:"/icons/code_country.png"},
      {id:5,title:"climat",information:" sunny, hot, and dry",image:"/icons/cloudy.png"},
      {id:6,title:"drapeau",information:"Rouge,etoile dore , vert",image:"/icons/burkina-faso.png"},
      {id:7,title:"time Zone",information:" UTC +",image:"/icons/time-zone.png"},
      {id:8,title:"Monnaie",information:"le FCFA",image:"/icons/money.png"},
      {id:9,title:"president",information:"Ibrahim Traoré",image:"/images/President.jpeg"},
      {id:10,title:"premier ministre",information:"Dr Apollinaire Kyelem de Tambèla",image:"/images/premier_ministre.jpeg"}
      
  ]

  return(
      <div style={{width:"100%"}} className={styles.BurkinaFasoinfos}>
          {
              data.map(item=>{

                  return(<div key={item.id}>

<div className='titleandinformation' style={{textAlign:"center",display:"flex", flexDirection:"column",alignItems:"center",borderTopLeftRadius:"30px",borderBottomRightRadius:"30px",border:"2px solid #3498db",width:"100%",height:"300px",backgroundColor:"#003135"}}>
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <div style={{width:"90%",height:"75%",display:"flex",alignSelf:"center"}}>
  <Image src={item.image} alt="image" width={150} height={150} style={{width:"95%",height:"100%",marginTop:"10px",alignSelf:"center",display:"flex",borderRadius:"10px"}}/>
    </div>    
              <div style={{color:"#3498db",marginTop:"10px"}}>
                 <Text>  {item.title}</Text>
                  <Text style={{color:"#f68119"}}> {item.information}</Text>
              </div>
              </div>
          </div>
                  
                  </div>)
              })
          }

      </div>
  )
}


function page() {
  return (
    <div >
      <div style={{backgroundColor:"#ffec99",borderImage:`url(/images/Titlle_border_picture.jpg) 20% round`,borderColor:"red",borderImageWidth:"10px",marginBottom:"20px",padding:"15px",width:"75%",justifySelf:"center",display:"flex",margin:"auto",flexDirection:"column"}}><Text style={{fontWeight:"bold",fontSize:"55px",textAlign:"center",color:`linear-gradient(45deg, red, yellow, green)`}}>Burkina Faso</Text>
    <div>
    <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      "Burkina Faso terre d'acceuil et de traditions", 
      1000,
      "Burkina Faso pays des hommes integres",
      1000,
      'Burkina Faso pays de culture',
      1000,
      "Burkina Faso terre d'opportinutes",
      1000,
      'Burkina Faso  la Destination a ne pas manqué',
      500,
    ]}
    speed={50}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
  />
  </div>
    </div>
 
      
    <div className={styles.BurkinaFaso} style={{marginTop:"32px"}}>
    <Left_part_with_Map />
    <Burkina_faso_in_1mn />
    </div>
    
    <Things_to_do_In_Burkina_Faso />

    </div>
  )
}

export default page
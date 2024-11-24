import React from 'react'
import Image from 'next/image'
import styles from '../responsive.module.css'
import { Text } from '@mantine/core'
const News_component = ()=>{
    const data=[{id:1,date:"30.09.2024",title:"Université d’été des jeunes de l’AES : le Président du Faso invite la jeunesse à faire échec à la manipulation",content:"",images_link:"" },
      {id:2,date:"28.09.2024",title:"Nonciature apostolique du Ghana : Monseigneur Julien KABORE traduit sa reconnaissance au Président du Faso",content:"",images_link:"" },
      {id:3,date:"28.09.2024",title:"Développement du Burkina Faso : les entrepreneurs de la diaspora réaffirment leur soutien au Chef de l’État",content:"",images_link:"" },
      {id:4,date:"25.09.2024",title:"Secteur de l’assurance : le gouvernement décide de la création d’une société de réassurance",content:"",images_link:"" },
    ]
  
  const renderednews=data.map(item=> {return(<div key={item.id} style={{borderBottom:"0.25px solid black",margin:"20px"}}> <Text style={{color:"#88929d"}}>{item.date}</Text> <Text>{item.title}</Text></div>)})
      
    return(
      <div className={styles.components}>
        <div className={styles.eachblock}>
        <div style={{width:"100%",position:"relative"}}> 
        <Text style={{position:"relative",textAlign:"right",color:"blue",marginRight:"15px"}}> toutes les actualites</Text>
          <div className="Title" style={{display:"flex",flexDirection:"row"}}><Text style={{fontWeight:"bold",fontSize:"32px",marginBottom:"10px"}}>Les nouvelles de l'ambassade</Text> </div> 
        {renderednews}
        </div>
  
        <div style={{width:"100%",height:"100%"}}> <Image src={"/images/Monuments_des_Martyrs.jpg"} alt="monument des martyrs" width={1000} height={1000} style={{width:"100%",height:"100%"}} />  </div>
        </div>
  
      </div>
  
  
    )
  
  }
export default News_component
"use client"
import React from 'react'
import Image from 'next/image'
import { Flex,Card,Text,Tabs } from '@mantine/core'
import Faq_questions_and_answers from './Faq_questions_and_answers'
import Reseau_consulaire from './Reseau_consulaire'
import Ambassador from './Ambassador'
import styles from '../responsive.module.css'



const Le_personel_de_Lambassade=() =>  {
  const dataOfEmployee =[{id:1, name:"M. Aimé Yves BADO",occupation:" Ministre conseiller",image:"AimeYvesBADO.jpg"},
      {id:2,name:"Mr. Jean baptiste GAGRE",occupation:" deuxieme conseiller",image:"Jean_baptiste_GAGRE.png"},
      {id:3,name:"Mr OUEDRAOGO Mahama",occupation:" Trésorier",image:"OUEDRAOGO_Mahama.jpeg"},
      {id:4,name:"M. Coulibaly Hervé",occupation:"Attaché",image:"Coulibaly_Herve.png"},
      {id:5,name:"Ms Somadula Sangeeta",occupation:"Secrétaire particulier de l'ambassade",image:"Somadula_Sangeeta.png"},
      {id:6,name:" Mr Chander Subhash",occupation:"Protocole",image:"Chander_Subhash.png"},
      {id:7,name:"Mr Kumar Sanjeev",occupation:"Chauffeur",image:"Kumar_Sanjeev.png"},
      {id:8,name:"Mr Biswa Kiran",occupation:"Chauffeur",image:"Biswa_Kiran.png"},
      {id:9,name:"Mr Kumar Rakesh",occupation:"Chauffeur",image:"Kumar_Rakesh.png"},
      {id:10,name:"Mr Singh Sukhdev",occupation:"Chauffeur",image:"Singh_Sukhdev.png"},

  ]
return (
  <div className={styles.components}>
        <Text style={{fontWeight:"bold",fontSize:"55px",textAlign:"center",marginBottom:"18px"}}>Le Personnel de l'ambassade</Text>
  <div className={styles.stylepersonneldelambassade} >
      {dataOfEmployee.map(item => <div  key={item.id} className={styles.cardofworker} style={{backgroundColor:"#596e79",display:"flex",flexDirection:"column",borderRadius:"10px"}} ><div style={{ width: "200px", height: "200px", position: "relative", display: "flex", alignSelf: "center",marginTop:"15px"}}><Image style={{ borderRadius: "50%", display: "flex", textAlign: "center" }} fill={true} src={`/images/employee_photo/${item.image}`} alt='' /></div><Text style={{ textAlign: "center" }}>{item.name}</Text><Text style={{ textAlign: "center" }}>{item.occupation}</Text></div>)}  
  </div>
  </div>
)
}

const About_The_Embassy=()=>{
  return (
    <div className={styles.components}>
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:"55px",marginBottom:"18px"}}>L'ambassade</Text>
      <div className={styles.eachblock} style={{width:"100%", alignContent:"center",alignSelf:"center"}} wrap={"wrap"} >

        <div style={{width:"100%"}}>
          <Text>L’ambassade du Burkina Faso à New Delhi est la mission diplomatique du Burkina Faso En Inde. L’ambassade est située dans le quartier ‘’Vasant Vihar’’ et est sous la direction de son excellence monsieur l'ambassadeur Boniface Some </Text>
          <Text>La Mission s’est engagée à tisser des liens En Inde pour le développement économique du Burkina Faso. L’ambassade sert également de passerelle pour engager les Burkinabés vivant en Inde et à l’étranger, explorer l’éducation et la culture et investir dans les marchés émergents.
          </Text>

          <br/><br/>
          <Text style={{fontWeight:"bold"}}>Adresse</Text>
          <Text>F-2/4, Vasant Vihar </Text>
          <Text>New Delhi- 110057 </Text>
          <Text>Téléphone : +91-11-12640641/42</Text>
          <Text>Fax: +91-11-26140630 </Text>
          <Text>Email : ambassadeburkinafasoindia@gmail.com</Text>
        </div>
        <div style={{width:"100%",display:"grid"}}>
        <iframe style={{justifySelf:"center"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.2463468585483!2d77.1595170749541!3d28.559512687393838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d577a03c69b%3A0xa0b574164f76fdc6!2sEmbassy%20of%20Burkina%20Faso%20in%20Delhi!5e1!3m2!1sen!2sus!4v1731570652492!5m2!1sen!2sus" width="400" height="500"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </div>
  )
}



function page() {
  return (
    <div>
      <Tabs defaultValue="L'ambassadeur" orientation="vertical">
        <Tabs.List style={{backgroundColor:"#ffec99",width:"30%", height:"50%"}}>
          <Tabs.Tab value="L'ambassadeur" style={{width:"100%"}} >
          <Text style={{whiteSpace:"wrap"}}> L'ambassadeur </Text>
          </Tabs.Tab>
          <Tabs.Tab value="Le_personel_de_Lambassade" style={{width:"100%"}} >
            <div>
          <Text style={{whiteSpace:"wrap"}}> Le personnel de l'ambassade </Text>
          </div>
          </Tabs.Tab>
          <Tabs.Tab value="About_The_Embassy"  style={{width:"100%"}}>
            L'ambassade
          </Tabs.Tab>
          <Tabs.Tab value="Reseau_consulaire" style={{width:"100%"}} >
            Le Reseau consulaire
          </Tabs.Tab>
          <Tabs.Tab value="Faq_questions_and_answers" style={{width:"100%"}} >
            Faq
          </Tabs.Tab>
        </Tabs.List>
  
        <Tabs.Panel value="L'ambassadeur"  style={{display:"flex",justifyContent:"center",width:"70%"}}>
        <Ambassador />
        </Tabs.Panel>
  
        <Tabs.Panel value="Le_personel_de_Lambassade" style={{display:"flex",justifyContent:"center",width:"70%"}}>
        <Le_personel_de_Lambassade />
        </Tabs.Panel>
  
        <Tabs.Panel value="About_The_Embassy" style={{display:"flex",justifyContent:"center",width:"70%"}}>
        <About_The_Embassy />
        </Tabs.Panel>

        <Tabs.Panel value="Reseau_consulaire" style={{display:"flex",justifyContent:"center",width:"70%"}}>
        <Reseau_consulaire/>
        </Tabs.Panel>

        <Tabs.Panel value="Faq_questions_and_answers" style={{display:"flex",justifyContent:"center",width:"70%"}}>
        <Faq_questions_and_answers/>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

export default page
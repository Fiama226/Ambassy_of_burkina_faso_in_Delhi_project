import React from 'react'
import { Text,Divider } from '@mantine/core'
import Image from 'next/image'
import { Divider_of_components } from '@/app/page'
import { Breadcrumbs, Anchor } from '@mantine/core';

const Links=()=>{
  return(
    <Breadcrumbs separator="->">
      <Anchor href="/">Accueil</Anchor>
      <Anchor href="/News">Nouvelles</Anchor>
      <Anchor >Coopération scientifique</Anchor>
    </Breadcrumbs>
  )
}
function page() {
  return (
    <div style={{width:"80%",display:"flex",flexDirection:"column",justifySelf:"center",marginLeft:"10vw"}}>
      <Links />
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:"55px"}}>Coopération scientifique</Text>
      <Text style={{textAlign:"center"}}>15 November 2024 </Text>
      <Image
        alt="Embassy of Burkina Faso in India"
        src="/images/embassyNewsPhoto/1718190414.jpeg"
        width={400}
        height={600}
        style={{display: 'flex',alignSelf:"center"}}
      />

      <Divider_of_components />

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam autem consequatur praesentium modi nemo eaque fugit, laboriosam ipsam odit ex facere similique aspernatur incidunt sunt accusantium tempora? Minima, ab minus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex vel tempora quo rerum, iusto pariatur perspiciatis sed praesentium omnis accusamus. Deserunt iusto saepe itaque natus praesentium fuga vero. Ut?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat laudantium facere ea fugiat magni, omnis fugit dolor rerum hic iure vero cupiditate? Maxime accusantium beatae aperiam, corporis esse delectus.
      </Text>








    </div>
  )
}

export default page
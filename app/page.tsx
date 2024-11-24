import React from 'react';
import Image from 'next/image';
import { Divider,Text } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import Soutient_patrioptique from "./HomepageComponents/Soutient_patrioptique";
import AmbassadorComponent from "./HomepageComponents/AmbassadorComponent";
import News_component from "./HomepageComponents/News_component";
import Time_India_Burkina from "./HomepageComponents/Time_India_Burkina";
import Entrez_en_contacte from "./HomepageComponents/Entrez_en_contacte";


export const Divider_of_components=()=>{

  return(
    <Divider
    my="xl"
    size={"sm"}
    variant="dashed"
    labelPosition="center"
    label={
      <>
      <Image src={"/images/Coat_of_arms_of_Burkina_Faso.svg"} height={50} width={50} alt=""  />
      </>
    }
    
    />
  )
}



export default function HomePage() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <Time_India_Burkina />
    <Divider_of_components />
    <AmbassadorComponent />
    <Divider_of_components />
    <News_component />
    <Divider_of_components />
    <Soutient_patrioptique />
    <Divider_of_components />
    <Entrez_en_contacte />
      
    </div>
  );
}
"use client"
import React from 'react'
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import '@mantine/carousel/styles.css';

import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';
import Time_India_Burkina from "../HomepageComponents/Time_India_Burkina"
import { link } from 'fs';

const data = [
  {
    image:'/images/Presentation_generale_du_burkina_Faso_images/Sculpture_sur_granit_de_Laongo.jpg',
    title: 'Sculpture sur granit de Laongo',
    category: 'Sculpture',
    link: 'https://www.ontb.bf/visites/sites-touristiques/sculpture-sur-granit-de-laongo'
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/les_dômes_de_Fabedougou.jpg',
    title: 'les dômes de Fabédougou',
    category: 'Relief',
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/Parc_national_de_Deux_Balés.jpg',
    title: 'Parc national de Deux Balés',
    category: 'Parc animalier',
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/poterie.jpg',
    title: 'poterie',
    category: 'Artisanat',
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/Fespaco.jpg',
    title: 'Fespaco',
    category: 'Evènements',
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/Vannerie.jpg',
    title: 'Vannerie',
    category: 'Artisanat',
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/Fasodanfani.jpg',
    title: 'Faso danfani',
    category: 'Artisanat',
  },
  {
    image:
      '/images/Presentation_generale_du_burkina_Faso_images/GrandeMosquéedeBobDioulasso.jpg',
    title: 'La Grande Mosquée de Bobo-Dioulasso.jpg',
    category: 'Architecture',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          En Savoir plus ...
        </Button>
      </Paper>
    );
  }
  
  
function Things_to_do_In_Burkina_Faso() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
          <Card {...item} />
        </Carousel.Slide>
      ));
  return (
    <div style={{display:"flex",flexDirection:"column"}} >
        <p style={{fontSize:"55px", fontWeight:"bold",textAlign:"center",borderImage:`url(/images/Titlle_border_picture.jpg) 20% round`,borderImageWidth:"10px",width:"75%",backgroundColor:"#ffec99",alignSelf:"center"}}>Sites Touristiques</p>

        <Carousel
      slideSize={{ base: '100%', sm: '25%' }}
      slideGap={{ base: 'xs', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>




    </div>
  )
}

export default Things_to_do_In_Burkina_Faso
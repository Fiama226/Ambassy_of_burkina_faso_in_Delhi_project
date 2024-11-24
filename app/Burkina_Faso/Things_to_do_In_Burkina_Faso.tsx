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
    category: 'nature',
    link: 'https://www.ontb.bf/visites/sites-touristiques/sculpture-sur-granit-de-laongo'
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
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
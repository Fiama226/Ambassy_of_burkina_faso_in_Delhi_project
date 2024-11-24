"use client";

import React from 'react';



import '@mantine/carousel/styles.css';



import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Card, Flex, Grid, Stack, Text } from '@mantine/core';
import styles from '../responsive.module.css';

const Time_date = () => {
  const [CurrentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 100);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <Text style={{ fontSize: '50px', fontWeight: 'bold' }}>
      Ambassade du Burkina Faso à New Delhi
      </Text>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%',height:"100%",margin:"10px" }}>
          <div style={{width:"100%",height:"75%"}}>
          <Image
            src="/images/Flag_of_India.svg"
            width={250}
            height={150}
            alt="burkina_faso_flag"
            style={{ width: '100%', height: '100%' }}
          />
          </div>

          <Text style={{ textAlign: 'center', margin: '0.25vw' }}>New Delhi,India</Text>
          <Text style={{ textAlign: 'center', margin: '0.25vw' }}>
            {CurrentTime.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'Asia/Kolkata',
            })}
          </Text>
          <p style={{ textAlign: 'center', margin: '0.25vw' }}>
            {CurrentTime.toLocaleString('de-DE', {
              hour: '2-digit',
              minute: 'numeric',
              timeZoneName: 'short',
              second: '2-digit',
              hour12: false,
              timeZone: 'Asia/Kolkata',
            })}
          </p>
        </div>

        <div style={{ width: '50%',height:"100%",margin:"10px"}}>
          <div style={{width:"100%",height:"75%"}}>
            <Image
              src="/images/Flag_Burkina_Faso.jpg"
              width={250}
              height={150}
              alt="burkina_faso_flag"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <p style={{ textAlign: 'center', margin: '0.25vw' }}>Ouagadougou,Burkina Faso</p>
          <p style={{ textAlign: 'center', margin: '0.25vw' }}>
            {CurrentTime.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'Africa/Ouagadougou',
            })}
          </p>
          <p style={{ textAlign: 'center', margin: '0.25vw' }}>
            {CurrentTime.toLocaleString('en-US', {
              hour: '2-digit',
              minute: 'numeric',
              timeZoneName: 'short',
              second: '2-digit',
              hour12: false,
              timeZone: 'Africa/Ouagadougou',
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

const Country_caroussel=()=>{
    const autoplay = useRef(Autoplay({ delay: 2000 }));


    return(
        <div style={{width:"100%"}} >
             <Carousel
      withIndicators
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      
    >
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/1.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/2.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/3.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/4.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/5.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/6.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/7.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/8.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/9.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
      <Carousel.Slide style={{backgroundImage:`url(/images/SliderImages/10.jpg)`, backgroundSize:"100% 100%" , backgroundRepeat:"no-repeat"}}></Carousel.Slide>
    </Carousel>


        </div>
    )
}

function Time_India_Burkina() {
  return (
    <div className={styles.components} >
    <div className={styles.eachblock}  >
              <div style={{width:"100%"}} className={styles.components}><Time_date /></div>
              <div style={{width:"100%"}} className={styles.components}><Country_caroussel /></div>      
    </div>
    </div>
  )
}

export default Time_India_Burkina
import React from 'react'
import { Card } from '@mantine/core'
import Image from 'next/image'
import { Text } from '@mantine/core'
import styles from '../responsive.module.css'

function Ambassador() {
  return (
    <div className={styles.components}>
            <p style={{fontWeight:"bold", fontSize:"50px",textAlign:"center"}}>L'ambassadeur</p>
    <div className={styles.eachblock}>
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",height:"100%"}}> <Image  src={"/images/burkina_ambassador.jpeg"} width={350} height={500} alt='' style={{width:"90%",height:"90%"}}/></div>
        <div style={{width:"100%",height:"100%"}}>
       <Text>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium mollitia aut repellendus sint aliquam libero obcaecati praesentium. Provident eos qui beatae, quia voluptas veritatis dolor itaque necessitatibus deserunt ad?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium mollitia aut repellendus sint aliquam libero obcaecati praesentium. Provident eos qui beatae, quia voluptas veritatis dolor itaque necessitatibus deserunt ad?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium mollitia aut repellendus sint aliquam libero obcaecati praesentium. Provident eos qui beatae, quia voluptas veritatis dolor itaque necessitatibus deserunt ad?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium mollitia aut repellendus sint aliquam libero obcaecati praesentium. Provident eos qui beatae, quia voluptas veritatis dolor itaque necessitatibus deserunt ad?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium mollitia aut repellendus sint aliquam libero obcaecati praesentium. Provident eos qui beatae, quia voluptas veritatis dolor itaque necessitatibus deserunt ad?
          </Text> </div>
        
          </div>
    </div>
  )
}

export default Ambassador
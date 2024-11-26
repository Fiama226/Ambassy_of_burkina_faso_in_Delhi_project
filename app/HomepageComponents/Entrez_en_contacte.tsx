"use client"
import React from 'react'
import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import styles from '../responsive.module.css'


function Entrez_en_contacte() {
    const form = useForm({
        initialValues: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        validate: {
          name: (value) => value.trim().length < 2,
          email: (value) => !/^\S+@\S+$/.test(value),
          subject: (value) => value.trim().length === 0,
        },
      });
    
      return (
        <div className={styles.components}>
        <form onSubmit={form.onSubmit(() => {})} style={{width:"100%",alignSelf:"center",padding:"32px"}}>
          <Title
            order={2}
            size="55px"
            style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)',wordBreak:"break-all" }}
            fw={900}
            ta="center"
          >
            Contactez nous
          </Title>
    
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Nom"
              placeholder="veillez entrez votre nom "
              name="name"
              variant="filled"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Votre email"
              name="email"
              variant="filled"
              {...form.getInputProps('email')}
            />
          </SimpleGrid>
    
          <TextInput
            label="Sujet"
            placeholder="Le sujet de votre message"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps('subject')}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="votre message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('message')}
          />
    
          <Group justify="center" mt="xl">
            <Button type="submit" size="md">
              Envoyez le message
            </Button>
          </Group>
        </form>
        </div>
      );
    }
export default Entrez_en_contacte
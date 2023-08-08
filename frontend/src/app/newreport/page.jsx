'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { Container, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useRouter } from "next/navigation";

export default function crearreporte() {
  const [username, setUsername] = useState('');
  const [fecha, setFecha] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [idImplemento, setIdImplemento] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/crearreporte', {
        username,
        fecha,
        observaciones,
        idImplemento
      });
        if(response.status==200) return router.push('/report')
        console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      position='center'
      display='flex'
      top='300%'
      left='37%'
      flexDirection='column'
      justifyContent='center'
      height='60vh'
      
    >
      <Head>
        <title>Crear Reporte</title>
        <h2>Ingrese sus datos</h2>
      </Head>
      <Heading style={{ fontFamily: 'Arial', fontSize: '30px'  }} textAlign='center' >Ingresar nuevo reporte</Heading>
      <form onSubmit={handleSubmit}>
        <br></br>
        <FormControl>
          <FormLabel>Nombre de usuario</FormLabel>
          <Input type='text' name='Username' placeholder='Ej: Eduardo' value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Id implemento</FormLabel>
          <Input type='text' name='Id' placeholder='Ej: 1234' value={idImplemento} onChange={(e) => setIdImplemento(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Fecha</FormLabel>
          <Input type='text' name='Fecha' placeholder='Ej: 23/07/2023' value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Observaciones</FormLabel>
          <Input type='text' name='Oberservaciones' placeholder='Ej: La sierra dejo de funcionar' value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
        </FormControl>

        <Button 
        type='submit' 
        position='absolute' 
        top='90%' 
        left='50%' 
        transform='translate(-50%, -50%)' 
        colorScheme='green' 
        size='md'
        width='150px'
        alignContent='left'>
          Enviar
        </Button>
      </form>
    </Container>
  );
}
'use client'
import React, { useState} from 'react';
import axios from 'axios';
import { AxiosError } from 'axios';
import { Container, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useRouter } from "next/navigation";
import Link from 'next/link';



export default function login() {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:3001/login',{
        rut,
        password
      });

      if(response.status == 200) return router.push('/')

    } catch (error) {
      console.log(error)
      if(error instanceof AxiosError){
        const errorMessage = error.response.data.message;
        setError(errorMessage);
      }
    }
}
      
  return (
    
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="45vh"
    >
      <h1 style={{ fontFamily: 'Arial', fontSize: '24px' }}>Inicio de Sesión</h1>
  
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Rut</FormLabel>
          <Input type='text' placeholder='Ej: XX.XXX.XXX-X' value={rut} onChange= {(e) => setRut(e.target.value)} />
        </FormControl>

        <FormControl style={{ width: "350px" }}>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' placeholder='*********'value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>

        

        {error && <div style={{ color: 'red', fontWeight: 'bold', marginTop: '3px' }}>{error}</div>}

        <br />
        <Button
         type='submit'
         position='absolute'
         top='77%'
         left='54%'
         transform='translate(-59%, -50%)'
         colorScheme='teal'
         alignContent='left'
         size='md'
         backgroundColor='#4caf50'
        >
          Iniciar Sesión
        </Button>
      <Link href="/register">
        <Button
         
         position='absolute'
         top='77%'
         left='46.7%'
         transform='translate(-50%, -50%)'
         colorScheme='teal'
         alignContent='left'
         size='md'
         backgroundColor='#4caf50'
        >
          Registrarse
        </Button> 
      </Link>
      </form>
    </Container>
  );
  }

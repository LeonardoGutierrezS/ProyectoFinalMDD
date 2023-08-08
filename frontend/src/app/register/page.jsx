'use client'
import React, { useState} from 'react';
import axios from 'axios';
import { AxiosError } from 'axios';
import { Container, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useRouter } from "next/navigation";



export default function register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rut, setRut] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register',{
        username,
        password,
        rut
      });

      
      if(response.status == 200) return router.push('/login')
     

    } catch (error) {
      console.log(error)
      if(error instanceof AxiosError){
        const errorMessage = "Es obligatorio llenar todos los campos"
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
      <h1 style={{ fontFamily: 'Arial', fontSize: '24px' }}>Registro de usuarios</h1>
        <br></br>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Nombre de usuario</FormLabel>
          <Input type='text' placeholder='Ej: Joaquin' value={username} onChange= {(e) => setUsername(e.target.value)} />
        </FormControl>
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
         top='89%'
         left='50%'
         transform='translate(-50%, -50%)'
         colorScheme='teal'
         alignContent='left'
         size='md'
         backgroundColor='#4caf50'
        >
          Registrarse
        </Button>
      </form>
    </Container>
  );
  }
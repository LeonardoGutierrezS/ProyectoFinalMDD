'use client';
import ReportBox from '@/components/ReportBox';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Heading } from '@chakra-ui/react';

export default function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/reportes');
        setReports(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
  display='flex'
  flexDirection='column'
  justifyContent='center'
  gap={6}
  mt={10}
>
  <Heading as='h1' size='xl' mb={4} textAlign='center'>
    Reportes
  </Heading>

  {reports ? (
    reports.map((report) => {
      return (
        <ReportBox
          key={report.id}
          username={report.username}
          observaciones={report.observaciones}
          fecha={report.fecha}
        />
      );
    })
  ) : (
    <Box>
      <Heading>No se recibieron los reportes disponibles...</Heading>
    </Box>
  )}
</Container>

  );
}
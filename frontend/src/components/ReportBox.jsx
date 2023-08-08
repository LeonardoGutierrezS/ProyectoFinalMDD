import { Box } from "@chakra-ui/react";

export default function ReportBox({
  username,
  observaciones,
  fecha,
}) {
  return (
    <Box
      p={4}
      bg={"gray.100"}
      border={2}
      borderRadius={4}
      display={"flex"}
      flexDirection={"column"}
      maxW={"60ch"}
    >
      <Box>
        <b>Nombre: </b>: {username}
      </Box>
      <Box>
        <b>Observaciones</b>: {observaciones}
      </Box>
      <Box>
        <b>Fecha</b>: {fecha}
      </Box>
    </Box>
  );
}
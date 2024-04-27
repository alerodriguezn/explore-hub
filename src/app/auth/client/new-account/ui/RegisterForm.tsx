"use client";

// Se puede usar MUI con Formik
// Revisar esto después: https://formik.org/docs/examples/with-material-ui

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisterFormClient() {

  const router = useRouter()

  return (
    <div className="mb-6">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4px",
          height: "100%",
          gap: "24px",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="w-full flex flex-col items-center justify-center  ">
          <TextField
            required
            id="name"
            label="Nombre"
            variant="outlined"
            placeholder="Carlos"
            size="medium"
          />

          <TextField
            required
            id="lastName"
            label="Apellido"
            variant="outlined"
            placeholder="Pérez"
          />

          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            placeholder="jonhdoe@email.com"
          />

          <TextField
            required
            id="phone"
            label="Teléfono"
            variant="outlined"
            placeholder="+52 1 55 1234 5678"
          />

          <TextField
            required
            id="password"
            label="Contraseña"
            variant="outlined"
            type="password"
          />
          <TextField
            required
            id="confirmPassword"
            label="Confirmar contraseña"
            variant="outlined"
            type="password"
          />
        </div>
      </Box>
      <Button
        sx={{
          borderRadius: "18px",
          backgroundColor: "#D97227",
          color: "white",
          width: "100%",
        }}
        size="medium"
        onClick={() => router.push("/home/")}
      >
        Registrarse
      </Button>
    </div>
  );
}

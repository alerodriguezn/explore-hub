"use client";

// Se puede usar MUI con Formik
// Revisar esto después: https://formik.org/docs/examples/with-material-ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

  const router = useRouter()
  return (
    <div className="mb-4">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          height: "100%",
          gap: "24px",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="w-full flex flex-col items-center justify-center ">
          <TextField
            required
            id="name"
            label="Nombre"
            variant="outlined"
            placeholder="Carlos"
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

          <FormControl sx={{ m: 1, minWidth: 240 }} size="medium">
            <InputLabel id="personType">Tipo Persona</InputLabel>
            <Select
              labelId="personType"
              id="personTypeSelect"
              label="Tipo Persona"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Example</MenuItem>
              <MenuItem value={20}>Example</MenuItem>
              <MenuItem value={30}>Example</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <TextField
            required
            id="companyName"
            label="Nombre de la empresa"
            variant="outlined"
            placeholder="Mi empresa"
          />

          <TextField
            required
            id="nit"
            label="NIT Empresarial"
            variant="outlined"
            placeholder="9003149989"
          />

          <FormControl sx={{ m: 1, minWidth: 240 }} size="medium">
            <InputLabel id="city">Ciudad</InputLabel>
            <Select labelId="city" id="citySelect" label="Ciudad">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Bogotá</MenuItem>
              <MenuItem value={20}>Medellín</MenuItem>
              <MenuItem value={30}>Example</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 240 }} size="medium">
            <InputLabel id="businessSector">Sector Empresarial</InputLabel>
            <Select
              labelId="businessSector"
              id="businessSectorSelect"
              label="Sector Empresarial"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Hotelero</MenuItem>
              <MenuItem value={20}>Example</MenuItem>
              <MenuItem value={30}>Example</MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            id="totalServices"
            label="Total de Servicios"
            type="number"
            variant="outlined"
            placeholder="4"
          />

          <FormControl sx={{ m: 1, minWidth: 240 }} size="medium">
            <InputLabel id="category">Categoría</InputLabel>
            <Select labelId="category" id="cateogorySelect" label="Categoría">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Alimentos</MenuItem>
              <MenuItem value={20}>Example</MenuItem>
              <MenuItem value={30}>Example</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 240 }} size="medium">
            <InputLabel id="subCategory">SubCategoría</InputLabel>
            <Select
              labelId="subCategory"
              id="subCateogorySelect"
              label="SubCategoría"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Alimentos</MenuItem>
              <MenuItem value={20}>Example</MenuItem>
              <MenuItem value={30}>Example</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
      <Button
        onClick={() => router.push("/home/")}
        sx={{
          borderRadius: "18px",
          backgroundColor: "#D97227",
          color: "white",
          width: "100%",
          height: "40px",
          marginTop: "0px",
        }}
        size="medium"
      >
        Registrarse
      </Button>
    </div>
  );
}

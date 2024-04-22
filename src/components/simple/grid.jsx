"use client";
import * as React from 'react';
import { experimentalStyled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { width } from '@mui/system';
import  styled  from 'styled-components'

const Item = experimentalStyled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  width:"fit-content;",
  borderRadius:"8px",
  color: theme.palette.text.secondary,
  position:"relative",
  alignSelf:"center",
}));
const Imagen = styled.img`
    border-radius: 10px;
    width: 310px;
    height: 250px;
    object-fit:cover;
    @media (max-width: 1280px) and (min-width: 768px) {
  width: 210px;
  height: 150px;
}

`;
const Content = styled.div`
    margin:10px
`;

export default function ResponsiveGrid({ data }) {
  // Props: data (Array<{ foto: string, fecha: string, nombre: string, locacion: string }>) - Array of objects containing details for each grid item including photo URL, date, name, and location.

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 16 }}>
        {data.map((data, index) => (
          <Grid xs={2} sm={4} md={4} key={index} style={{display:"flex",flexDirection:"column",marginBottom:"20px"}}>
            <Item style={{display:"flex",justifyContent:"center", padding:"0",margin:"0",textAlign:"left"}}>
              <div>
                <Imagen
                  src={data.foto}
                  alt="Foto"
                />
                <Content>
                <h5 style={{fontWeight:'initial'}}>{data.fecha}</h5>
                <h3>{data.nombre}</h3>
                <h4 style={{fontWeight:'lighter'}}>{data.locacion}</h4>
                </Content>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


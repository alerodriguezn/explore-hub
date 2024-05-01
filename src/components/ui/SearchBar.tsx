"use client";
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search'; // Importa el ícono que desees
import DateRangeIcon from '@mui/icons-material/DateRange'; // Importa el ícono que desees
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Importa el ícono que desees
import './search.css';

export default function SearchBar() {
    const theme = useTheme();
    return (
        <Box padding={"2rem"} width={"80%"} alignContent={"center"} sx={{
            backgroundColor: theme.palette.secondary.main, 
            borderRadius: "1rem",
            display: "flex",
        }}>
            <form style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem",
                width: "100%",
            }}>
                <div className="input-icon">
                    <SearchIcon />
                    <input type="text" placeholder="Destino..." className="p-5 rounded-lg" />
                </div>
                <div className="input-icon">
                    <DateRangeIcon />
                    <input type="date" className=" p-5 rounded-lg" />
                </div>
                <div className="input-icon">
                    <DateRangeIcon />
                    <input type="date" className="p-5 rounded-lg" />
                </div>
                <div className="input-icon">
                    <AttachMoneyIcon />
                    <input type="text" placeholder="Presupuesto" className="p-5 rounded-lg" />
                </div>
                <button className="bg-primary text-white p-5 rounded-lg">Buscar</button>
            </form>
        </Box>
    )
}
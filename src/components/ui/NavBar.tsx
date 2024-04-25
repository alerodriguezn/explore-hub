"use client";

import * as React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { BeachAccessIcon, DirectionsCarIcon, ApartmentIcon } from '@/lib/icons';

const pages = [
    { name: 'Alojamientos', icon: <ApartmentIcon sx={{fontSize:'30px'}} />, link: '/accommodations' },
    { name: 'Transporte', icon: <DirectionsCarIcon sx={{fontSize:'30px'}} />, link: '/transport' },
    { name: 'Actividades', icon: <BeachAccessIcon sx={{fontSize:'30px'}} />, link: '/activities' },
];
  
function NavBar() {
    const pathname = usePathname();
    const theme = useTheme();
    return (
        <AppBar position="static" sx={{borderRadius:'0 100px 100px 0', width:'95%', alignItems:'end', pr:'100px'}}>
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {pages.map((page) => (
                        <Link href={page.link} key={page.name}>
                            <Button sx={{ 
                                my: 1, 
                                color: pathname === page.link ? theme.palette.primary.main : 'white',
                                display: 'block', 
                                textTransform: 'none',
                                borderRadius: 200,
                                backgroundColor: pathname === page.link ? 'white' : 'transparent',
                                }}>
                                <Box>
                                    {page.icon}
                                </Box>
                                {page.name}
                            </Button>
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
"use client";


import React, { useState } from 'react';
import { InputControl, MUIButton, ModalComponent } from '@/components/commons';
import SideNav from './sidenav';
import { Avatar, Button, Checkbox, Modal, Paper, Stack, Typography } from '@mui/material';




interface Filters {
    flightDetails: boolean;
    hotelBookings: boolean;
    travelReviews: boolean;
    tripMentions: boolean;
    purchaseHistory: boolean;
    messages: boolean;
  }
  
  interface Profile {
    name: string;
    age: number;
    location: string;
    travelPreferences: string[];
    notifications: Notification[];
    filters: Filters;
  }
  
  interface Notification {
    id: number;
    type: string;
    message: string;
    time: string;
    icon: string;
    read: boolean; // New property to indicate if the notification has been read
    profileImage: string; // URL to the profile image
  }
  const initialProfile = {
    name: "John Doe",
    age: 30,
    location: "San Francisco",
    travelPreferences: ["Beaches", "Historic Sites"],
    notifications: [
      { 
        id: 1, 
        type: "Recent booking updates", 
        message: "Flight details\nNew booking confirmation received", 
        time: "Hace 1 minuto", 
        icon: "flight", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 2, 
        type: "Special Offer", 
        message: "¡Oferta especial! 20% de descuento en paquetes de viaje a destinos seleccionados.", 
        time: "hace 30 minutos", 
        icon: "offer", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 3, 
        type: "Reminder", 
        message: "¡Tu viaje a Bali está a punto de comenzar! No olvides completar tu check-in y revisar tu itinerario.", 
        time: "hace 1 día", 
        icon: "reminder", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 4, 
        type: "New Review", 
        message: "¡Nueva reseña en tu experiencia de buceo en Tailandia! Echa un vistazo para ver lo que otros viajeros están diciendo.", 
        time: "hace 2 horas", 
        icon: "review", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 5, 
        type: "Upcoming Event", 
        message: "¡No te pierdas el festival de música en Ibiza este fin de semana! Asegúrate de tener tus boletos listos.", 
        time: "hace 3 días", 
        icon: "event", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 6, 
        type: "Payment Confirmation", 
        message: "Confirmación de pago recibida para tu excursión de safari en África. ¡Prepárate para una aventura inolvidable!", 
        time: "hace 1 hora", 
        icon: "payment", 
        read: false, 
        profileImage: "E" 
      }
    ],
    filters: {
      flightDetails: true,
      hotelBookings: true,
      travelReviews: false,
      tripMentions: false,
      purchaseHistory: false,
      messages: true
    }
  };
  
  const ProfilePage = () => {
    const [profile, setProfile] = useState(() => {
        // Recupera el perfil del almacenamiento local, si existe, o usa el estado inicial
        const storedProfile = localStorage.getItem('profile');
        return storedProfile ? JSON.parse(storedProfile) : initialProfile;
      });
      const [isModalOpen, setModalOpen] = useState(false);
  
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof Profile) => {
          setProfile({ ...profile, [field]: event.target.value });
      };
      const handleDeleteNotification = (id: number) => {
        setProfile((prevProfile: { notifications: any[]; }) => ({
            ...prevProfile,
            notifications: prevProfile.notifications.filter((notification: { id: number; }) => notification.id !== id)
        }));
    };
    const handleRespond = (id: number) => {
        setProfile((prevProfile: { notifications: any[]; }) => ({
          ...prevProfile,
          notifications: prevProfile.notifications.map((notification: { id: number; }) =>
            notification.id === id ? { ...notification, read: true } : notification
          )
        }));
      };
      
    const handleClearFilters = () => {
        const resetFilters: Filters = {
            flightDetails: false,
            hotelBookings: false,
            travelReviews: false,
            tripMentions: false,
            purchaseHistory: false,
            messages: false
        };
        setProfile((prevProfile: any) => ({
            ...prevProfile,
            filters: resetFilters
        }));
    };
      const toggleFilter = (filter: keyof Filters) => {
          setProfile({
              ...profile,
              filters: {
                  ...profile.filters,
                  [filter]: !profile.filters[filter]
              }
          });
      };
 
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
            <Paper elevation={3} style={{ padding: '20px', marginRight: '20px', width: '20%' }}>
            <SideNav profile={profile} setProfile={setProfile}></SideNav>    
            </Paper>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
    <Paper elevation={3} style={{ padding: '20px', marginRight: '20px', minWidth:"500px",width: '120%' }}>
      <Typography variant="h5" style={{ marginBottom: '20px' }}>Preferences</Typography>
      {profile.notifications.map((item) => (
        <Paper key={item.id} elevation={2} style={{ padding: '10px', marginBottom: '10px', display: 'flex' }}>
          <Avatar src={item.profileImage} alt="Profile" style={{ marginRight: '10px' }} />
          <div style={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">{item.type}</Typography>
            <Typography variant="body2" component="div" style={{ whiteSpace: 'pre-line' }}>{item.message}</Typography>
            <Typography variant="body2" color="textSecondary">{item.time}</Typography>
          </div>
          <div>
            <Button variant="outlined" color="primary" onClick={() => handleRespond(item.id)}>Marcar Leido</Button>
            <Button variant="contained" color="primary" onClick={() => handleDeleteNotification(item.id)} style={{ marginLeft: '10px' }}>Eliminar</Button>
          </div>
          {!item.read && <div style={{ marginLeft: '10px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'red' }}></div>}
        </Paper>
      ))}
    </Paper>
  </div>
            <Paper elevation={3} style={{ padding: '20px', width: '15%' }}>
                <Typography variant="h5" style={{ marginBottom: '20px' }}>Filter Options</Typography>
                {Object.entries(profile.filters).map(([key, value]) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Checkbox
                            checked={value}
                            onChange={() => toggleFilter(key as keyof Filters)}
                            color="primary"
                        />
                        <Typography variant="subtitle1" style={{ textTransform: 'capitalize' }}>{key}</Typography>
                    </div>
                ))}
                 <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Seleccionar</Button>
                <Button variant="outlined" color="secondary" onClick={handleClearFilters}>Eliminar</Button>
            </Paper>
        </div>
    );
};


export default ProfilePage;

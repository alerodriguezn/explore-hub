import React, { useState } from 'react';
import { ModalComponent, InputControl } from '@/components/commons';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard, faShieldAlt, faCog, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const navItems = [
    { 
      key: 'Informacion personal', 
      label: 'Actualiza tu informacion', 
      icon: faUser, 
      content: [
        { key: 'name', label: 'Nombre' },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'password', label: 'Contraseña', type: 'password' },
        { key: 'age', label: 'Edad', type: 'number' },
        { key: 'location', label: 'Ubicación' }
      ]
    },
    { 
      key: 'Pagos', 
      label: 'Informacion de pagos', 
      icon: faCreditCard, 
      content: 'Payment Information...' 
    },
    { 
      key: 'Seguridad', 
      label: 'Seguridad', 
      icon: faShieldAlt, 
      content: 'Security Settings...' 
    },
    { 
      key: 'Preferencias', 
      label: 'Preferencias', 
      icon: faCog, 
      content: 'Preferences...' 
    },
    { 
      key: 'Informacion adicional', 
      label: 'Informacion adicional', 
      icon: faCog, 
      content: 'Customize UI...' 
    },
    { 
      key: 'Ayuda', 
      label: 'Ayuda', 
      icon: faUsers, 
      content: 'Manage Companions...' 
    },
    { 
      key: 'Cerrar sesion', 
      label: 'cerrar sesion', 
      icon: faSignOutAlt, 
      content: 'Signing Out...' 
    }
  ];
  
const StyledButton = styled('button')({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'black',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f0f0f0'
    }
});

const SideNav = ({ profile, setProfile }: { profile: any, setProfile: React.Dispatch<React.SetStateAction<any>> }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(0);

    const handleOpenModal = (content: React.SetStateAction<number>) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const updateProfileField = (fieldName: any, newValue: any) => {
        setProfile((prevProfile: any) => ({ ...prevProfile, [fieldName]: newValue }));
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '10px' }}>
            {navItems.map((item, index) => (
              <StyledButton key={item.key} onClick={() => handleOpenModal(index)}>
                <FontAwesomeIcon icon={item.icon} style={{ marginRight: '10px' }} />
                {item.label}
              </StyledButton>
            ))}
            <ModalComponent
                open={isModalOpen}
                handleClickClose={handleCloseModal}
                handleClickAccept={handleCloseModal}
                title="Details"
                content={
                    <div>
                        {Array.isArray(navItems[modalContent].content) ? (
                          contentArr(navItems[modalContent].content).map((field: { key: any; label: any; name: string | number; }) => (
                            <InputControl
                              key={field.key}
                              label={field.label}
                              value={profile[field.name]}
                              placeholder={profile[field.name]}
                              defaultValue={profile[field.name]}
                              onChange={(e: { target: { value: any; }; }) => updateProfileField(field.name, e.target.value)}
                            />
                          ))
                        ) : (
                          <>{navItems[modalContent].content}</>
                        )}
                    </div>
                }
            />
        </div>
    );
};

export default SideNav;


function contentArr(content : any) : [{ key: any; label: any; name: string | number;}] {
    return content.map((field: { key: any; label: any; }) => (
        { key: field.key, label: field.label, name: field.key }
    ));
}
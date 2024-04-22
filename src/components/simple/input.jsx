"use client";
import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';

export default function InputControl(props) {
  // Props: value (string) - Initial input value, type (string) - Type of input ('email', 'number', 'date', etc.), defaultValue (string) - Default value for the input, required (boolean) - Whether the input is required, onChange (function) - Function called on input change, placeholder (string) - Placeholder text for the input, label (string) - Label text for the input.

  const [value, setValue] = React.useState(props.value);
  const { enqueueSnackbar } = useSnackbar();
  
  const handleChange = (event) => {
    const snack = (msj, variant) => () => {
      console.log("SNACK!");
      enqueueSnackbar(msj, { variant });
    };
    
    const inputValue = event.target.value;
    console.log(props.type);
    
    // Si se proporciona un tipo de entrada, realiza la validación según el tipo.
    if (props.type) {
      if (props.type == 'email' && !isValidEmail(inputValue)) {
        snack("Formato Email Invalido", "error")();
        return;
      } else if (props.type == 'number' && !isValidNumber(inputValue)) {
        snack("Formato Numerico Invalido", "error")();
        return;
      } else if (props.type == 'date' && !isValidDate(inputValue)) {
        snack("Formato Fecha Invalido", "error")();
        return;
      }
    }
  
    // Llama a la función onChange proporcionada por props si existe y la validación es exitosa.
    if (props.onChange) {
      props.onChange(event);
    }
  
    setValue(inputValue);
  };
  
  // Funciones de validación

  const isValidEmail = (value) => {
    // Verifica si el valor tiene el formato de correo electrónico válido
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(value);
  };
  
  const isValidNumber = (value) => {
    // Verifica si el valor es un número válido
    return !isNaN(value) && isFinite(value);
  };
  
  const isValidDate = (value) => {
    // Verifica si la fecha tiene el formato 'yyyy-mm-dd' válido
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value);
  };
  

  return (
    <FormControl defaultValue={props.defaultValue} required={props.required} onChange={handleChange}>
      <Label>{props.label}</Label>
      <StyledInput placeholder={props.placeholder} type={props.type == "password" ? props.type : "text"}/>
      <HelperText />
    </FormControl>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 80%;
    max-width: 620px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    padding: 8px 12px;
    border-radius: 8px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);
const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;
const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }
  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;
  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;
const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};
const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};











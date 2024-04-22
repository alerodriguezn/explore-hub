This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Componentes


###  `ModalComponent`

El `ModalComponent` es un componente que recibe varias props para configurar su comportamiento y apariencia:

- **open**: Un valor booleano que determina si el modal está abierto o cerrado.

- **handleClickClose**: Función que se llama al cerrar el modal.

- **handleClickAccept**: Función que se llama al aceptar las acciones del modal.

- **title**: Título que se muestra en la cabecera del modal.

- **content**: Contenido del modal, que puede ser cualquier elemento de React. En este ejemplo, se usa `InputControl` para recibir una entrada del usuario.

#### Funciones

El componente modal utiliza varias funciones para manejar su comportamiento:

- **handleOpenModal**: Abre el modal. Esto se logra actualizando el estado `isModalOpen` a `true`.

- **handleCloseModal**: Cierra el modal. Actualiza el estado `isModalOpen` a `false`.

- **handleAcceptModal**: Se ejecuta cuando se acepta la acción dentro del modal. Por defecto, esta función cierra el modal, pero puede ser modificada para incluir otras acciones como enviar datos.

- **handleInputChange**: Maneja los cambios de entrada en los campos del formulario dentro del modal. Esta función es dinámica y puede adaptarse para manejar diferentes campos basándose en los argumentos que recibe.

#### Ejemplo de Uso

```jsx
<ModalComponent
  open={isModalOpen}
  handleClickClose={handleCloseModal}
  handleClickAccept={handleAcceptModal}
  title="Añadir"
  content={
    <InputControl
      key={1}
      label={"Test"}
      defaultValue={"Test"} 
      onChange={(event) => handleInputChange(event, 1)}
    />
  }
/>
```

###  `InputControl`

- **key**: Clave única para el control dentro de una lista.
- **label**: Etiqueta visible para el control de entrada.
- **defaultValue**: Valor inicial para el campo de entrada.
- **onChange**: Función que se ejecuta cuando el valor del campo de entrada cambia.

###  `MUIButton`

`MUIButton` es un botón configurable que puede ser utilizado para ejecutar acciones específicas en la aplicación. Las propiedades que acepta son las siguientes:

- **enable**: Un valor booleano que habilita o deshabilita el botón. Si `true`, el botón es interactivo; si `false`, el botón está desactivado.

- **name**: El texto o etiqueta que se mostrará en el botón.

- **handleClick**: La función que se ejecutará cuando el botón sea presionado. Esta función puede estar vinculada a cualquier lógica, como abrir un modal, iniciar un proceso o enviar información.

#### Ejemplo de Uso

```jsx
<MUIButton
  enable={true}
  name={"Probando"}
  handleClick={handleOpenModal}
/>
```

### Autocomplete
### grid
### paper
### table
/* eslint-disable react/display-name */
"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, display } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import styled2 from 'styled-components';
import CustomButton from "./button";

function ModalComponent(props) {
  // Props: open (boolean) - Controls the visibility of the modal, handleClick (function)
  // Function to call when modal needs to be closed, title (string)
  // Title displayed in the modal header, content (ReactNode)
  // Content displayed in the modal body, handleClickAccept (function)
  // Function called on accept button click, handleClickClose (function)
  // Function called on close button click.


  return (
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={props.open}
        onClose={props.handleClick}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box>
          <Content>
            <Content2>
              <h2 id="unstyled-modal-title">{props.title}</h2>
              <Body>
                {props.content}
              </Body>
            </Content2>
            <ContentRow>
              <CustomButton enable={true} name="Aceptar" handleClick={props.handleClickAccept}/>
              <CustomButton enable={true} name="Cerrar" handleClick={props.handleClickClose}/>
            </ContentRow>
          </Content>
        </Box>
      </StyledModal>
  );
}
const Content = styled2.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width:100%;
  height:100%;
`;
const Content2 = styled2.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:100%;
`;
const Body = styled2.div`
  margin: 40px;
  width:100%;
`;
const ContentRow = styled2.div`
  display: flex;
  align-items: right;
  justify-content: space-between;
  flex-direction: Row;
  width:100%;
`;
const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: right;
  justify-content: right;
`;

const Backdrop = React.forwardRef((props, ref) => {
  
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Box = styled2.div`
  width: 30%;
  height: 95%;
  right:0;
  border-radius: 12px;
  margin: 8px;
  padding: 16px 32px 24px 32px;
  background-color: white;
  boxShadow: 0px 2px 24px ${'#383838'};
  transition: all 5s ease;
`;
export default ModalComponent;

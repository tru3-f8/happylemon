import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ContactButton from '../MaterialUIFeatures/ContactButton';
import styled from 'styled-components';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Body className={classes.paper}>
      <h2 id='simple-modal-title'>Message Submitted</h2>
      <p id='simple-modal-description'>Thank you for contacting us!</p>
    </Body>
  );

  return (
    <ContactModalContainer>
      <div onClick={handleOpen}>
        <ContactButton />
      </div>
      <ContactModal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </ContactModal>
    </ContactModalContainer>
  );
}

const Body = styled.div`
  width: 400px;

  @media screen and (max-width: 420px) {
    width: 280px;
    height: 90px;
  }
`;

const ContactModalContainer = styled.div``;

const ContactModalBody = styled.div``;

const ContactModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

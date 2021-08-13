import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ContactModal from '../MaterialUIFeatures/ContactModal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  setEmail,
  setMessage,
  setName,
  setPhone,
} from '../features/contactFormSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const sendMessage = () => {
    dispatch(setName(''));
    dispatch(setEmail(''));
    dispatch(setPhone(''));
    dispatch(setMessage(''));

  };

  return (
    <div className={classes.root}>
      <ContactButton variant='contained' onClick={sendMessage}>
        Send Message
      </ContactButton>
    </div>
  );
}

const ContactButton = styled(Button)`
  width: 250px;
`;

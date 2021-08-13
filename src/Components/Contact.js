import React, { useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ContactButton from '../MaterialUIFeatures/ContactButton';
import ContactModal from '../MaterialUIFeatures/ContactModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessage,
  setMessage,
  selectEmail,
  setEmail,
  selectName,
  setName,
  selectPhone,
  setPhone,
} from '../features/contactFormSlice';

function Contact() {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactContainerBox>
        <ContactSubContainerColumnOne>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactShortMessage>
            We would love to hear from you. We will get back to you shortly.
          </ContactShortMessage>
          <ContactImage src='images/happy_lemon_logo.jpeg' />
        </ContactSubContainerColumnOne>
        <ContactSubContainerColumnTwo>
          <ContactName
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            placeholder='Name'
          />
          <ContactEmail value={email} onChange={(e) => dispatch(setEmail(e.target.value))} placeholder='Email' />
          <ContactPhone value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} placeholder='Phone' />
          <ContactMessage
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            placeholder='Message'
            minRows={5}
          />
          <ContactModal />
        </ContactSubContainerColumnTwo>
      </ContactContainerBox>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContactContainerBox = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-evenly;
  height: 500px;
  width: 900px;
  border: 3px solid #902302;
  border-style: double;
  background: whitesmoke;
`;

const ContactSubContainerColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 100px;
`;

const ContactShortMessage = styled.p`
  width: 300px;
`;

const ContactTitle = styled.h1``;

const ContactSubContainerColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 900px;
`;

const ContactImage = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

const ContactName = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
`;

const ContactEmail = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
`;

const ContactPhone = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
`;

const ContactMessage = styled(TextareaAutosize)`
  margin-bottom: 50px;
  width: 350px;
  height: 130px;
  border-radius: 5px;
  border: 2px solid gray;
  font-family: Questrial;
`;

const ContactSendMessage = styled.button``;

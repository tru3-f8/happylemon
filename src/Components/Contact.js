import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
          <ContactEmail
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder='Email'
          />
          <ContactPhone
            value={phone}
            onChange={(e) => dispatch(setPhone(e.target.value))}
            placeholder='Phone'
          />
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
  height: 800px;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    height: 1300px;
  }
`;

const ContactContainerBox = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-evenly;
  height: 500px;
  width: 900px;
  max-width: 100%;
  border: 3px solid #902302;
  border-style: double;
  background: whitesmoke;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 1000px;
    width: 700px;
    max-width: 90%;
  }
`;

const ContactSubContainerColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 100px;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

const ContactShortMessage = styled.p`
  width: 300px;

  @media screen and (max-width: 1000px) {
    font-size: 13px;
    width: 60%;
    margin-bottom: 50px;
  }

`;

const ContactTitle = styled.h1`
  @media screen and (max-width: 1000px) {
    margin-bottom: 80px;
  }
`;

const ContactSubContainerColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 900px;

  @media screen and (max-width: 1000px) {
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    margin-top: -80px;
  }

`;

const ContactImage = styled.img`
  max-width: 80%;
  max-height: 80%;

  @media screen and (max-width: 1000px) {
    width: 400px;
    height: 350px;
  }

  @media screen and (max-width: 414px) {
    width: 230px;
    height: 250px;
  }

`;

const ContactName = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
  text-indent: 5px;

  @media screen and (max-width: 414px) {
   width: 260px;
  }


`;

const ContactEmail = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
  text-indent: 5px;

  @media screen and (max-width: 414px) {
   width: 260px;
  }


`;

const ContactPhone = styled.input`
  margin-bottom: 25px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
  text-indent: 5px;

  @media screen and (max-width: 414px) {
   width: 260px;
  }


`;

const ContactMessage = styled(TextareaAutosize)`
  margin-bottom: 50px;
  width: 350px;
  height: 130px;
  border-radius: 5px;
  border: 2px solid gray;
  font-family: Questrial;
  text-indent: 5px;

  @media screen and (max-width: 414px) {
   width: 260px;
  }

`;

import React, { Component, useState } from 'react';
import '../../style/style_component/ContactStyle/mainContact.css';
import firebase from '../../firebase';
import Footer from '../Footer';
import ContactForm from './contactForm';

export default function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (name !== '' && email !== '' && text !== '') {
      firebase.db
        .collection('t_contact')
        .add({ username: name, email: email, message: text })
        .then(() => {
          setName('');
          setEmail('');
          setText('');
          alert('Success');
        })
        .catch(() => {
          alert('Failed to send message');
        });
    } else {
      alert('Field is required');
    }
  };

  return (
    <>
      <div className="container">
        <div className="contactHeader">
          <div className="ctHead">
            <h3 className="hh">GET IN TOUCH</h3>
            <h1 className="oo">CONTACT</h1>
          </div>
          <ContactForm
            sendMessage={sendMessage}
            name={name}
            email={email}
            text={text}
            changeName={(text) => {
              setName(text);
            }}
            changeEmail={(text) => {
              setEmail(text);
            }}
            changeText={(text) => {
              setText(text);
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

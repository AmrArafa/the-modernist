import React from 'react';
import styled from 'styled-components';
import FooterTitle from './footer_title';
import VisuallyHiddenLabel from '../visually_hidden_label';

const ContactUsForm = styled.form`
  input,
  textarea {
    font-size: 13px;
    font-family: inherit;
    color: #989898;
    background-color: #222222;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 0;
    width: 100%;
  }

  textarea {
    resize: none;
  }

  button {
    border: 0;
    font-size: 12px;
    font-weight: 700;
    font-family: inherit;
    text-transform: uppercase;
    color: #303030;
    padding: 10px 12px;
    border-radius: 10px;
    background-color: #76c38f;
    cursor: pointer;
  }
`;

const ContactUs = () => {
  return (
    <div>
      <FooterTitle>Contact Us</FooterTitle>
      <ContactUsForm action="" method="post" onSubmit={(ev) => ev.preventDefault() }>
        <VisuallyHiddenLabel htmlFor="name">Full Name</VisuallyHiddenLabel>
        <input type="text" name="name" id="name" placeholder="Full Name" required />
        <VisuallyHiddenLabel htmlFor="email">Email Address</VisuallyHiddenLabel>
        <input type="email" name="email" id="email" placeholder="Email Address" required />
        <VisuallyHiddenLabel htmlFor="subject">Subject</VisuallyHiddenLabel>
        <input type="text" name="subject" id="subject" placeholder="Subject" required />
        <VisuallyHiddenLabel htmlFor="message">Message</VisuallyHiddenLabel>
        <textarea name="message" id="message" rows="4" placeholder="Message" required />
        <button type="submit">Submit</button>
      </ContactUsForm>
    </div>
  );
}

export default ContactUs;
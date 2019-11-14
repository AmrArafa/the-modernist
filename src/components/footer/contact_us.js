import React from 'react';
import styled from 'styled-components';
import FooterTitle from './footer_title';

const ContactUsForm = styled.form`
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

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
        <label htmlFor="name" className="visually-hidden">Full Name</label>
        <input type="text" name="name" id="name" placeholder="Full Name" required />
        <label htmlFor="email" className="visually-hidden">Email Address</label>
        <input type="email" name="email" id="email" placeholder="Email Address" required />
        <label htmlFor="subject" className="visually-hidden">Subject</label>
        <input type="text" name="subject" id="subject" placeholder="Subject" required />
        <label htmlFor="message" className="visually-hidden">Message</label>
        <textarea name="message" id="message" rows="4" placeholder="Message" required />
        <button type="submit">Submit</button>
      </ContactUsForm>
    </div>
  );
}

export default ContactUs;
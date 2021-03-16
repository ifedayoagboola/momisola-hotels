import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Home from "./Home";

function Forms() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_5s3y8qs",
        "template_moiktpf",
        e.target,
        "user_5SMN4ZHYasmTLuzDkBVy7"
      )
      .then(
        (result) => {
          <Home />;
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <StyledDiv>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Phone</label>
        <input type="text" name="phone" />
        <label>Date in</label>
        <input type="text" name="check_in" />
        <label>Date Out</label>
        <input type="text" name="check_out" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding-top: 10rem;
  color: #000;
`;

export default Forms;

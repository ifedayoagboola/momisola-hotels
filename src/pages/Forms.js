import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Home from "./Home";

const Forms = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  function sendEmail(e) {
    e.preventDefault();
    //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_5s3y8qs",
        "template_moiktpf",
        e.target,
        "user_5SMN4ZHYasmTLuzDkBVy7"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
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
        <label>Room</label>
        <Select options={options} />
        <label>Date in</label>
        <input type="date" name="check_in" />
        <label>Date Out</label>
        <input type="date" name="check_out" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding-top: 10rem;
  color: #000;
`;

export default Forms;

import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Forms = () => {
  function sendEmail(e) {
    e.preventDefault();
    //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        // "service_5s3y8qs",
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
    <Body>
      <Container>
        <Brand>
          <span>Book</span> a room
        </Brand>
        <Wrapper>
          <CompanyInfo>
            <h3>Momisola Hotels</h3>
            <ul>
              <li>+234 814 774 7673</li>
              <li>Bookings@momisolahotels.com</li>
              <li>3, Laniyan Close, Opposite Honda Factory,</li>
            </ul>
          </CompanyInfo>
          <Contact>
            <h3>Email Us</h3>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <p>
                <label>Name:</label>
                <input type="text" name="name" />
              </p>
              <p>
                <label>Email:</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone:</label>
                <input type="text" name="phone" />
              </p>
              <p>
                <label>Room:</label>
                <section>
                  <option name="Kings" value="">
                    Kings Room
                  </option>
                  <option name="Queens" value="">
                    Queens Room
                  </option>
                  <option name="Suite" value="">
                    Royal Suite
                  </option>
                </section>
              </p>
              <p>
                <label>Date in:</label>
                <input type="date" name="check_in" />
              </p>
              <p>
                <label>Date Out:</label>
                <input type="date" name="check_out" />
              </p>
              <p>
                <label>Message:</label>
                <textarea name="message" rows="5" />
              </p>
              <p>
                <input type="submit" value="Send" />
              </p>
            </form>
          </Contact>
        </Wrapper>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  background: #000d1a;
  color: #485e74;
  line-height: 1.6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1em;
`;
const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  margin-top: 5rem;
  span {
    color: #fff;
  }
`;
const Brand = styled.h1`
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;
const Wrapper = styled.div`
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
  > * {
    padding: 1em;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    > * {
      padding: 2em;
    }
  }
`;
const CompanyInfo = styled.div`
  background: #c9e6ff;
  ul,
  h3 {
    text-align: center;
    margin: 0 0 1rem 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  @media (min-width: 700px) {
    h3,
    ul {
      text-align: left;
    }
  }
`;
const Contact = styled.div`
  background: #f9feff;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    label {
      display: block;
    }
    p {
      margin: 0;
    }
    input,
    textarea {
      width: 100%;
      padding: 1em;
      border: 1px solid #c9e6ff;
      outline: none;
    }
    textarea {
      grid-template-columns: 1fr;
    }
    input[type="submit"] {
      background: #c9e6ff;
      border: 0;
      text-transform: uppercase;
      grid-template-columns: 1fr;

      &:hover,
      &:focus {
        background: #000d1a;
        color: #fff;
        transition: background-color 2s ease-out;
      }
    }
  }
`;

export default Forms;

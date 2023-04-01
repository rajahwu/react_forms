import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleContactFormSubmit(e) {
    e.preventDefault();
    const contactFormData = {
      userName,
      userEmail,
      message,
    };
    console.log(contactFormData);
    setUserName("");
    setUserEmail("");
    setMessage("");
  }

  return (
    <form
      action="/my-handling-form-page"
      method="post"
      onSubmit={handleContactFormSubmit}
    >
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="name">Email:</label>
          <input
            type="emal"
            id="mail"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="msg">Message: </label>
          <textarea
            name="user_message"
            id="msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </li>
        <li className="button">
          <button
            type="submit"
            disabled={
              userName.length < 3 ||
              userEmail === "" ||
              !userEmail.includes("@")
            }
          >
            Send your message
          </button>
        </li>
      </ul>
    </form>
  );
}

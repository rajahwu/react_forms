import { useState } from "react";
import "./PaymentForm.css";

export default function PaymentForm() {
  // * Contact Information
  const [title, setTitle] = useState("J");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  * Payment Information
  const [creditCard, setCreditCard] = useState("visa");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");

  return (
    <form className="payment-form">
      <h1>Payment form</h1>
      <p>
        Required fields are followed by
        <strong>
          <span aria-label="required">*</span>
        </strong>
      </p>
      <section>
        <h2>Contact information</h2>
        <fieldset>
          <legend>Title</legend>
          <ul>
            <li>
              <label htmlFor="title_1">
                <input
                  type="radio"
                  id="title_1"
                  name="title"
                  value="K"
                  onChange={(e) => setTitle(e.target.value)}
                  checked={title === "K"}
                />
                King
              </label>
            </li>
            <li>
              <label htmlFor="title_2">
                <input
                  type="radio"
                  id="title_2"
                  name="title"
                  value="Q"
                  onChange={(e) => setTitle(e.target.value)}
                  checked={title === "Q"}
                />
                Queen
              </label>
            </li>
            <li>
              <label htmlFor="title_3">
                <input
                  type="radio"
                  id="title_3"
                  name="title"
                  value="J"
                  onChange={(e) => setTitle(e.target.value)}
                  checked={title === "J"}
                />
                Joker
              </label>
            </li>
          </ul>
        </fieldset>
        <p>
          <label htmlFor="name">
            <span>Name: </span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            type="text"
            name="username"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="mail">
            <span>Email: </span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            type="email"
            name="useremail"
            id="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="pwd">
            <span>Password: </span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            type="password"
            name="password"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      </section>
      <section>
        <h2>Payment information</h2>
        <p style={{ display: "flex", justifyContent: "space-around" }}>
          <label htmlFor="card">
            <span>Card type:</span>
          </label>
          <select
            name="usercard"
            id="card"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
          >
            <option value="visa">Visa</option>
            <option value="mc">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </p>
        <p>
          <label htmlFor="number">
            <span>Card number:</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            type="tel"
            name="cardnumber"
            id="number"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="expiration">
            <span>Expiration date</span>
            <strong>
              <span aria-label="required">*</span>
            </strong>
          </label>
          <input
            type="text"
            required={true}
            id="expiration"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
        </p>
      </section>
      <section>
        <p>
          <button type="submit">Validate the payment</button>
        </p>
      </section>
    </form>
  );
}

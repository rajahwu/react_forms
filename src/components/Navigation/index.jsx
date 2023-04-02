import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-form">Basic Form</NavLink>
        </li>
        <li>
          <NavLink to="/web-form">Web Form</NavLink>
        </li>
        <li>
          <NavLink to="/payment-form">Payment Form</NavLink>
        </li>
      </ul>
    </nav>
  );
}

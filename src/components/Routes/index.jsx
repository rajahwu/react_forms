import { Switch, Route } from "react-router-dom";
import ContactForm from "../ContactForm";
import Navigation from "../Navigation";

export default function PageRoutes() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/contact-form">
          <ContactForm />
        </Route>
      </Switch>
    </>
  );
}

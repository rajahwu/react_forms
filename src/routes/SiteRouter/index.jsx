import { Switch, Route } from "react-router-dom";
import { Navigation, ContactForm, WebForm, PaymentForm } from "../../components";
import { Home } from "../../pages";

export default function SiteRouter() {
  return (
    <>
      <Route exact path="/">
        <Home>
          <Navigation />
        </Home>
      </Route>
      <Switch>
        <Route path="/contact-form">
          <ContactForm />
        </Route>
        <Route path="/web-form">
          <WebForm />
        </Route>
        <Route path="/payment-form">
          <PaymentForm />
        </Route>
      </Switch>
    </>
  );
}

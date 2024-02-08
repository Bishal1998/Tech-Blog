import React, { useEffect } from "react";
import { ContactDetails, ContactForm, FAQ } from "./components";

const Contact = () => {
  document.title = "Contact - Tech Blog";

  return (
    <section>
      <ContactDetails />
      <ContactForm />
      <FAQ />
    </section>
  );
};

export default Contact;

import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";

function ContactPage() {
  return (
    <main className="bg-brand-bg">
      <ContactHero />
      <ContactForm />
    </main>
  );
}

export default ContactPage;

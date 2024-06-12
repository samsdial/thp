import React from "react";
import FooterSection from "./components/FooterSection";
import FormClients from "./components/FormClients";
import Navbar from "./components/Navbar";

function Clients() {
  return (
    <main className="main">
      <Navbar />
      <section className="pb-0" id="especilist">
        <div className="container">
          <div className="row">
            {/* <Contact /> */}
            <FormClients />
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

export default Clients;

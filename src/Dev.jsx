import React from "react";
import FooterSection from "./components/FooterSection";
import FormClientsDev from "./components/FormClientsDev";
import Navbar from "./components/Navbar";

function Dev() {
  return (
    <main className="main">
      <Navbar />
      <section
        className="container-fluid pt-9 py-5 justify-content-center"
        id="especilist"
      >
        <div className="row">
          <div className="col-lg-7" style={{ height: "800px" }}>
            <div className="text-center mb-2">
              <h2>Lista de clientes</h2>
            </div>
            <div className="c-white ratio ratio-21x9">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSR0TLmlVEWlGbg-Bi-PMGF6izM14cUe2MbiQb39qEcAtX-G9kIVZ4MxG99kbg6gfT5MT0I4qYUPIIX/pubhtml?gid=0&single=true"
                allowfullscreen
                style={{ height: "700px" }}
              />
            </div>
          </div>
          <FormClientsDev />
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

export default Dev;

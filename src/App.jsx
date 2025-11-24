import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Dev from "./Dev";
import Home from "./Home";
import Onicocriptosis from "./Onicocriptosis";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/onicocriptosis" element={<Onicocriptosis />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;

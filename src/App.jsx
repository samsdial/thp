import { Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Dev from "./Dev";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </>
  );
}

export default App;

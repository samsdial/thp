import { Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.scss";
import DistrictDetails from "./components/districtDetails/DistrictDetails";
import Header from "./components/header/Header";
import StateDetails from "./components/statesDetails/StateDetails";
import WorldDetails from "./components/WolrdDetails/WorldDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StateDetails />} />
        <Route path="/global" element={<WorldDetails />} />
        <Route path="/:data" element={<DistrictDetails />} />
      </Routes>
    </div>
  );
}

export default App;

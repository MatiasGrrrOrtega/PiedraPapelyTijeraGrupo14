import Home from "./component/Home";
import Game from "./component/Game";
import Team from "./component/Team";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Team" element={ <Team/> } />
        <Route path="/Game" element={ <Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

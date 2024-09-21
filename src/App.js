import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Mascotas from "./components/Mascotas";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascotas(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Mascotas mascotas={mascotas} />} />
          <Route path="/mascotas" element={<Mascotas mascotas={mascotas} />} />
          <Route
            path="/mascotas/:mascotaId"
            element={<Detail mascotas={mascotas} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


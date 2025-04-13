// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React saludos</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more XDSDASDAxDxddd
//       </p>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [hospitales, setHospitales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHospitales = async () => {
      try {
        const res = await fetch("http://localhost:8000/hospitales");
        if (!res.ok) throw new Error("Error al obtener hospitales");
        const data = await res.json();
        setHospitales(data);
      } catch (err) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchHospitales();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Listado de Hospitales</h1>

      {loading && <p>Cargando hospitales...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Camas</th>
              <th>Gasto Personal</th>
              <th>Egresos</th>
            </tr>
          </thead>
          <tbody>
            {hospitales.map((hosp) => (
              <tr key={hosp.id}>
                <td>{hosp.id}</td>
                <td>{hosp.nombre}</td>
                <td>{hosp.camas}</td>
                <td>{hosp.gasto_personal}</td>
                <td>{hosp.egresos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

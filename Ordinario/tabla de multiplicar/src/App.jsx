import { useState } from "react";

function App() {
  const [numero, setNumero] = useState("");
  const [limite, setLimite] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    if (numero > 0 && limite > 0) {
      let resultado = [];
      for (let i = 1; i <= limite; i++) {
        resultado.push(`${numero} x ${i} = ${numero * i}`);
      }
      setTabla(resultado);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">

          <h3 className="text-center mb-4">Tabla de multiplicar</h3>

          <div className="mb-3">
            <label className="form-label">Número base</label>
            <input
              type="number"
              className="form-control"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Límite</label>
            <input
              type="number"
              className="form-control"
              value={limite}
              onChange={(e) => setLimite(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100" onClick={generarTabla}>
            Generar tabla
          </button>

          {tabla.length > 0 && (
            <ul className="list-group mt-4">
              {tabla.map((item, index) => (
                <li key={index} className="list-group-item text-center">
                  {item}
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;

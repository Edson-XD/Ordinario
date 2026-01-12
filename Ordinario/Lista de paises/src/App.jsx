import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.error("Respuesta inválida:", data);
          setCountries([]);
        }
      })
      .catch((error) => {
        console.error("Error al cargar países:", error);
        setCountries([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista de Países</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Bandera</th>
            <th>Nombre</th>
            <th>Capital</th>
            <th>Región</th>
            <th>Población</th>
            <th>Idioma</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>
                <img src={country.flags.png} width="50" />
              </td>
              <td>{country.name.common}</td>
              <td>{country.capital?.[0] || "N/A"}</td>
              <td>{country.region}</td>
              <td>{country.population.toLocaleString()}</td>
              <td>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

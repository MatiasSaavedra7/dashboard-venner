import { useState, useEffect } from "react";

export default function Countries() {
  let [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");

    // Obtener los datos iniciales (primera página)
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.meta.categories.countries);
      });
  }, []);

  return (
    <section className="countries">
      <h4>Países</h4>
      <div>
        {countries.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {countries.map((country, i) => (
              <li key={i}>
                <br />
                <h3>{country.name}</h3>
                <p>Cantidad de productos: {country.count}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

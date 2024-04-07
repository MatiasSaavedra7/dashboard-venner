import { useState, useEffect } from "react";

export default function Grapes() {
  let [grapes, setGrapes] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");

    // Obtener los datos iniciales (primera página)
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setGrapes(data.meta.categories.grapes);
      });
  }, []);

  return (
    <section className="grapes">
      <h4>Grapes</h4>
      <div>
        {grapes.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {grapes.map((grape, i) => (
              <li key={i}>
                <br />
                <h3>{grape.name}</h3>
                <p>Cantidad de productos: {grape.count}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

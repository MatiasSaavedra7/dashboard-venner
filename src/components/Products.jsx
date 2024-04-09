import { useState, useEffect } from "react";

export default function Test() {
  let [products, setProducts] = useState([]);
  let [page, setPage] = useState({});

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");

    // Obtener los datos iniciales (primera página)
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setPage(data.meta);
      });
  }, []);

  const changePage = (url) => {
    // Realizar una solicitud a la API con el enlace de paginación proporcionado (Next o Previous)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setPage(data.meta);
      });
  };

  return (
    <section className="products">
      <h4>Productos</h4>

      <hr />

      <p>Total de productos: {page.count? page.count : "Cargando..."}</p>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Uva</th>
            <th>País</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5">Cargando....</td>
            </tr>
          ) : (
            products.map((product, i) => (
              <tr key={i}>
                <td>{product.name}</td>
                <td>{product.grapes?.name || "-"}</td>
                <td>{product.countries?.name || "-"}</td>
                <td>{product.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <br />

      <button onClick={() => changePage(page.previous)}>Anterior</button>
      <button onClick={() => changePage(page.next)}>Siguiente</button>
    </section>
  );
}

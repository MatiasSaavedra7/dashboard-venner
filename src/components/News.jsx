// import Vaquita from "../assets/images/vaquita.png";
import { useState, useEffect } from "react";

export default function News() {
  const [lastProduct, setLastProduct] = useState({});
  const [lastUser, setLastUser] = useState({});

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");

    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setLastProduct(data.lastProduct[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");

    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setLastUser(data.lastUser[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="news">
      <h4>News</h4>
      <hr />
      {/* <!-- ULTIMO PRODUCTO AGREGADO --> */}

      {Object.keys(lastProduct).length === 0 ? (
        <p>Cargando....</p>
      ) : (
        <article className="last-product">
          <div>
            <img src={lastProduct.image} alt="product" />
          </div>
          <div className="last-product-details">
            <h2>Nombre: {lastProduct.name}</h2>
            <p>Pais de Origen: {lastProduct.countries.name}</p>
            <p className="last-product-description">
              Descripción: {lastProduct.description}
            </p>
            <p>Tipo de Uva: {lastProduct.grapes.name}</p>
            <p>Precio: $ {lastProduct.price}</p>
          </div>
        </article>
      )}

      {/* <!-- FIN ULTIMO PRODUCTO AGREGADO --> */}

      <br />
      <hr />
      <br />
      {/* <!-- ULTIMO USUARIO REGISTRADO --> */}
      {Object.keys(lastUser).length === 0 ? (
        <p>Cargando....</p>
      ) : (
        <article className="last-user">
          <div>
            <img src={lastUser.image} alt="user" />
          </div>
          <div className="last-user-details">
            <h2>Nombre del Usuario: {lastUser.firstName + " " + lastUser.lastName}</h2>
            <p className="last-user-email">Email del Usuario: {lastUser.email}</p>
            <p className="last-user-rol">Rol del User: {lastUser.roles.name}</p>
          </div>
        </article>
      )}
      {/* <!-- FIN ULTIMO USUARIO REGISTRADO --> */}
    </section>
  );
}

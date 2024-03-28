import Vaquita from "../assets/images/vaquita.png";
import Messi from "../assets/images/messi.jpg";

export default function News() {
  return (
    <section className="news">
      <h4>News</h4>
      <hr />
      {/* <!-- ULTIMO PRODUCTO AGREGADO --> */}
      <article className="last-product">
        <div>
          <img src={Vaquita} alt="product" />
        </div>
        <div className="last-product-details">
          <h2>Nombre del Producto</h2>
          <p>
            Pais de Origen: xxxxx
          </p>
          <p className="last-product-description">
            Un Malbec argentino de altitud, producido en los Valles Calchaquíes,
            caracterizado por su frescura y carácter frutal.
          </p>
          <p>
            Tipo de Uva: xxxxx
          </p>
          <p>
            Precio: $ xxxxx
          </p>
        </div>
      </article>
      {/* <!-- FIN ULTIMO PRODUCTO AGREGADO --> */}
      <br />
      <hr />
      <br />
      {/* <!-- ULTIMO USUARIO REGISTRADO --> */}
      <article className="last-user">
        <div>
          <img src={Messi} alt="user" />
        </div>
        <div className="last-user-details">
          <h2>Nombre del Usuario</h2>
          <p className="last-user-email">Email del User</p>
          <p className="last-user-rol">Rol del User</p>
        </div>
      </article>
      {/* <!-- FIN ULTIMO USUARIO REGISTRADO --> */}
    </section>
  );
}

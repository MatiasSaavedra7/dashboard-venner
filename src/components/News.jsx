import Vaquita from '../assets/images/vaquita.png'
import Messi from '../assets/images/messi.jpg'

export default function News() {
    return (
        <section className="news">
          <h4>News</h4>
          <hr />
          {/* <!-- ULTIMO PRODUCTO AGREGADO --> */}
          <article className="last-product">
            <figure>
              <img src={Vaquita} alt="product" />
              <figcaption>
                <h3>Nombre del vino</h3>
              </figcaption>
            </figure>
            <div className="last-product-details">
              <p className="last-product-description">
                Un Malbec argentino de altitud, producido en los Valles
                Calchaquíes, caracterizado por su frescura y carácter frutal.
              </p>
            </div>
          </article>
          {/* <!-- FIN ULTIMO PRODUCTO AGREGADO --> */}

          {/* <!-- ULTIMO USUARIO REGISTRADO --> */}
          <article className="last-user">
            <figure>
              <img src={Messi} alt="user" />
              <figcaption>
                <h3>Nombre del user</h3>
              </figcaption>
            </figure>
            <div className="last-user-details">
              <p className="last-user-email">Email del User</p>
              <p className="last-user-rol">Rol del User</p>
            </div>
          </article>
          {/* <!-- FIN ULTIMO USUARIO REGISTRADO --> */}
        </section>
    )
}

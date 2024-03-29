import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log('%cse actualizó el componente', 'color: yellow');  
  }, [products]);

  useEffect(() => {
    return () => {
      console.log('%cse desmontó el componente', 'color: red');
    }
  }, []);

  const nextPage = async () => {
    await setPage(page + 1);
    console.log(page);
    console.log(`http://localhost:3000/api/products?page=${page}`);

    fetch(`http://localhost:3000/api/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  };

  const previousPage = async () => {
    await setPage(page - 1);
    console.log(page);
    console.log(`http://localhost:3000/api/products?page=${page}`);

    fetch(`http://localhost:3000/api/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="products">
      <h4>Products</h4>
      <hr />
      <p>Total de productos: xxx</p>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Grape</th>
          <th>Country</th>
          <th>Price</th>
        </tr>
        {products.length === 0 && <p>Cargando....</p>}
        {products.map((product, i) => {
          return (
            <tr key={i}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              {product.grapes && product.grapes.name ? <td>{product.grapes.name}</td> : <td> - </td>}
              {product.countries && product.countries.name ? <td>{product.countries.name}</td> : <td> - </td>}
              <td>{product.price}</td>
            </tr>
          );
        })}
      </table>
      <br />
      <button onClick={() => previousPage()}>Previous Products</button>
      <button onClick={() => nextPage ()}>Next Products</button>
    </section>
  );
}

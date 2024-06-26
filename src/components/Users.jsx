import { useState, useEffect } from "react";

export default function Users() {
  let [users, setUsers] = useState([]);
  let [page, setPage] = useState({});

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");

    // Obtener los datos iniciales (primera página)
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setPage(data.meta);
      });
  }, []);

  const changePage = (url) => {
    // Realizar una solicitud a la API con el enlace de paginación proporcionado (Next o Previous)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setPage(data.meta);
      });
  };

  return (
    <section className="users">
      <h4>Usuarios</h4>
      <hr />
      <p>Total de usuarios: {page.count? page.count : "Cargando..."}</p>
      <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
        </thead>
        <tbody>
        {users.length === 0 ? (
            <tr>
              <td colSpan="5">Cargando....</td>
            </tr>
          ) : (
        users.map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              {parseInt(user.rol_id) === 1 ? <td>Administrador</td> : <td>Cliente</td>}
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

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    var url = process.env.REACT_APP_DB_SERVER_URL + "users";
    const result = await Axios.get(url);
    setUsers(result.data.reverse());
  };
  const deleteUser = async (userID) => {
    var url = `${process.env.REACT_APP_DB_SERVER_URL}users/${userID}`;
    const result = await Axios.delete(url);
    loadUsers();
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`users/view/${user.id}`}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-warning"
                      to={`users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="#"
                      className="btn btn-danger"
                      onClick={(e) => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;

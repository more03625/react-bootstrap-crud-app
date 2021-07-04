import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Axios from "axios";

const Edituser = () => {
  const { userID } = useParams();

  const loadUser = async () => {
    var url = `${process.env.REACT_APP_DB_SERVER_URL}users/${userID}`;
    const result = await axios.get(url);

    setFirstName(result.data.name);
    setLastName(result.data.username);
    setEmail(result.data.email);
  };
  useEffect(() => {
    loadUser();
  }, []);

  var history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var url = `${process.env.REACT_APP_DB_SERVER_URL}users/${userID}`;
    const data = {
      name: firstName,
      username: lastName,
      email: email,
    };
    await axios.put(url, data);
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <div className="py-4">
          <Link to="/" className="btn btn-outline-success">
            Back
          </Link>
          <h1>Edit User</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue={firstName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputname1" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                defaultValue={lastName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputname1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={email}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Edituser;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clients extends Component {
  render() {
    const clients = [
      {
        id: "1234",
        firstName: "Ganesh",
        lastName: "Deshmukh",
        email: "gd@gmail.com",
        phone: "555-555-5555",
        balance: "50"
      },
      {
        id: "5678",
        firstName: "GD",
        lastName: "Geek",
        email: "geek@gmail.com",
        phone: "555-555-5555",
        balance: "100"
      },
      {
        id: "1234",
        firstName: "Ganesh",
        lastName: "Deshmukh",
        email: "gd@gmail.com",
        phone: "555-555-5555",
        balance: "50"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users">Clients</i>
              </h2>
            </div>
            <div className="col-md-6 mr-auto">
              <h2 className="mr-auto">
                <i className="fas fa-calculator">Total </i>
              </h2>
            </div>

            {/* Stripped table gives alternate color to table rows eg. Zebra */}
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                  <th />
                </tr>
              </thead>

              <tbody className="tbody">
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>
                      {client.firstName} {client.lastName}
                    </td>
                    <td>{client.email}</td>
                    <td>&#x20b9; {parseFloat(client.balance).toFixed(2)}</td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-success bt-sm mt-1 "
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <h1>Loading Spinner..</h1>;
    }
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
class Clients extends Component {
  render() {
    // const clients = this.props.clients;
    const { clients } = this.props;

    console.log("this.props.clients =", this.props.clients);

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
                      {client.firstname} {client.lastname}
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

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);

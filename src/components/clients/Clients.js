import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Spinner from "../layout/Spinner";
class Clients extends Component {
  state = {
    totalBalance: null
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      // then add balances of all clients on looping through clients-array.
      const total = clients.reduce((total, i) => {
        return total + parseFloat(i.balance.toString());
      }, 0);
      return { totalBalance: total };
    }
    return null; // if no clients
  }
  render() {
    // const clients = this.props.clients;
    const { clients } = this.props;
    const { totalBalance } = this.state;

    // console.log("this.props.clients =", this.props.clients);

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
                <i className="fas fa-calculator" /> Total &nbsp;
                <span className="text-primary">
                  &#x20b9; {parseFloat(totalBalance)}
                </span>
              </h2>
            </div>
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
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-success bt-sm mt-1 "
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
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

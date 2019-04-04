import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  onSubmit = e => {
    e.preventDefault(); // as, event's default function is to navigate to success screen

    const newClient = this.state;

    const { firestore, history } = this.props;

    // If no balance, then assign it to 0.
    if (newClient.balance === "") {
      newClient.balance = 0;
    }

    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => history.push("/"));
  };

  onChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              {/* for Firstname */}
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="4"
                  required
                  onChange={this.onChange}
                  value={this.state.firstName}
                />
              </div>
              {/* for Lastname */}

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="4"
                  required
                  onChange={this.onChange}
                  value={this.state.lastName}
                />
              </div>
              {/* for EmailId */}

              <div className="form-group">
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  minLength="4"
                  required
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              {/* for Phone */}

              <div className="form-group">
                <label htmlFor="phone">Phone No.</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="10"
                  required
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>
              {/* for Balance */}

              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name="balance"
                  onChange={this.onChange}
                  value={this.state.balance}
                />
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-success btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    settings: state.settings
  }))
)(AddClient);

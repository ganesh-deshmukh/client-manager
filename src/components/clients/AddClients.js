import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddClients extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    balance: ""
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
            <form action="">
              <div className="form-group">
                {/* for Firstname */}

                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="10"
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
                  name="LastName"
                  minLength="10"
                  required
                  onChange={this.onChange}
                  value={this.state.lastName}
                />
              </div>
              {/* for EmailId */}
              <div className="form-group">
                <label htmlFor="email">EmailId</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              {/* for Phone number */}
              <div className="form-group">
                <label htmlFor="phone">Phone </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="10"
                  required
                  onChange={this.onChange}
                  value={this.state.lastName}
                />
              </div>
              {/* for Balance */}
              <div className="form-group">
                <label htmlFor="balance">Balance </label>
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

export default AddClients;

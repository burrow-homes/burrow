import React, { Component } from "react";

import "../../utilities.css"
import "./LoginForm.css"


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }


u_handleChange = (event) => {
  this.setState({username: event.target.value});
};

p_handleChange = (event) => {
  this.setState({password: event.target.value});
};

handleSubmit = () => {
console.log(this.state.username);
console.log(this.state.password);
};

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.u_handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.p_handleChange}
            />
          </label>
          <input
            type="submit"
            value="Submit"/>
        </form>
      </div>
    );
  }

}

export default LoginForm;
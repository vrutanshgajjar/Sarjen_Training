import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      msg: ""
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ msg: "All fields required" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/dashboard";
    } else {
      this.setState({ msg: "Invalid Email or Password" });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login</h2>

        <form onSubmit={this.handleLogin}>
          <input name="email" placeholder="Email" onChange={this.handleChange} /><br /><br />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} /><br /><br />
          <button>Login</button>
        </form>

        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default Login;
import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem("currentUser"));

    this.state = {
      user: user,
      newPassword: "",
      msg: ""
    };
  }

  handleProfileChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  updateProfile = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((u) =>
      u.id === this.state.user.id ? this.state.user : u
    );

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(this.state.user));

    this.setState({ msg: "Profile updated" });
  };

  changePassword = () => {
    const updatedUser = {
      ...this.state.user,
      password: this.state.newPassword
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    this.setState({
      user: updatedUser,
      newPassword: "",
      msg: "Password updated"
    });
  };

  logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };
  
  render() {
    if (!this.state.user) {
      return <h2>No user logged in</h2>;
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h2>Dashboard</h2>

        <input  
          name="name"       
          value={this.state.user.name}
          onChange={this.handleProfileChange}
        /><br /><br />

        <input
          name="email"
          value={this.state.user.email}
          onChange={this.handleProfileChange}
        /><br /><br />

        <input
          name="city"
          value={this.state.user.city}
          onChange={this.handleProfileChange}
        /><br /><br />

        <button onClick={this.updateProfile}>Update Profile</button>

        <br /><br />

        <input
          type="password"
          placeholder="New Password"
          value={this.state.newPassword}
          onChange={(e) => this.setState({ newPassword: e.target.value })}
        /><br /><br />

        <button onClick={this.changePassword}>Change Password</button>

        <br /><br />

        <button onClick={this.logout}>Logout</button>

        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default Dashboard;
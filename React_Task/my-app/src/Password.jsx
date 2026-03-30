import React from "react";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false}
  }

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  render() {
    return (
      <div>
        <input type={this.state.showPassword ? "text" : "password"} placeholder="Enter Password"/>

        <button onClick={this.togglePassword}>{this.state.showPassword ? "Hide" : "Show"}</button>
      </div>
    );
  }
}

export default PasswordInput;
import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      hobbies: [],
      msg: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckbox = (e) => {
    let hobbies = [...this.state.hobbies];

    if (e.target.checked) {
      hobbies.push(e.target.value);
    } else {
      hobbies = hobbies.filter((h) => h !== e.target.value);
    }

    this.setState({ hobbies });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, gender, city, hobbies } = this.state;

    if (!name || !email || !password || !gender || !city) {
      this.setState({ msg: "All fields required" });
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      this.setState({ msg: "Email already exists" });
      return;
    }

    const newUser = {
      id: Date.now(),   
      name,
      email,
      password,
      gender,
      city,
      hobbies
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      hobbies: [],
      msg: "Signup Successful"
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Signup</h2>
        

        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Name" onChange={this.handleChange} /><br /><br />
          <input name="email" placeholder="Email" onChange={this.handleChange} /><br /><br />
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange} /><br /><br />

          Gender:
          <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
          <br /><br />

          <select name="city" onChange={this.handleChange}>
            <option value="">Select City</option>
            <option>Ahmedabad</option>
            <option>Surat</option>
            <option>Rajkot</option>
            <option>Vadodara</option>
            <option>Gandhinagar</option>
          </select>
          <br /><br />

          Hobbies:
          <input type="checkbox" value="Cricket" onChange={this.handleCheckbox} /> Cricket
          <input type="checkbox" value="Music" onChange={this.handleCheckbox} /> Music
          <br /><br />

          <button>Signup</button>
        </form>

        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default Signup;
import React from "react";

class Crud extends React.Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem("emp")) || [];

    this.state = {
      name: "",
      city: "",
      phone: "",
      emp: data,
      oldUser: null
    };
  }

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  Submit = (e) => {
    e.preventDefault();

    let emp = this.state.emp;

    if (this.state.oldUser == null) {
      emp.push({
        name: this.state.name,
        city: this.state.city,
        phone: this.state.phone
      });
    } else {
      emp = emp.map((u) =>
        u === this.state.oldUser
          ? { name: this.state.name, city: this.state.city, phone: this.state.phone }
          : u
      );
    }

    this.setState({
      emp: emp,
      name: "",
      city: "",
      phone: "",
      oldUser: null
    });

    localStorage.setItem("emp", JSON.stringify(emp));
  };

  edit = (user) => {
    this.setState({
      name: user.name,
      city: user.city,
      phone: user.phone,
      oldUser: user
    });
  };

  delete = (user) => {
    const emp = this.state.emp.filter((u) => u !== user);

    this.setState({ emp: emp });
    localStorage.setItem("emp", JSON.stringify(emp));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Crud Operation</h2>

        <form onSubmit={this.Submit}>
          <input name="name" placeholder="Name" value={this.state.name} onChange={this.Change} /><br/><br/>
          <input name="city" placeholder="City" value={this.state.city} onChange={this.Change} /><br/><br/>
          <input name="phone" placeholder="Phone" value={this.state.phone} onChange={this.Change} /><br/><br/>

          <button type="submit">Save</button>
        </form>
        <br />

        <table border="1" align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.emp.map((u) => (
              <tr key={u.phone}>
                <td>{u.name}</td>
                <td>{u.city}</td>
                <td>{u.phone}</td>
                <td>
                  <button onClick={() => this.edit(u)}>Edit</button>
                  <button onClick={() => this.delete(u)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Crud;
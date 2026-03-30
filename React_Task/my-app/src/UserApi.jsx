import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        });
      });
  }

  render() {
    const styles = {
      container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        padding: "20px"
      },
      card: {
        width: "220px",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "white"
      }
    };

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Users List</h2>

        {this.state.loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <div style={styles.container}>
            {this.state.users.map((user) => (
              <div key={user.id} style={styles.card}>
                <h4>{user.name}</h4>
                <p><b>Email:</b> {user.email}</p>
                <p><b>City:</b> {user.address.city}</p>
                <p><b>Company:</b> {user.company.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Users;
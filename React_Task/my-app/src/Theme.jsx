import React from "react";

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false
    };
  }

  toggleTheme = () => {
    this.setState({ dark: !this.state.dark });
  };

  render() {
    const isDark = this.state.dark;

    const styles = {
      container: {
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black"
      },
      button: {
        padding: "10px",
        cursor: "pointer"
      }
    };

    return (
      <div style={styles.container}>
        <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={this.toggleTheme} style={styles.button}>Change Color</button>
      </div>
    );
  }
}

export default Theme;
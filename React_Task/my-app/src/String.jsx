import React from "react";

class StringCase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {input: ""}
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  };

  render() {
    const { input } = this.state;

    return (
      <div style={{ textAlign:"center", marginTop:"50px" }}>
        <h2>Enter the String</h2>

        <input type="text" placeholder="Enter text" value={input} onChange={this.handleChange}/>

        <h3>Uppercase: {input.toUpperCase()}</h3>
        <h3>Lowercase: {input.toLowerCase()}</h3>
        <h3>Character Count: {input.length}</h3>
      </div>
    );
  }
}

export default StringCase;
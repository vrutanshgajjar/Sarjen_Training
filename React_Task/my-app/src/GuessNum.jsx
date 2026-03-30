import React from "react"

class GuessNum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {randomNumber: Math.floor(Math.random() * 100) + 1, userInput: "", result: ""}
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  checkNumber = () => {
  const { userInput, randomNumber } = this.state;
  const newnum = Math.floor(Math.random() * 100) + 1;

  if (parseInt(userInput) === randomNumber) {
    this.setState({
      result: "Numbers match",
      randomNumber: newnum,
      userInput: ""
    });
  } else {
    this.setState({
      result: `Random number was ${randomNumber}`,
      randomNumber: newnum,
      userInput: ""
    });
  }
};

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Guess the Number (1–100)</h2>

        <input type="number" value={this.state.userInput} onChange={this.handleChange} placeholder="Enter number"/>

        <br /><br />

        <button onClick={this.checkNumber} disabled={!this.state.userInput}>Check</button>

        <h3>{this.state.result}</h3>
      </div>
    );
  }
}

export default GuessNum;
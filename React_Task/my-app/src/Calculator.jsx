import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input:""};
  }

  handleClick = (value) => {
    this.setState({ input: this.state.input + value });
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  calculateResult = () => {
    try {
      this.setState({
        input: eval(this.state.input).toString()
      });
    } catch {
      this.setState({ input: "Error" });
    }
  };

  render() {
    const styles = {
        calculator: {
            width: "250px",
            margin: "40px auto",
            padding: "15px",
            backgroundColor: "black"
        },

        display: {
            width: "100%",
            height: "40px",
            marginBottom: "10px",
            fontSize: "18px",
            textAlign: "right"
        },

        buttons: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px"
        },

        button: {
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer"
        }
    };
    return (
      <div style={styles.calculator}>
        <input
          type="text"
          value={this.state.input}
          readOnly
          style={styles.display}
        />

        <div style={styles.buttons}>
          {[1,2,3,4,5,6,7,8,9,0].map((num) => (
            <button
              key={num}
              style={styles.button}
              onClick={() => this.handleClick(num)}
            >
              {num}
            </button>
          ))}

          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              style={styles.button}
              onClick={() => this.handleClick(op)}
            >
              {op}
            </button>
          ))}

          <button style={styles.button} onClick={this.clearInput}>
            C
          </button>
          <button style={styles.button} onClick={this.calculateResult}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
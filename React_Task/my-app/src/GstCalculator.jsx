import React from "react";

class GstCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: "",
      gst: "0",
      gstAmount: "",
      total: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateGST = () => {
    const amount = parseFloat(this.state.amount);
    const gst = parseFloat(this.state.gst);

    const gstAmount = (amount * gst) / 100;
    const total = amount + gstAmount;

    this.setState({
      gstAmount: gstAmount,
      total: total
    });
  };

  render() {
    const styles = {
      box: {
        width: "220px",
        margin: "20px auto"
      },
      input: {
        width: "100%",
        marginBottom: "5px"
      },
      button: {
        width: "100%",
        padding: "5px"
      }
    };

    return (
      <div style={styles.box}>
        <h3>GST Calculator</h3>

        Enter the Amount : <input type="number" name="amount" placeholder="Enter Amount" onChange={this.handleChange} style={styles.input} />

        <select name="gst" onChange={this.handleChange} style={styles.input}>
          {[...Array(101).keys()].map((num) => (
            <option key={num} value={num}>
              {num}%
            </option>
          ))}
        </select>

        <button onClick={this.calculateGST} style={styles.button}>Calculate</button>

        <h4>Amount: {this.state.amount}</h4>
        <h4>GST: {this.state.gstAmount}</h4>
        <h4>Total: {this.state.total}</h4>
      </div>
    );
  }
}

export default GstCalculator;
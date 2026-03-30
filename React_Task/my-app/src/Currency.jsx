import React from "react";

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: "",
      from: "USD",
      to: "INR",
      result: null
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  convertCurrency = async () => {
    const { amount, from, to } = this.state;

    if (!amount) {
      alert("Please enter amount");
      return;
    }

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();

      this.setState({
        result: data.rates[to]
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Currency Converter</h2>

        <input type="number" name="amount" placeholder="Enter amount" value={this.state.amount} onChange={this.handleChange}/>

        <br /><br />

        <select name="from" value={this.state.from} onChange={this.handleChange}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <select name="to" value={this.state.to} onChange={this.handleChange}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <br /><br />

        <button onClick={this.convertCurrency}>Convert</button>
        <h3>{this.state.result && `Converted Amount: ${this.state.result}`}</h3>
      </div>
    );
  }
}

export default CurrencyConverter;
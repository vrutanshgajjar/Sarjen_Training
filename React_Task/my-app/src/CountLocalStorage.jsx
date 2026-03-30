    import React from 'react';
    class CountLocalStorage extends React.Component{
        constructor(props){
            super(props)
            this.state = { counter:0}
        }
       componentDidMount() {
    let value = localStorage.getItem("counter");

    if (value !== null) {
        this.setState({ counter: parseInt(value) });
    }
}
        update=(newvalue)=>{
            this.setState({ counter:newvalue, msg: "" });
            localStorage.setItem("counter", newvalue);
        }
        increment=()=>{
            if(this.state.counter>=10){
                this.setState({msg:"Value is greater than 10"})
            }
            else{
                this.update(this.state.counter+1)
            }
        }
        decrement=()=>{
            if(this.state.counter<=0){
                this.setState({msg:"Value is less than 0"})
            }
            else{
                this.update(this.state.counter-1)
            }
        }
        render(){
            return(
                <>
                <input type="button" value="+" onClick={this.increment}/>
                <input type="button" value="-" onClick={this.decrement} />
                <p>{this.state.counter}</p>
                <p>{this.state.msg}</p>
                </>
            )
        }
    }
    export default CountLocalStorage;
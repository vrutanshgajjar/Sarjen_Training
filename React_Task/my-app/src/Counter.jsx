import React from 'react';
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={ counter:0 }
    }
    increment(){
        if(this.state.counter>=5){
            this.setState({msg:"Sorry > 5"})
        }
        else{
            this.setState({counter:this.state.counter+1, msg:''})
        }
    }
    decrement(){
        if(this.state.counter<1){
            this.setState({msg:"Sorry < 0"})
        }
        else{
            this.setState({counter:this.state.counter-1, msg:''})
        }
    }
    render(){
        return(
            <>
            <input type="button" value="+" onClick={this.increment.bind(this)} />
            <input type="button" value="-" onClick={this.decrement.bind(this)} />
            <input type="button" value="Reset" onClick={()=>this.setState({counter:0})} />
            <br />
            {this.state.counter}
            <br />
            {this.state.msg}
            </>
        );
    }
}
export default Counter;

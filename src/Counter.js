import React,  {Component} from 'react'

class Counter extends Component{
    constructor(){
        super();
        
        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return (
            <div>
                <h1>Counter</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;
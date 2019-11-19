import React from "react";
import LCD from './components/LCD'
import Numberpad from './components/Numberpad'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result: ''
    }
  }
  
  updateState = (name) => {
    let ops = ['+', '*', '/']
    this.setState({
      result: name
    })
    if (name === '='){
      this.calculate()
    } else if(name === 'C') {
      this.clear()
    } else {
      this.setState({
        result: this.state.result + name
      })
    }
    
  }
  
  calculate = (name) => {
    let exp = this.state.result
    let expEnding = exp.split("").splice(-2).join("")
    let trailOps = ['+', '-']
    let trailOp = exp.split("").pop()
    
    
    try {
      if (expEnding=== '/0') {
        this.setState({
          result: ""
        }) 
      } else if (trailOps.includes(trailOp)) {
        let newExpArr = exp.split("")
        newExpArr.pop()
        this.setState({
          result: newExpArr.join("")
        })
      } else {
        this.setState({
          result: (eval(this.state.result) || "")
        })
      }
      
    } catch (e) {
      this.setState({
        result: ''
      })
    }
  }
  
  clear = () => {
    this.setState({
      result: ''
    })
  }
  
  
  render() {
    return (
      <div className="calculator">
        <LCD result={this.state.result}/>
        <Numberpad updateState={this.updateState} />
      </div>
    );
  }
}
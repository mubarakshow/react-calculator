import React from "react";
import Button from './Button'

export default class Numberpad extends React.Component {
  constructor () {
    super()
  }
  
  handleClick = (name) => this.props.updateState(name) 
  
  render() {
    return (
      <div className="keypad">
        <Button className={'nums digit-0'} name={'0'} onClick={this.handleClick}>{'0'}</Button>
        <Button className={'nums digit-1'} name={'1'} onClick={this.handleClick}>{'1'}</Button>
        <Button className={'nums digit-2'} name={'2'} onClick={this.handleClick}>{'2'}</Button>
        <Button className={'nums digit-3'} name={'3'} onClick={this.handleClick}>{'3'}</Button>
        <Button className={'nums digit-4'} name={'4'} onClick={this.handleClick}>{'4'}</Button>
        <Button className={'nums digit-5'} name={'5'} onClick={this.handleClick}>{'5'}</Button>
        <Button className={'nums digit-6'} name={'6'} onClick={this.handleClick}>{'6'}</Button>
        <Button className={'nums digit-7'} name={'7'} onClick={this.handleClick}>{'7'}</Button>
        <Button className={'nums digit-8'} name={'8'} onClick={this.handleClick}>{'8'}</Button>
        <Button className={'nums digit-9'} name={'9'} onClick={this.handleClick}>{'9'}</Button>
        <Button className={'ops op-add'} name={'+'} onClick={this.handleClick}>{'+'}</Button>
        <Button className={'ops op-sub'} name={'-'} onClick={this.handleClick}>{'-'}</Button>
        <Button className={'ops op-mul'} name={'*'} onClick={this.handleClick}>{'*'}</Button>
        <Button className={'ops op-div'} name={'/'} onClick={this.handleClick}>{'/'}</Button>
        <Button className={'ops eq'} name={'='} onClick={this.handleClick}>{'='}</Button>
        <Button className={'ops clear'} name={'C'} onClick={this.handleClick}>{'C'}</Button>
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };

  render(){
    console.log(this.props)
    return (
      <div className='card'>
        {this.props.id}
      </div>
    )
  }
}


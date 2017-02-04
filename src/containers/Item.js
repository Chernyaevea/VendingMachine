import React, { Component } from 'react';
import { buyItem } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Item extends Component {
  constructor(props){
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  };

  onItemClick() {
    console.log(this.props);
    this.props.buyItem({
      id: this.props.id,
      price: this.props.price,
      count: this.props.count
      }); 
  }

  render(){
    return (
      <div className='card' onClick={this.onItemClick}>
        <p className='card-title'>Product: {this.props.id}</p>
        <p className='card-subtitle'>Price: {this.props.price}</p>
        <p className='card-subtitle'>Quantity: {this.props.count}</p>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ buyItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
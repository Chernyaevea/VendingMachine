import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
// import { fetchItems } from '../actions/index';
import { bindActionCreators } from 'redux';

class ItemList extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className='card-deck'>
       {this.props.items.map((item) => {
         return (
           <Item id={item.id} value={item.value} count={item.count} />
         );
       })}
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    items: state.items
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchItems }, dispatch);
// }

export default connect(mapStateToProps)(ItemList);
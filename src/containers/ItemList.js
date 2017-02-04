import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, buyItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import Item from './Item';


const items = [
  { id: 'Coca Cola', price: 30 , count: 10},
  { id: 'Sprite', price: 32, count: 2},
  { id: 'Fanta', price: 12, count: 0},
  { id: 'Bonaqua', price: 43, count: 3},
  { id: 'Lipton', price: 23, count: 4}
];



class ItemList extends Component{
  constructor(props) {
    super(props);  
    
  }

  componentWillMount() {
    this.props.fetchItems(items);
  }

  

  render(){
    return (
      <div className='card-deck'>
       {this.props.items.map((item) => {
         return (
           <Item key={item.id} id={item.id} price={item.price} count={item.count}/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems: fetchItems }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
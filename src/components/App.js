import React, { Component } from 'react';
import CashAcceptor from '../containers/CashAcceptor';
import ItemList from '../containers/ItemList';




export default class App extends Component {
  render() {
    return (
      <div className='card'>
        <CashAcceptor />
        <ItemList />
      </div>
    );
  }
}

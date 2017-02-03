import React, { Component } from 'react';
import CashAcceptor from '../containers/CashAcceptor';
import ItemList from '../containers/ItemList';
import Item from './Item';



export default class App extends Component {
  render() {
    return (
      <div>
        <CashAcceptor />
        <ItemList />
      </div>
    );
  }
}

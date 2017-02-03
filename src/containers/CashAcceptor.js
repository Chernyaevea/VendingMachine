import React, { Component } from 'react';
import { addCash } from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class CashAcceptor extends Component{
  constructor(props) {
    super(props);
    
    this.state = { cashInput: '', cash: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(event){
    this.setState({ cashInput : event.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.addCash(this.state.cashInput);
    this.setState({cashInput : ''})
    console.log('submit');
  
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <span className='input-group-addon'>{this.props.cash}</span> 
        <input
          placeholder='Type the amount of money you want to add'
          className='form-control'
          value={this.state.cashInput}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-primary'>Add</button>
        </span>
        
      </form>
    );
  }

}


function mapStateToProps(state) {
  // return will be placed to props of CashAcceptor
  return {
    cash: state.cash
  };
}

function mapDispatchToProps(dispatch) {
  // whenever addCash is called, the result will be 
  // passed to reducers
  
  return bindActionCreators({ addCash: addCash }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CashAcceptor);

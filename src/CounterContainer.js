import React, { Component } from 'react';
import { connect } from 'react-redux';

const Add = { type :'ADD' };
const Remove = { type : 'REMOVE' }; 
const AddTEN = { type :'ADDTEN' };
const RemoveTEN = { type : 'REMOVETEN' };
const Reset = { type : 'RESET' };

class CounterComponent extends Component {
  render(){
    const {count, dispatch} = this.props;
    return (
      <div>
        <p>{count}</p>
        <button onClick={()=>dispatch(Add)}>+</button>
        <button onClick={()=>dispatch(Remove)}>-</button>
        <button onClick={()=>dispatch(AddTEN)}>+</button>
        <button onClick={()=>dispatch(RemoveTEN)}>-</button>
        <button onClick={()=>dispatch(Reset)}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count : state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent)

export default CounterContainer;
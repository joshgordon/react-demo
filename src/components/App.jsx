import React from 'react';
import Toggle from './toggle';
import immutable from 'immutable';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {states: immutable.fromJS([])}
  }

  componentWillMount() {
    $.get('/api/state').then((state) => {
      console.log(state);
      this.setState({states: immutable.fromJS(state)});
    });
  }

  toggle = (id) => {
    return () =>{
      $.get('/api/' + (id + 1) + '/' + (this.state.states.get(id) ? 'off' : 'on'))
      this.setState({
        states: this.state.states.update(id, (value) => !value)}
      );
      console.log(this.state.states);
    }
  }

  render() {
    const switches = this.state.states.map((state, id) =>
      <Toggle state={state} toggle={this.toggle(id)} key={id}/>
    )
    return <div>{switches}</div>
  }
}

export default App

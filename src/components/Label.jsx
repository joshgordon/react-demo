import React from 'react';
import ReactDOM from 'react-dom';

class Label extends React.Component {
  constructor (props) {
    super(props);
    this.state = {editing: false, text: "hi"}

    window.addEventListener ('keydown', this._handleKeyPress);
  }

  _handleKeyPress = (event) => {
    //enter to save
    if(event.keyCode == 13) {
      this._save();

      //esc to abort.
    } else if (event.keyCode == 27) {
      this.setState({editing: false});
    }
  }

  componentDidUpdate() {
    if (this.state.editing) {
      ReactDOM.findDOMNode(this.refs.editBox).focus();
    }
  }

  _edit = () => {
    this.setState({editing: true});
  }

  _save = () => {
    let newState = this.refs.editBox.value;
    this.setState({editing: false, text: newState});
  }

  render() {
    if (this.state.editing) {
      return <div>
        <input type="text"
          ref="editBox"
          onBlur={this._save}
          defaultValue={this.state.text}/>
      </div>
    } else {
      return <div onClick={this._edit}>{this.state.text}</div>;
    }
  }
}
export default Label;

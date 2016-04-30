import React from 'react';
import $ from 'jquery';
import Label from './label';

require('./Toggle.less');

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

/*
  componentWillMount () {
    $.get('/pyrelay/' + this.props.key).then((label) => {
      this.setState({label: label});
    }, (err) => {
      console.log(err);
    });
  }
*/

  updateLabel = () => {
    newLabel = this.refs.text.value;
/*
    $.ajax({
      method: "PUT",
      url: '/pyrelay/' + this.props.key,
      processData: false,
      data: newLabel,
      contentType: "text/plain"
    });
*/
    this.setState({label: newLabel});
  }

  render() {
    return <div className="container">
      <img src={"/img/" + (this.props.state ? "on.jpg" : "off.jpg")}
        className="toggle"
        onClick={this.props.toggle} />
      <Label/>
    </div>
  }
}

export default Toggle

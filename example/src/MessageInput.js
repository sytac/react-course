import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(e) {
    this.setState({ message: e.target.value });
  }

  onKeyDown(e) {
    if (e.keyCode === 13 && this.state.message) {
      this.props.onSend(this.state.message);
      this.setState({message: ''});
    }
  }

  render() {
    return (
      <input
        id="message"
        placeholder="Say hello!"
        value={this.state.message}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        type="text"
      />
    );
  }
}

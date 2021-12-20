import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: true,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div className="app">
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Modal;

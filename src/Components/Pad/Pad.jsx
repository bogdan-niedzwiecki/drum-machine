import React, { Component } from 'react';
import classNames from 'classnames';

class Pad extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(this.props.url);
    this.state = { pressed: false };
  }

  handleKeydown = event => {
    if (event.key.toLowerCase() === this.props.btn) {
      this.setState({ pressed: true }, this.playFromBeggining(this.props.power))
    }
  };

  handleKeyup = event => {
    if (event.key.toLowerCase() === this.props.btn) {
      this.setState({ pressed: false })
    }
  };

  playFromBeggining(power = true) {
    if (power) {
      this.audio.volume = this.props.volume;
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.play();
    }
    this.props.onClick()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
    document.removeEventListener("keyup", this.handleKeyup);
  }

  render() {
    let padClass = classNames(this.props.className, {
      'drummachine__pad--pressed': this.state.pressed
    });
    return (
      <div className={padClass} onClick={() => { this.playFromBeggining(this.props.power) }}>
        <p>{this.props.btn}</p>
      </div>
    );
  }

}

export default Pad;

import React, { Component } from 'react';
import classNames from 'classnames';

class Volume extends Component {

  handleArrowKeyDown = event => {
    if (event.keyCode === 38 || event.keyCode === 39) {
      this.props.volumeUp()
    }
    if (event.keyCode === 37 || event.keyCode === 40) {
      this.props.volumeDown()
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrowKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleArrowKeyDown);
  }

  render() {
    let padClass = classNames(this.props.className);
    return (
      <div className={padClass}>
        <input
          id="typeinp"
          type="range"
          step="0.05"
          min="0" max="1"
          onKeyDown={e => e.preventDefault()}
          value={this.props.volume}
          onChange={this.props.onChange} />
      </div>
    );
  }

}

export default Volume;

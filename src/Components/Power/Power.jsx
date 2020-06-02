import React, { Component } from 'react';
import classNames from 'classnames';

class Power extends Component {
 
  componentDidMount() {
    document.addEventListener('keypress', this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  handleKeypress = event => {
    if (event.key.toLowerCase() === this.props.btn) {
      this.props.onChange()
    }
  };

  render() {
    let padClass = classNames(this.props.className);
    return (
      <div>
        <input type="checkbox"
          name="power"
          id="power"
          checked={this.props.power}
          onChange={this.props.onChange} />
        <label htmlFor="power" className={padClass} ><p>{this.props.btn}</p></label>
      </div>
    );
  }

}

export default Power;

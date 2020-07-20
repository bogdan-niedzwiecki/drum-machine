import React, { Component } from 'react';
import Pad from './Components/Pad/Pad';
import Preset from './Components/Preset/Preset';
import Power from './Components/Power/Power';
import Volume from './Components/Volume/Volume';
import './App.scss';
import { presetOne, presetTwo } from './presets'

class App extends Component {
  state = {
    preset: false,
    power: true,
    display: '',
    volume: 0.3
  }

  render() {
    return (
      <div className="app">
        <div className="drummachine">
          <div className="drummachine__drumpad">
            {this.state.preset ? presetOne.map(pad =>
              <Pad className="drummachine__pad"
                key={pad.id}
                url={pad.url}
                btn={pad.btn}
                power={this.state.power}
                volume={this.state.volume}
                onClick={() => this.state.power ? this.setState({ display: pad.id }) : null} />)
              : presetTwo.map(pad =>
                <Pad className="drummachine__pad"
                  key={pad.id}
                  url={pad.url}
                  btn={pad.btn}
                  power={this.state.power}
                  volume={this.state.volume}
                  onClick={() => this.state.power ? this.setState({ display: pad.id }) : null} />)}
          </div>
          <div className="drummachine__controlpanel">
            <div className="drummachine__display"><p>{this.state.display || (this.state.power ? 'Power On' : 'Power Off')}</p></div>
            <Power btn={'p'}
              className="drummachine__pad"
              power={this.state.power}
              onChange={() => this.setState(state => ({ power: !state.power, display: state.power ? 'Power Off' : 'Power On' }))} />
            <Preset btn={'['}
              className="drummachine__pad"
              preset={this.state.preset}
              onChange={() => this.setState(state => ({ preset: !state.preset, display: state.power ? (state.preset ? 'Preset Two' : 'Preset One') : 'Power Off' }))} />
            <Volume className="drummachine__volume"
              volume={this.state.volume}
              onChange={event => this.setState({ volume: parseFloat(event.target.value), display: this.state.power ? `Volume: ${(parseFloat(event.target.value)* 100).toFixed()}%` : 'Power Off' })}
              volumeUp={() => this.setState(state => state.volume < 1 ? { volume: parseFloat((state.volume + 0.05).toFixed(2)), display: state.power ? `Volume: ${parseFloat((state.volume + 0.05) * 100).toFixed()}%` : 'Power Off' } : null)}
              volumeDown={() => this.setState(state => state.volume > 0 ? { volume: parseFloat((state.volume - 0.05).toFixed(2)), display: state.power ? `Volume: ${parseFloat((state.volume - 0.05) * 100).toFixed()}%` : 'Power Off' } : null)} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;

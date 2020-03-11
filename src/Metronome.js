import React from 'react';
import './App.css';
import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronome extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        playing: false,
        bpm: 100,
        count: 0,
        beatsPerMeasure: 4,
      };
  
      this.click1 = new Audio(click1);
      this.click2 = new Audio(click2);
    }
  
    setBPM(e) {
      const newBPM = e.target.value;
      if (this.state.playing) {
        clearInterval(this.timer);
        this.timer = setInterval(this.playClick, (60 / newBPM) * 1000);
  
        this.setState({
          count: 0,
          bpm: newBPM
        });
      } else {
        this.setState({ bpm: newBPM });
      }
    }
  
    // play clicking noise
    playClick = () => {
      if (this.state.count % this.state.beatsPerMeasure === 0) {
        this.click2.play();
      } else {
        this.click1.play();
      }
  
      const newCount = (this.state.count + 1) % this.state.beatsPerMeasure
      this.setState({
        count: newCount,
      });
    }
  
    // toggle start or stop of metronome
    togglePlaying = () => {
      if (this.state.playing) {
        // stop
        clearInterval(this.timer);
        this.setState({
          playing: false
        });
      } else {
        // start
        this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
        this.setState(
          {
            count: 0,
            playing: true,
          },
          this.playClick
        );
      }
    }
  
    // always stop metronome when display switches
    componentWillUnmount() {
      clearInterval(this.timer);
      this.setState({playing: false});
    }
  
    setBeatsPerMeasure(newBPM) {
      const measure = newBPM.target.value;
      this.setState({beatsPerMeasure: measure});
    }
  
    render() {
      return (
        <div className="metronome">
          <h4>Metronome</h4>
          <div className="bpm-slider">
            <div>{this.state.bpm} BPM</div>
            <input type="range" min="60" max="240" 
                  value={this.state.bpm} onChange={e=>this.setBPM(e)} />
          </div>
          <label htmlFor="bpm-input">Enter beats-per-measure:</label><br />
          <input id="bpm-input" type="number" value={this.state.beatsPerMeasure} 
                 onChange={e => this.setBeatsPerMeasure(e)} />
          <button 
            onClick={this.togglePlaying}>
              {this.state.playing ? "Stop" : "Start"}
          </button>
        </div>
      );
    }
  }

export default Metronome;
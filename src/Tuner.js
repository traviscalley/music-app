import React from 'react';
import './App.css';
import Wad from 'web-audio-daw';

const notes = [
	{pitch: 'E2', label: 'E2'},
	{pitch: 'A3', label: 'A3'}
];

class Tuner extends React.Component {

	constructor(props) {
      super(props);
    
	  this.state = {
		wad: new Wad(Wad.presets.piano)
      };

	}

	componentWillUnmount() {
		Wad.stopAll();
	}

  render() {
	Wad.stopAll();
    return (
      <div className="Tuner">
		  <h2>Basic Guitar Tuner</h2>
		  <button onClick={()=>this.state.wad.play(notes[0])}>E</button>
		  <button onClick={()=>this.state.wad.play(notes[1])}>A</button>
      </div>
    );
  }
}

export default Tuner;
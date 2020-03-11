import React, {useState} from 'react';
import './App.css';
import click1 from './click1.wav'
import click2 from './click2.wav'
import A from './a.png'
import B from './b.png'
import C from './c.png'
import D from './d.png'
import E from './e.png'
import F from './f.png'
import G from './g.png'

/*
Must utilize CSS styling
Must utilize state and props
Must have at least one component besides the App component
Must use  array(s) and/or object(s) to store some form of data in your app
Must incorporate some form of form/related interactivity
Must include a link to a read me page that describes the application
Must be deployed as a production build to netlify
Must demonstrate reasonable effort (utilize your journal to document your work on this)
Your name is clearly visible on the app page and readme page
 */

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

const scales = [
  {name: "A Major", img: A, notes: "A - B - C# - D - E - F# - G# - A"},
  {name: "B Major", img: B, notes: "B - C# - D# - E - F# - G# - A# - B"},
  {name: "C Major", img: C, notes: "C - D - E - F - G - A - B - C"},
  {name: "D Major", img: D, notes: "D - E - F# - G - A - B - C# - D"},
  {name: "E Major", img: E, notes: "E - F# - G# - A - B - C# - D# - E"},
  {name: "F Major", img: F, notes: "F - G - A - Bb - C - D - E - F"},
  {name: "G Major", img: G, notes: "G - A - B - C - D - E - F# - G"}
];

class MusicScale extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({scale: scales[0]});
    this.setScale = this.setScale.bind(this);
  }

  setScale(s) {
    const newScale = scales[s.target.value];
    this.setState({scale: newScale});
    
  }

  render() {
    return (
      <div>
        <h3>Scale Selection</h3>
        <form>
          <label htmlFor="scales">Select a Scale: </label>
          <select id="scales" size={1} onChange={e => this.setScale(e)}>
            {scales.map((e, i) => <option key={i} value={i}>{e.name}</option>)}
          </select>
        </form>
        <h2>{this.state.scale.name}</h2>
        <p>{this.state.scale.notes}</p>
        <img alt="" src={this.state.scale.img} width={800}></img>
      </div>
    );
  }
}

function MusicApp() {
  return (
    <div className="MusicApp">
      <h2>Music Application</h2>
      <MusicScale /><br/>
      <Metronome /><br/><br/>
    </div>
  );
}

function ReadMe() {
  return (
    <div className="ReadMe">
      <h2>ReadMe Documentation</h2>
      <div className="readme-p">
      <p>This application consists of Musical Scales and a Metronome.</p>
      <h4>Scale Selection Information</h4>
      <p>To select a scale, the user must click on the dropdown menu and select a given major scale.
         Once the user has selected a scale they will immediately see a paragraph of the notes in the 
         scale and an image of the sheet music for the scale.
      </p>
      <h4>Metronome Information</h4>
      <h5>Metronome Slider</h5>
      <p>Use the slider to select the BPM and then press "Start" to hear the beats. 
         You can continuously adjust the slider while the metronome is playing and 
         the BPM will actively update.
      </p>
      <h5>Beats-Per-Measure Selection</h5>
      <p>
        Use the numerical input box to choose the number of beats to be played per measure.
        Changing this value will actively update the beats-per-measure of the metronome.
        The number of beats heard is easily counted by using the unique sounding click as 1.
        The default value is 4 beats-per-measure.
      </p>
      </div><br/><br/>
    </div>
  );
}

function App() {

  const [mainPage, setMainPage] = useState(false); // false is readME
  const buttonText = mainPage ? "View ReadMe" : "View Application"
  const pageElements = mainPage ? <MusicApp /> :  <ReadMe />

  let pageContents =
    <>
      <h2>Travis Calley</h2>
      <button className="link-button" 
              onClick={()=>setMainPage(!mainPage)}>{buttonText}</button><br/>
      {pageElements}
    </>;

  return (<div className="App">{pageContents}</div>);
}

export default App;

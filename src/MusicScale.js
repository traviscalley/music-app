import React from 'react';
import './App.css';
import A from './a.png';
import B from './b.png';
import C from './c.png';
import D from './d.png';
import E from './e.png';
import F from './f.png';
import G from './g.png';

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

  export default MusicScale;
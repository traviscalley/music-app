import React from 'react';
import './App.css';

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

  export default ReadMe;
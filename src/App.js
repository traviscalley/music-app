import React, {useState} from 'react';
import './App.css';
import ReadMe from './ReadMe';
import MusicScale from './MusicScale';
import Metronome from './Metronome';
import Tuner from './Tuner';

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

function MusicApp() {
  return (
    <div className="MusicApp">
      <h2>Music Application</h2>
      <MusicScale /><br/>
      <Metronome />
      <br/><br/>
    </div>
  );
}

function App() {
  const [mainPage, setMainPage] = useState(true); // false is readME
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
import { useState } from 'react';
// import Components
import Nav from './components/Nav';
import DisplayCurrentSong from './components/DisplayCurrentSong';
import Controller from './components/Controller';
import SongLibrary from './components/SongLibrary';
// import Utils
import musicSource from './utils/musicSource';
// import Style
import './styles/App.scss';

function App() {
    // States
    const [songs, setSongs] = useState( musicSource() );
    const [currentSong, setCurrentSong] = useState( songs[0] );

    return (
        <div className="App">
            <Nav />
            <DisplayCurrentSong currentSong={currentSong} />
            <Controller />
            <SongLibrary />
        </div>
    );
}

export default App;

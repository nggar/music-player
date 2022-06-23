import { useRef, useState } from 'react';
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
    // Ref
    const audioRef = useRef( undefined );
    // States
    const [songs, setSongs] = useState( musicSource() );
    const [currentSong, setCurrentSong] = useState( songs[0] );
    const [isPlaying, setIsPlaying] = useState( false );

    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <DisplayCurrentSong currentSong={currentSong} />
            <Controller
                songs={songs} setSong={setSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <SongLibrary />
        </div>
    );
}

export default App;

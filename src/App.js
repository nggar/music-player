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
    const [libraryStatus, setLibraryStatus] = useState( false );
    const [currentSongInfo, setCurrentSongInfo] = useState(
        {
            currentTime: 0,
            duration: 0
        }
    );

    // get time information on current song
    const timeUpdateHandler = ( e ) => {
        let current = e.target.currentTime; // this currentTime and duration is property from audio tag
        let duration = e.target.duration;

        setCurrentSongInfo( {
            currentTime: current,
            duration: duration
        } )
    }


    return (
        <div className={`App ${libraryStatus ? 'song-library-active' : ''}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <DisplayCurrentSong
                currentSong={currentSong}
            />
            <Controller
                songs={songs}
                setSongs={setSongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSongInfo={currentSongInfo}
                setCurrentSongInfo={setCurrentSongInfo}
                audioRef={audioRef}
            />
            <SongLibrary
                songs={songs}
                libraryStatus={libraryStatus}
            />
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler} >
            </audio>
        </div>
    );
}

export default App;

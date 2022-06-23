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
    const [songInfo, setSongInfo] = useState( {
        currentTime: 0,
        duration: 0,
        animationPrecentage: 0,
    } );
    const [libraryStatus, setLibraryStatus] = useState( false );

    // Event Handler
    const timeUpdateHandler = ( e ) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // calculate precentage
        const roundedCurrent = Math.round( current );
        const roundedDuration = Math.round( duration );
        const animationPrecentage = Math.round( ( roundedCurrent / roundedDuration ) * 100 );
        setSongInfo( { ...songInfo, currentTime: current, duration: duration, animationPrecentage: animationPrecentage } );
    };

    const songEndedHandler = () => {
        let currentIndex = songs.findIndex( ( song ) => song.id === currentSong.id );
        setCurrentSong( songs[( currentIndex + 1 ) % songs.length] );
        if ( isPlaying ) audioRef.current.play();
    }


    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <DisplayCurrentSong currentSong={currentSong} />
            <Controller audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} songInfo={songInfo} setSongInfo={setSongInfo} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} />
            <SongLibrary audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus} />
            <audio
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndedHandler}
            ></audio>
        </div>
    );
}

export default App;

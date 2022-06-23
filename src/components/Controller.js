import { Play, SkipBack, SkipForward, Pause } from 'react-feather';

const Controller = ( { songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, currentSongInfo, setcurrentSongInfo, audioRef } ) => {

    // get time info
    const getTime = ( time ) => {
        return (
            `${Math.floor( time / 60 )}:${( "0" + Math.floor( time % 60 ) ).slice( -2 )}`
        );
    };

    // play and pause current song
    const playCurrentSongHandler = () => {
        if ( isPlaying ) {
            audioRef.current.pause();
            setIsPlaying( !isPlaying );
        } else {
            audioRef.current.play();
            setIsPlaying( !isPlaying );
        }
    }




    return (
        <div className="controller">
            <div className="time">
                <p className="time__current">{getTime( currentSongInfo.currentTime )}</p>
                <div className="time__track">
                    <input type="range" />
                    <div className="animate-track"></div>
                </div>
                <p className="time__duration">{getTime( currentSongInfo.duration )}</p>
            </div>
            <div className="play">
                <SkipBack size={30} />
                {isPlaying ?
                    <Pause size={30} onClick={playCurrentSongHandler} /> :
                    <Play style={{ paddingTop: "2px" }} size={30} onClick={playCurrentSongHandler} />
                }
                <SkipForward size={30} />
            </div>
        </div>
    )
}

export default Controller;
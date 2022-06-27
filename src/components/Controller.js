import { Play, SkipBack, SkipForward, Pause } from 'react-feather';

const Controller = ( { songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, currentSongInfo, setCurrentSongInfo, audioRef } ) => {

    // get time info
    const getTime = ( time ) => {
        return (
            `${Math.floor( time / 60 )}:${( "0" + Math.floor( time % 60 ) ).slice( -2 )}`
        );
    };

    // play and pause current song
    const playCurrentSongHandler = async () => {
        if ( isPlaying ) {
            audioRef.current.pause();
            setIsPlaying( !isPlaying );
        } else {
            audioRef.current.play();
            setIsPlaying( !isPlaying );
        }

    }

    // get value from input 
    const dragHandler = ( e ) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentSongInfo( { ...currentSongInfo, currentTime: e.target.value } )
    }

    // style track animation
    const trackAnimation = {
        transform: `translateX(${currentSongInfo.animationPercentage}%)`
    }

    // active song indicator
    const activeLibraryHandler = ( nextPrev ) => {
        const newSongs = songs.map( ( song ) => {
            if ( song.id === nextPrev.id ) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        } );
        setSongs( newSongs );
    }

    // skip functionality
    const skipSongHandler = async ( direction ) => {
        // find index of current song
        const currentSongIndex = songs.findIndex( song => {
            return song.id === currentSong.id;
        } );

        // skip forward;
        if ( direction === 'skip-forward' ) {
            await setCurrentSong( songs[( currentSongIndex + 1 ) % songs.length] );
            activeLibraryHandler( songs[( currentSongIndex + 1 ) % songs.length] );
        }
        // skip back
        if ( direction === 'skip-back' ) {
            if ( ( currentSongIndex - 1 ) === - 1 ) {
                await setCurrentSong( songs[songs.length - 1] );
                activeLibraryHandler( songs[songs.length - 1] );
                if ( isPlaying ) audioRef.current.play();
                return;
            } else {
                await setCurrentSong( songs[( currentSongIndex - 1 )] );
                activeLibraryHandler( songs[( currentSongIndex - 1 ) % songs.length] );
            }
        }
        // autoplay when skip song
        if ( isPlaying ) audioRef.current.play();
    }


    return (
        <div className="controller">
            <div className="time">
                <p className="time__current">{getTime( currentSongInfo.currentTime )}</p>
                <div className="time__track"
                    style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }}>
                    <input type="range"
                        onChange={dragHandler}
                        min={0}
                        max={currentSongInfo.duration || 0}
                        value={currentSongInfo.currentTime}
                    />
                    <div style={trackAnimation} className="animate-track"></div>
                </div>
                <p className="time__duration">{currentSongInfo.duration ? getTime( currentSongInfo.duration ) : "0:00"}</p>
            </div>
            <div className="play">
                <SkipBack size={30} onClick={() => skipSongHandler( 'skip-back' )} />
                {isPlaying ?
                    <Pause size={30} onClick={playCurrentSongHandler} /> :
                    <Play style={{ paddingTop: "2px" }} size={30} onClick={playCurrentSongHandler} />
                }
                <SkipForward size={30} onClick={() => skipSongHandler( 'skip-forward' )} />
            </div>
        </div>
    )
}

export default Controller;
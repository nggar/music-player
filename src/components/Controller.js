import { SkipBack, SkipForward, Play } from 'react-feather';

const Controller = ( { audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, setCurrentSong, setSongs } ) => {

    // Event Hadler
    const playSongHandler = () => {
        if ( isPlaying ) {
            audioRef.current.pause();
            setIsPlaying( !isPlaying );
        } else {
            audioRef.current.play();
            setIsPlaying( !isPlaying );
        }
    };
    const dragHandler = ( e ) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo( { ...songInfo, currentTime: e.target.value } );
    };

    const skipTrackHandler = async ( direction ) => {
        let currentIndex = songs.findIndex( ( song ) => song.id === currentSong.id );
        if ( direction === 'skip-forward' ) {
            await setCurrentSong( songs[( currentIndex + 1 ) % songs.length] );
            activeLibraryHandler( songs[( currentIndex + 1 ) % songs.length] );
        } else if ( direction === 'skip-back' ) {
            if ( ( currentIndex - 1 ) % songs.length === -1 ) {
                await setCurrentSong( songs[songs.length - 1] );
                activeLibraryHandler( songs[songs.length - 1] );
                if ( isPlaying ) audioRef.current.play();
                return;
            } else {
                await setCurrentSong( songs[( currentIndex - 1 ) % songs.length] );
                activeLibraryHandler( songs[( currentIndex - 1 ) % songs.length] );
            }
        }
        if ( isPlaying ) audioRef.current.play();
    }

    // Functions
    const getTime = ( time ) => {
        return (
            // Math.floor( time / 60 ) + ":" + ( "0" + Math.floor( time % 60 ) ).slice( -2 )
            `${Math.floor( time / 60 )}:${( "0" + Math.floor( time % 60 ) ).slice( -2 )}`
        );
    };

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

    // Add style
    const trackAnim = {
        transform: `translateX(${songInfo.animationPrecentage}%)`,
    };

    return (
        <div className="controller">
            <div className="time">
                <p className="time__current">{getTime( songInfo.currentTime )}</p>
                <div style={{ background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})` }} className="time__track">
                    <input
                        onChange={dragHandler}
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range" />
                    <div style={trackAnim} className="time__track__animation"></div>
                </div>
                <p className="time__duration">{songInfo.duration ? getTime( songInfo.duration ) : "0:00"}</p>
            </div>
            <div className="play">
                <SkipBack onClick={() => { skipTrackHandler( 'skip-back' ) }} size={30} />
                <Play onClick={playSongHandler} size={30} />
                <SkipForward onClick={() => { skipTrackHandler( 'skip-forward' ) }} size={30} />
            </div>


        </div>
    )
}

export default Controller;
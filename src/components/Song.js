const Song = ( { song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs } ) => {

    const songSelectHandler = async () => {
        await setCurrentSong( song );
        // Add active state
        const newSongs = songs.map( ( song ) => {
            if ( song.id === id ) {
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
        // check if the song playing
        if ( isPlaying ) audioRef.current.play();
    }

    return (
        <div onClick={songSelectHandler} className={`song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-info">
                <h3 className="song-info__title">
                    {song.name}
                </h3>
                <h4 className="song-info__artist">
                    {song.artist}
                </h4>
            </div>
        </div>
    )
}

export default Song;
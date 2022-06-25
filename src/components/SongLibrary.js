import Song from './Song';

const SongLibrary = ( { songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus } ) => {
    return (

        <div className={`song-library ${libraryStatus ? 'song-library--active' : ''}`}>
            <h2>Library</h2>
            <div className="songs">
                {/* create elements from musiceSource */}
                {songs.map( song =>
                    <Song
                        song={song}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                )}
            </div>
        </div>
    )
}

export default SongLibrary;
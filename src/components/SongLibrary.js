import Song from './Song';

const SongLibrary = ( { songs, libraryStatus } ) => {
    return (

        <div className={`song-library ${libraryStatus ? 'song-library--active' : ''}`}>
            <h2>Library</h2>
            <div className="songs">
                {/* create elements from musiceSource */}
                {songs.map( song =>
                    <Song
                        song={song}
                        key={song.id}
                    />
                )}
            </div>
        </div>
    )
}

export default SongLibrary;
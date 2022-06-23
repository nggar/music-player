const Song = ( { song } ) => {
    return (
        <div className="song">
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
const DisplayCurrentSong = ( { currentSong } ) => {
    return (
        <main className="display-song">
            <img src={currentSong.cover} alt={currentSong.name} className="display-song__cover" />
            <h2 className="display-song__title">{currentSong.name}</h2>
            <h3 className="display-song__artist">{currentSong.artist}</h3>
        </main>
    )
}

export default DisplayCurrentSong;
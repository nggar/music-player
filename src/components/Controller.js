import { Play, SkipBack, SkipForward, Pause } from 'react-feather';

const Controller = ( { songs, setSongs, currentSong, setCurrentSong, isPlaying } ) => {
    return (
        <div className="controller">
            <div className="time">
                <p className="time__current"></p>
                <div className="time__track">
                    <input type="range" />
                    <div className="animate-track"></div>
                </div>
                <p className="time__duration"></p>
            </div>
            <div className="play">
                <SkipBack strokeWidth={2} size={32} />
                {isPlaying ? <Play strokeWidth={2} size={32} /> : <Pause strokeWidth={2} size={32} />}
                <SkipForward strokeWidth={2} size={32} />
            </div>
        </div>
    )
}

export default Controller;
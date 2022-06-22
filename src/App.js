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
    return (
        <div className="App">
            <Nav />
            <DisplayCurrentSong />
            <Controller />
            <SongLibrary />
        </div>
    );
}

export default App;

// import Components
import Nav from './components/Nav';
import DisplayCurrentSong from './components/DisplayCurrentSong';
import Controller from './components/Controller';
import SongLibrary from './components/SongLibrary';

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

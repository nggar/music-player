import { Music } from 'react-feather';

const Nav = ( { libraryStatus, setLibraryStatus } ) => {
    return (
        <nav className="nav">
            <div className="logo">
                <h1>Hope</h1>
            </div>
            <button onClick={() => setLibraryStatus( !libraryStatus )} className='library-button'>
                <span>Library</span> <Music size={16} strokeWidth={2} />
            </button>
        </nav>
    )
}

export default Nav;
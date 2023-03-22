import './App.css';
import Navbar from './components/Layout/Navbar';
import DetailSong from './components/Song/DetailSong';
import ListSongs from './components/Song/ListSongs';
import { SongProvider } from './contexts/SongContext';
import { UserProvider } from './contexts/UserContext';

function App() {
	
	return (
    <UserProvider>
      <SongProvider>
        <Navbar />
        <div className="grid grid-rows-7 bg-slate-700 h-screen overflow-hidden">
          {/* span 3 */}
          <DetailSong />
          {/* span 4 */}
          <ListSongs />
        </div>
        {/* <Playing /> */}
      </SongProvider>
    </UserProvider>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
import { useState } from 'react';
function App() {
	const [song, setSong] = useState(DataSongs[0]);

	const handleSetSong = (idSong) => {
		const song = DataSongs.find((song) => song.id === idSong);
		if (!song) setSong(DataSongs[0]);
		else setSong(song);
	};
	return (
		<div className="App ">
			<Songs.Provider value={{ DataSongs, song, handleSetSong }}>
				<Navbar />
				<div className="grid grid-rows-7 bg-slate-700 h-screen overflow-hidden">
					{/* span 3 */}
					<DetailSong />
					{/* span 4 */}
					<ListSongs />
				</div>
				{/* <Playing /> */}
			</Songs.Provider>
		</div>
	);
}

export default App;

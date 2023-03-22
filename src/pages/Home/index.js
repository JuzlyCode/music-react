import React from 'react'
import DetailSong from 'components/Song/DetailSong';
import ListSongs from 'components/Song/ListSongs';

const HomePage = () => {
  return (
    <div className="grid grid-rows-7 bg-slate-700 h-screen overflow-hidden">
      {/* span 3 */}
      <DetailSong />
      {/* span 4 */}
      <ListSongs />
    </div>
  );
}

export default HomePage
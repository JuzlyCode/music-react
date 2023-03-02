import React, { useContext, useEffect, useState } from 'react';
import { Songs } from '../Context';

export default function ListSongs() {
	const { DataSongs, handleSetSong, song } = useContext(Songs);
	const [idSong, setidSong] = useState(0);
	const handlePlaySong = (idSong) => {
		setidSong(idSong);
		handleSetSong(idSong);
	};
	useEffect(() => {
		setidSong(song.id);
	}, [song]);
	return (
		<div className="row-span-4 mt-0 overflow-y-scroll md:border-t-4">
			<table className="table-auto w-full">
				<thead className="text-white h-12">
					<tr>
						<th className="w-[10%]">#</th>
						<th className="text-left">Title</th>
						<th className="w-[10%]">Author</th>
						<th className="w-[10%]">
							<i className="fa fa-download"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					{DataSongs.map((song, index) => (
						<tr
							key={index}
							className={`md:cursor-pointer bg-slate-800 h-12 text-white hover:bg-gray-600 ${
								idSong === song.id && 'bg-black-600 text-green-200'
							}`}
							onClick={() => handlePlaySong(song.id)}
						>
							<td className="text-center">{index + 1}</td>
							<td>{song.name}</td>
							<td className="text-center">{song.author}</td>
							<td className="text-center">
								<a href={song.url}>
									<i className="fa fa-download"></i>
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

import React, { useContext } from 'react';
import { Songs } from '../Context';
import Playing from './Playing';
import './keyf.css';
export default function DetailSong() {
	const { song } = useContext(Songs);
	return (
		<div className="row-span-3 p-3 overflow-hidden">
			<div className="flex h-[255px]">
				<div className="w-[20%] relative">
					<img className="w-[250px] h-[250px] rounded-full absolute inset-0 keyf " src={song.links.images[0].url} alt="avatar" />
					<div className='absolute w-[250px] h-[250px] inset-0 flex justify-center items-center'>
					<div className="h-14 w-14 rounded-full bg-slate-700"></div>
					</div>
				</div>
				<div className='w-[80%] relative'>
					<div className="absolute top-0 right-5 flex mt-[-10px]">
						<button className="text-white rounded-lg px-4 py-3 bg-slate-500 hover:bg-sky-400">Sign In</button>
						<p className="text-white text-xl mt-[-2px] mr-3 ml-3">|</p>
						<button className="text-white rounded-lg px-4 py-3 bg-slate-500 hover:bg-sky-400">Sign Up</button>
					</div>
					<div className='m-auto mt-20'>
						<h2 className="text-white font-bold text-center uppercase">Now playing</h2>
						<h2 className="text-neutral-400 text-2xl text-center uppercase">{song.name}</h2>
					</div>
					<div className="w-[100%] absolute bottom-0">
						<Playing />
					</div>
				</div>
				
				{/* <div className="flex justify-evenly items-center mt-10">
					<img className="w-[70px] rounded-full" src={song.links.images[1].url} alt="avatar" />
					<span className="text-xl text-white">{song.author}</span>
				</div> */}
			</div>
		</div>
	);
}

import React from 'react';

export default function UserHome({ userData }) {
	const logOut = () => {
		window.localStorage.clear();
		window.location.href = './sign-in';
	};
	return (
		<div
			className={window.localStorage.getItem('token') ? 'text-white absolute top-0 right-5 flex mt-[-10px]' : 'hidden'}
		>
			<h1>{window.localStorage.getItem('email')}</h1>
			<br />
			
			<button onClick={logOut} className="ml-3 btn btn-primary">
				Log Outs
			</button>
		</div>
	);
}

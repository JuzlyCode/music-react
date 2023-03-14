import React, { useState } from 'react';
import UserHome from './UserHome';

export default function Login() {
	const [show, setShow] = useState(1);
	const tab = (e) => {
		setShow(e);
	};

	//check login
	let checkLogin = window.localStorage.getItem('token');

	//Login
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		console.log(email, password);
		window.localStorage.setItem('email', email);
		fetch('hhttps://music-node-js.vercel.app/login-user', {
			method: 'POST',
			crossDomain: true,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, 'login-user');
				if (data.status == 'sucess') {
					alert('Đăng nhập thành công');
					window.localStorage.setItem('token', data.data);
					window.localStorage.setItem('loggedIn', true);
					window.location.href = './userDetails';
				} else {
					alert('Sai tài khoản hoặc mật khẩu vui lòng kiểm tra lại');
				}
			});
	}

	//register
	const [email2, setEmail2] = useState('');
	const [password2, setPassword2] = useState('');
	const [checkPassword2, setCheckPassword2] = useState('');
	const handleSubmit2 = (e) => {
		if (password2 !== checkPassword2) {
			e.preventDefault();
			alert('Mật khẩu nhập lại không đúng');
		} else {
			e.preventDefault();

			console.log(email2, password2, checkPassword2);
			fetch('https://music-node-js.vercel.app/register', {
				method: 'POST',
				crossDomain: true,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify({
					email2,
					password2,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data, 'userRegister');
					if (data.status === 'sucess') {
						alert('Đăng ký thành công');
					} else if (data.status === 'User Exists') {
						alert('User này đã tồn tại');
					} else {
						alert('Có lỗi, vui lòng thử lại');
					}
				});
		}
	};

	return (
		<div>
			<div className={!checkLogin ? 'absolute top-0 right-5 flex mt-[-10px]' : 'hidden'}>
				<button className="text-white" onClick={() => tab(2)}>
					Sign In
				</button>
				<p className="text-white text-xl mt-[-2px] mr-3 ml-3">|</p>
				<button className="text-white " onClick={() => tab(3)}>
					Sign Up
				</button>
			</div>
			<UserHome></UserHome>

			{/* <div className={checkLogin ? 'absolute top-0 right-5 flex mt-[-10px]' : 'hidden'}></div> */}
			{/* Login */}
			<div
				className={show === 2 ? 'fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 z-10' : 'hidden'}
			>
				<div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-[0.7]" />
				<div className="bg-white z-[11] min-w-[450px]">
					<div className="flex relative w-[100%] h-16 bg-green-300">
						<div className="absolute top-0 right-0">
							<button className="bg-white w-7 text-black" onClick={() => tab(1)}>
								X
							</button>
						</div>
						<p className="m-auto text-[30px] font-[600]">Sign In</p>
					</div>
					<form onSubmit={handleSubmit} className="w-[100%]">
						<div className="w-[100%] p-3">
							<input
								className="w-[100%] p-2 border-2 border-slate-700"
								type="email"
								required
								placeholder="Email Account..."
								onChange={(e) => setEmail(e.target.value)}
							></input>
						</div>
						<div className="w-[100%] pl-3 pr-3 pb-3">
							<input
								className="w-[100%] p-2 border-2 border-slate-700"
								type="password"
								required
								placeholder="Password..."
								onChange={(e) => setPassword(e.target.value)}
							></input>
						</div>
						<div className="w-[100%] pl-3 pr-3 pb-3 flex justify-end">
							<button className="w-[30%] p-2 border-2 border-slate-700" type="submit">
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Sign Up */}
			<div
				className={show === 3 ? 'fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 z-10' : 'hidden'}
			>
				<div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-[0.7]" />
				<div className="bg-white z-[11] min-w-[450px]">
					<div className="flex relative w-[100%] h-16 bg-green-300">
						<div className="absolute top-0 right-0">
							<button className="bg-white w-7 text-black" onClick={() => tab(1)}>
								X
							</button>
						</div>
						<p className="m-auto text-[30px] font-[600]">Sign Up</p>
					</div>
					<form onSubmit={handleSubmit2} className="w-[100%]">
						<div className="w-[100%] p-3">
							<input
								className="w-[100%] p-2 border-2 border-slate-700"
								type="email"
								placeholder="Email Account..."
								required
								onChange={(e) => setEmail2(e.target.value)}
							></input>
						</div>
						<div className="w-[100%] pl-3 pr-3 pb-3">
							<input
								className="w-[100%] p-2 border-2 border-slate-700"
								type="password"
								placeholder="Password..."
								onChange={(e) => setPassword2(e.target.value)}
							></input>
						</div>
						<div className="w-[100%] pl-3 pr-3 pb-3">
							<input
								className="w-[100%] p-2 border-2 border-slate-700"
								type="password"
								placeholder="Check Password..."
								onChange={(e) => setCheckPassword2(e.target.value)}
							></input>
						</div>
						<div className="w-[100%] pl-3 pr-3 pb-3 flex justify-end">
							<button className="w-[30%] p-2 border-2 border-slate-700" type="submit  ">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

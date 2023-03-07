import React, { useState } from 'react';

export default function Login() {
    const [show, setShow] = useState(1);
	const tab = (e) => {
		setShow(e);
	}
	return (
        <div>
        
        <div className="absolute top-0 right-5 flex mt-[-10px]">
            <button className="text-white" onClick={()=> tab(2)}>Sign In</button>
            <p className="text-white text-xl mt-[-2px] mr-3 ml-3">|</p>
            <button className="text-white " onClick={()=> tab(3)}>Sign Up</button>
        </div>

        {/* Login */}
		<div className={show === 2 ? "fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 z-10" : "hidden"}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-[0.7]"/>
            <div className="bg-white z-[11] min-w-[450px]">
                <div className="flex relative w-[100%] h-16 bg-green-300">
                    <div className="absolute top-0 right-0">
                    <button className="bg-white w-7 text-black" onClick={()=> tab(1)}>X</button>
                    
                    </div>
                    <p className="m-auto text-[30px] font-[600]">Sign In</p>
                </div>
                <form className="w-[100%]">
                    <div className="w-[100%] p-3">
                        <input className="w-[100%] p-2 border-2 border-slate-700" type="text" placeholder='Your Account...'></input>
                    </div>
                    <div className="w-[100%] pl-3 pr-3 pb-3">
                        <input className="w-[100%] p-2 border-2 border-slate-700" type="password" placeholder='Password...'></input>
                    </div>
                    <div className="w-[100%] pl-3 pr-3 pb-3 flex justify-end">
                        <input className="w-[30%] p-2 border-2 border-slate-700" type="button" value="Sign in"></input>
                    </div>
                </form>
            </div>
		</div>
        {/* Sign Up */}
        <div className={show === 3 ? "fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 z-10" : "hidden"}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-[0.7]"/>
            <div className="bg-white z-[11] min-w-[450px]">
                <div className="flex relative w-[100%] h-16 bg-green-300">
                    <div className="absolute top-0 right-0">
                    <button className="bg-white w-7 text-black" onClick={()=> tab(1)}>X</button>
                    
                    </div>
                    <p className="m-auto text-[30px] font-[600]">Sign Up</p>
                </div>
                <form className="w-[100%]">
                    <div className="w-[100%] p-3">
                        <input className="w-[100%] p-2 border-2 border-slate-700" type="text" placeholder='Your Account...'></input>
                    </div>
                    <div className="w-[100%] pl-3 pr-3 pb-3">
                        <input className="w-[100%] p-2 border-2 border-slate-700" type="password" placeholder='Password...'></input>
                    </div>
                    <div className="w-[100%] pl-3 pr-3 pb-3">
                        <input className="w-[100%] p-2 border-2 border-slate-700" type="password" placeholder='Check Password...'></input>
                    </div>
                    <div className="w-[100%] pl-3 pr-3 pb-3 flex justify-end">
                        <input className="w-[30%] p-2 border-2 border-slate-700" type="button" value="Sign Up"></input>
                    </div>
                </form>
            </div>
		</div>
        </div>
	);
}

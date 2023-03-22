/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Authenticate from "components/Auth/Authenticate";
import Login from "components/Auth/Authenticate";
import { useCurrentUser } from "contexts/UserContext";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const {currentUser, setCurrentUser} = useCurrentUser();
  return (
    <section class="fixed h-20 overflow-hidden z-[99] mx-auto">
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="#">
            Music ReactJS
          </a>
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a class="hover:text-gray-200" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">
                Catagory
              </a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">
                Collections
              </a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          {/* < />!-- Header Icons --> */}
          <div class="hidden xl:flex space-x-5 items-center">
            {/* < />!-- Sign In / Register      --> */}
            {!currentUser && <Authenticate />}
            {/* Logout */}
            {currentUser && (
              <>
                <Link to={"/my-playlist"} class="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
				<button onClick={()=>{
					setCurrentUser()
				}} className="text-white">
					Logout
				</button>
              </>
            )}
          </div>
        </div>
        {/* < />!-- Responsive navbar --> */}
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </section>
  );
}
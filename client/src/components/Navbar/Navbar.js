// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';
// import { FcSportsMode } from 'react-icons/fc';

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar__logo">
//         <h1>
//           Fit<b className="navbar__logo-tracker">Track</b>
//         </h1>
//         <FcSportsMode size={40} />
//       </div>
//       <ul className="navbar__links">
//         <li>
//           <NavLink
//             to="/home"
//             className="navbar__link"
//             activeClassName="navbar__link--active"
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard"
//             className="navbar__link"
//             activeClassName="navbar__link--active"
//           >
//             Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/targets"
//             className="navbar__link"
//             activeClassName="navbar__link--active"
//           >
//             Targets
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/exercises"
//             className="navbar__link"
//             activeClassName="navbar__link--active"
//           >
//             Exercises
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/food"
//             className="navbar__link"
//             activeClassName="navbar__link--active"
//           >
//             Food
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/aboutus"
//             className="navbar__link"
//             activeClassName="navbar__link--active"
//           >
//             About Us
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/login"
//             className="navbar__button"
//             activeClassName="navbar__button--active"
//           >
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/register"
//             className="navbar__button"
//             activeClassName="navbar__button--active"
//           >
//             Register
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;




/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FcSportsMode } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import {HashLink as Link1} from 'react-router-hash-link'
// import { Link, animateScroll as scroll } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import avatar from "../../images/avatar.png"
import avatar1 from "../../images/avatar1.png"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

  const { loggedIn,handleSignOut } = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-gray sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <FcSportsMode size={40} />
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    
                    <Link 
                      smooth
                      to="/home" 
                      className="rounded-md text-white px-3 py-2 text-sm font-medium text-white">
                      Home
                    </Link>
                    <Link1
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="home/#hero"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                    >
                      AboutUs
                    </Link1>
                    {loggedIn &&
                    <Link
                    smooth
                      to="/dashboard"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                    >
                      Dashboard
                    </Link>
                     }                    
                    <Link1
                      to="home/#cards"
                      // spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                    >
                      Targets
                    </Link1>
                    
                    <Link1
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="home/#pricing"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                    >
                      Plans
                    </Link1>
                    <Link1
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="home/#testimonials"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                    >
                      Testimonials
                    </Link1>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div> */}
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">

                                    {/* Profile dropdown */}
                      {loggedIn?
                       <Menu as="div" className="relative ml-4 flex-shrink-0">
                       <div>
                         <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                           <span className="sr-only">Open user menu</span>
                           <img
                             className="h-10 w-12 rounded-full bg-gray"
                            //  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              src={avatar1}
                             alt=""
                           />
                         </Menu.Button>
                       </div>
                       <Transition
                         as={Fragment}
                         enter="transition ease-out duration-100"
                         enterFrom="transform opacity-0 scale-95"
                         enterTo="transform opacity-100 scale-100"
                         leave="transition ease-in duration-75"
                         leaveFrom="transform opacity-100 scale-100"
                         leaveTo="transform opacity-0 scale-95"
                       >
                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                         <Menu.Item>
                             {({ active }) => ( 
                               <a
                                 href=""
                                 className={classNames(
                                   active ? 'bg-gray-100' : '',
                                   'block px-4 py-2 text-sm text-gray-700'
                                 )}
                               >
                                 Dashboard
                               </a>
                             )}
                           </Menu.Item>
                           <Menu.Item>
                             {({ active }) => ( 
                               <button
                               onClick={(e) => {handleSignOut(e); navigate('/login')}}
                                 className={classNames(
                                   active ? 'bg-gray-100' : '',
                                   'block px-4 py-2 text-sm text-gray-700'
                                 )}
                               >
                                 Sign out
                               </button>
                             )}
                           </Menu.Item>
                         </Menu.Items>
                       </Transition>
                     </Menu>
                       :
                       <button
                    onClick={() => navigate("/login")}
                    type="button"
                    className="flex-shrink-0 w-20 rounded-full bg-orange p-1.5 text-white hover:text-yellow focus:outline-none focus:ring-amber focus:ring-white focus:ring-offset-amber focus:ring-offset-amber"
                  >
                    Login 
                  </button>
                       }
                     
                  


                </div>
              </div>
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}



//line 283
// {/* <Disclosure.Panel className="lg:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
//               >
//                 Dashboard
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Team
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Projects
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Calendar
//               </Disclosure.Button>
//             </div>
//             <div className="border-t border-gray-700 pt-4 pb-3">
//               <div className="flex items-center px-5">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-10 w-10 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <div className="text-base font-medium text-white">Tom Cook</div>
//                   <div className="text-sm font-medium text-gray-400">tom@example.com</div>
//                 </div>
//                 <button
//                   type="button"
//                   className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>
//               <div className="mt-3 space-y-1 px-2">
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                 >
//                   Your Profile
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                 >
//                   Settings
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                 >
//                   Sign out
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </Disclosure.Panel> */}
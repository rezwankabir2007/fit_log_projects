'use client';

import Image from 'next/image';
import NavbarLogo from '@/assets/logo.png';
import Link from 'next/link';
import React, { useContext, JSX } from 'react';
import { LibrarysContext } from '@/context/LibrarysContext';


const NavLinks: React.FC = (): JSX.Element => (
  <>
    <li>
      <Link 
        href="/" 
        className=" bg-[#1A2312] rounded-2xl text-[#C2F800]  text-base  font-semibold  lg:text-xl p-3 "
      >
        Workouts
      </Link>
    </li>
    <li>
      <Link 
        href="/myplan" 
        className="text-[#9CA3AF] hover:text-white font-semibold text-base lg:text-xl p-2"
      >
        My Plan
      </Link>
    </li>
  </>
);



const Navbar: React.FC = (): JSX.Element => {
  const { readLibrary, wishlibrary } = useContext(LibrarysContext);

 
  
  const planCount: number = readLibrary?.length || 0;
  const savedCount: number = wishlibrary?.length || 0;

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="navbar bg-base-100 shadow-sm">
        
  
  
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg 
                aria-label="Menu" 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              > 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 btn btn-ghost normal-case text-xl">
            <Image 
              src={NavbarLogo} 
              alt="Navbar Logo" 
              width={40} 
              height={40} 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
            />
            <span className="text-white font-bold text-xl sm:text-2xl">FIRLOG</span>
          </Link>
        </div>

       
       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLinks />
          </ul>
        </div>

      
      
        <div className="navbar-end gap-3">
          <Link href="/myplan" className="flex items-center gap-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors">
            <span>Plan</span>
            <span className="bg-[#C2F800] text-black text-[11px] font-extrabold px-2 py-0.5 rounded-full min-w-[20px] text-center">
              {planCount}
            </span>
          </Link>
          
          <Link href="/myplan" className="flex items-center gap-1.5 text-xs font-semibold text-[#9CA3AF] hover:text-white transition-colors">
            <span>Saved</span>
            <span className="bg-[#1E2638] text-gray-300 border border-white/10 text-[11px] font-extrabold px-2 py-0.5 rounded-full min-w-[20px] text-center">
              {savedCount}
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
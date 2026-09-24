import Image from 'next/image';
import NavbarLogo from '@/assets/logo.png';
import Link from 'next/link';

const NavLinks = () => (
  <>
    <li>
      <Link 
        href="/workouts" 
        className="text-[#C2F800] font-semibold text-lg lg:text-xl p-2"
      >
        Workouts
      </Link>
    </li>
    <li>
      <Link 
        href="/myPlan" 
        className="text-[#9CA3AF] font-semibold text-lg lg:text-xl p-2"
      >
        My Plan
      </Link>
    </li>
  </>
);

const Navbar = () => {
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
            <Image src={NavbarLogo} alt="Navbar Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <span className="text-white font-bold text-xl sm:text-2xl">FIRLOG</span>
          </Link>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLinks />
          </ul>
        </div>

       
        <div className="navbar-end gap-1 sm:gap-2">
          <Link href="/myPlan" className="btn btn-sm sm:btn-md text-[#D1D5DB]">Plan</Link>
          
          <Link href="/myPlan" className="btn btn-sm sm:btn-md text-[#9CA3AF]">Saved</Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
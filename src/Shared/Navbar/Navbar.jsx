import { useContext } from 'react';
import { TbCoinTaka } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseUser from '../../Hooks/UseUser';
// import UseUser from '../../Hooks/UseUser';
// import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  /* find login  user  */
  const { user, logOut } = UseAuth();
  const [userData] = UseUser();

  // const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // console.log('userData', userData);
  // console.log('User Name:', userData?.name);
  // const [userData] = UseUser();
  // console.log('userdata', userData);
  // const { userData } = UseUser();
  // console.log('userData', userData);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-sky-500 font-semibold  ' : 'text-gray-700 ';

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <div className='md:flex flex-col lg:flex-row uppercase font-semibold items-center '>
        <li>
          <NavLink
            className={{ navLinkClass }}
            to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={{ navLinkClass }}
            to='/classicmatch'>
            All Match
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            className={{ navLinkClass }}
            to='/add_money_request'>
            My Request
          </NavLink>
        </li> */}
        <li className='hidden lg:flex'>
          <NavLink
            to='/users'
            className={{ navLinkClass }}>
            {user ? userData.balance : 'N/A'}
            <span className=' text-green-500 text-2xl'>
              <TbCoinTaka></TbCoinTaka>
            </span>
          </NavLink>
        </li>
        {/* ............... */}
        {user ? (
          <>
            <li>
              <button
                onClick={handleLogOut}
                className={navLinkClass}>
                LogOut
              </button>
            </li>
            <li className='hidden lg:flex text-orange-500'>
              <span>{userData.name}</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                className={{ navLinkClass }}
                to='/login'>
                Login
              </NavLink>
            </li>
          </>
        )}

        {/* ........... */}
      </div>
    </>
  );
  return (
    <div className='navbar fixed z-10  bg-opacity-50 bg-black text-white flex justify-between    max-w-screen-2xl '>
      <div className='navbar-start '>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-blue-800  rounded-box z-[1] mt-3 w-52 p-2 shadow '>
            {navOptions}
          </ul>
        </div>

        <a
          className=''
          href=''>
          <img
            className='w-16 h-16 md:w-20 md:h-20'
            src='https://i.ibb.co.com/GQWM0Fps/main-logo.png'
            alt=''
          />
        </a>
      </div>
      {/* Takar icon */}
      <div className='lg:hidden '>
        <span className='text-white font-semibold text-sm mr-2'>
          {user ? userData.name : ''}
        </span>
        <Link
          to='/users'
          className=' border rounded-md flex gap-2 p-2 '>
          {/* balance */}
          {user ? userData.balance : '0'}
          <span className=' text-green-500 text-2xl'>
            <TbCoinTaka></TbCoinTaka>
          </span>
        </Link>
      </div>
      {/* Nav list  for pc version  */}
      <div className='navbar-center hidden lg:flex items-center j'>
        <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;

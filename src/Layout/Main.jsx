import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      {/* --- whatsapp Chat Link */}
      <a
        href=' https://wa.me/+8801580307894?text=Hi' // REPLACE 'yourusername' with your actual Telegram username
        target='_blank'
        rel='noopener noreferrer' // Recommended for security when using target="_blank"
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '20px',
          backgroundColor: '#25d366', // Telegram blue
          color: 'white',
          padding: '10px 15px',
          borderRadius: '50px',
          textDecoration: 'none',

          zIndex: '1000', // Ensure it stays on top of other content
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
        <p className='flex justify-center  gap-2 text-xl'>
          সাপোর্ট <FaWhatsapp className='' />
        </p>
      </a>

      <Footer></Footer>

      {/* tostify alert message */}
      <ToastContainer
        position='top-center'
        autoClose={2000}
      />
    </div>
  );
};

export default Main;

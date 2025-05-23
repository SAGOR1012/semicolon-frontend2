import { FaFacebookF } from 'react-icons/fa';
import company from '../../assets/company.png';
import TotalUserCard from '../../Components/TotalUserCard/TotalUserCard';
const Footer = () => {
  // get current year function
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className='h-96'>
      <footer className='footer flex justify-between bg-black h-full text-neutral-content p-10'>
        <aside className='flex flex-col justify-start'>
          <p>
            Developer :
            <br />
            Semicolon coder
          </p>
          <img
            className='h-24 w-32 '
            src={company}
            alt=''
          />
        </aside>
        {/* social */}
        <nav>
          <h6 className='footer-title'>Social</h6>
          <div className='grid grid-flow-col gap-4'>
            <a
              href='https://www.facebook.com/profile.php?id=61567719448598'
              className='text-xl text-blue-700'>
              <FaFacebookF />
            </a>
          </div>
        </nav>
      </footer>

      <div>
        <footer className='footer footer-center bg-base-300 text-base-content p-4'>
          <aside>
            <p>
              {/* Dynamic date function  */}
              Copyright © {getCurrentYear()} - All right reserved by Semicolon
              coder
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

import hero from '../../../assets/hero.jpg';

const Banner = () => {
  return (
    <a
      className='carousel w-full pt-24 '
      href='https://t.me/+9vuPhb6BQDpmODdl'
      target='_blank'>
      {' '}
      <div>
        <div
          id='slide1'
          className='carousel-item relative w-full'>
          <img
            src={hero}
            className=' object-cover w-full h-auto' // Adjusted height and added object-cover for better scaling
          />
        </div>
      </div>
    </a>
  );
};

export default Banner;

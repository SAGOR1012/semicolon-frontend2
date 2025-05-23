import './index.css';
const SpecialCard = () => {
  return (
    <div className=' card relative flex flex-col bg-secondary-bg-image rounded-lg py-1 px-3 md:p-6  text-white   cursor-not-allowed  '>
      <figcaption className='flex flex-col gap-2 md:gap-4 md:flex-row justify-start '>
        <img
          className='flex-none w-8 h-8 md:w-14 md:h-14 rounded-full object-cover'
          src='https://i.ibb.co.com/ds4mC0CW/66d7d9f2ca803-com-dts-freefireth.png'
          alt=''
        />
        <div className=' '>
          <div className=' font-semibold text-xl md:text-2xl text-white'>
            Tournament
          </div>
          <div className='mt-0.5 '>
            <span className='text-xl font-bold '>0</span> Matches Available
          </div>
        </div>
      </figcaption>
    </div>
  );
};

export default SpecialCard;

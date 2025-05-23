import { AiFillCaretDown } from 'react-icons/ai';
import { IoMdKey } from 'react-icons/io';
import { LiaTrophySolid } from 'react-icons/lia';
import PricePoolCard from '../../PricePoolCard/PricePoolCard';
import { Helmet } from 'react-helmet-async';

const DailyMatchCard = ({
  gametype,
  version,
  _id,
  date,
  time,
  totalPrice,
  perkill,
  entryfee,
  map,
  totalslot,
  roomid,
  roompass,
  match,
}) => {
  // console.log(
  //   gametype,
  //   version,
  //   _id,
  //   date,
  //   time,
  //   totalPrice,
  //   perkill,
  //   entryfee,
  //   map,
  //   totalslot,
  //   roomid,
  //   roompass
  // );

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border'>
      <Helmet>
        <title>semicolonff | All Metch</title>
      </Helmet>
      {/* card 1 */}
      <div className='rounded-lg bg-zinc-50  w-full my-2 shadow-lg'>
        {' '}
        '{/* card body */}
        <div className='p-2 '>
          {/* Title */}
          <div className='flex justify-start gap-5'>
            {/* img */}
            <img
              className='w-12 h-12 md:w-16 md:h-16 rounded-md'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqEFgxyWL-thi2FRNvLxIYuoGVQfJ0rsmog&s'
              alt=''
            />
            {/* game type | time | date| id */}
            <div className=' '>
              <h3 className='font-bold'>
                {gametype} | {version} | #{_id}
              </h3>
              {/* time * date */}
              <h4 className='  text-red-500'>
                Time: {date} at {time}
              </h4>{' '}
              {/* Dynamic date & time  */}
            </div>
          </div>
          {/* Body */}
          <div className=' uppercase text-pragraph mt-2 font-bold grid grid-cols-3  items-center gap-3'>
            <div className=''>
              <h3>Total Price</h3>
              <p className='text-blue-950 '>
                <span className='font-extrabold'>৳</span> {totalPrice}
              </p>
            </div>
            <div className=' '>
              <h3>per kill</h3>
              <p className='text-blue-950 '>
                <span className='font-extrabold'>৳</span> {perkill}
              </p>
            </div>
            <div className=' '>
              <h3>entry fee</h3>
              <p className='text-blue-950 '>
                <span className='font-extrabold'>৳</span> {entryfee}
              </p>
            </div>
            <div className=' '>
              <h3>type</h3>
              <p className='text-blue-950 '>{gametype}</p>
            </div>
            <div className=' '>
              <h3>version</h3>
              <p className='text-blue-950 '>{version}</p>
            </div>
            <div className=' '>
              <h3>Map</h3>
              <p className='text-blue-950 '>{map}</p>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='p-2 '>
          {/* progress bar */}
          <div className='  flex justify-between gap-2'>
            <div className='flex  flex-col gap-3  w-full'>
              <progress
                className='  progress h-1 progress-warning rounded-none'
                value={totalslot}
                max='100'></progress>
              <div className='text-pragraph flex justify-between'>
                <p className=' text-xs md:text-sm font-semibold'>
                  Only 16 spots left
                </p>
                <p className='font-semibold'>32/{totalslot}</p>
              </div>
            </div>
            {
              <button className=' p-2 border-2 w-10/12 rounded-md border-secondary text-secondary font-bold md:text-sm '>
                Join
              </button>
            }
            {/* jodi full hoye jay tahole join dea jabe na */}
            {/* <button className=" p-2 border-2 w-10/12 rounded-md border-red-500 text-red-500 font-bold md:text-sm ">Registration Closed</button> */}
          </div>
        </div>
        <div className='flex p-2'>
          {/* room details */}
          <div className='dropdown dropdown-bottom  border w-full '>
            <div
              tabIndex={0}
              role='button'
              className=' w-full p-1 flex gap-2 items-center justify-between font-bold text-sm   text-secondary border-2 border-secondary rounded-sm'>
              {' '}
              <IoMdKey />
              Room Details <AiFillCaretDown />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content  menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow'>
              <p>room id : {roomid}</p>
              <p>password : {roompass}</p>
            </ul>
          </div>
          {/* Price details */}
          <div className=' dropdown dropdown-bottom  w-full  '>
            <div
              tabIndex={0}
              role='button'
              className=' w-full p-1 flex gap-1 items-center justify-between font-bold text-sm    text-secondary border-2 border-secondary rounded-sm'>
              {' '}
              <LiaTrophySolid />
              <span className='  '> Total Price Details</span>{' '}
              <AiFillCaretDown />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content   menu bg-base-100 rounded-sm z-[1]  p-1 md:w-52 md:p-2 shadow'>
              <PricePoolCard></PricePoolCard>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMatchCard;

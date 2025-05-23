// import { useLocation, useNavigate } from 'react-router-dom';
// import { useForm, Controller, useWatch } from 'react-hook-form';
// import { useEffect } from 'react';
// import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
// import UseUser from '../../Hooks/UseUser';
// import UseAuth from '../../Hooks/UseAuth';
// import { toast } from 'react-toastify'; // <-- Add this import

// const GAME_TYPES = { solo: 1, duo: 2, squad: 4 };

// const JoinForm = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const axiosPublic = UseAxiosPublic();
//   const { user } = UseAuth();
//   const [userData, isLoading, refetch] = UseUser();

//   if (!state?.match) {
//     navigate('/classicmatch');
//     return null;
//   }

//   const {
//     _id,
//     customMatchId,
//     gametype,
//     version,
//     date,
//     time,
//     totalPrice,
//     entryfee,
//   } = state.match;

//   console.log('customMatchId', customMatchId);
//   /* react hook form  */
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     defaultValues: {
//       gameType: gametype, // solo | duo | squad
//       playerNames: Array(GAME_TYPES[gametype]).fill(''),
//       matchId: _id,
//       customMatchId: customMatchId,
//     },
//   });

//   const gameType = useWatch({ control, name: 'gameType' }); // live value
//   const playersNeeded = GAME_TYPES[gameType];

//   /* keep array length in sync with selector */
//   useEffect(() => {
//     setValue('playerNames', (prev = []) =>
//       prev
//         .slice(0, playersNeeded)
//         .concat(Array(Math.max(playersNeeded - prev.length, 0)).fill(''))
//     );
//   }, [playersNeeded, setValue]);

//   /* submit */
//   const onSubmit = async (data) => {
//     if (isLoading) return; // still fetching profile

//     const balance = userData?.balance ?? 0; // ← adjust field name
//     if (balance < entryfee) {
//       toast.error(
//         `আপনার ব্যালান্স নেই,আপনার দরকার ${entryfee} TK কিন্তু আপনার আছে  ${balance} TK.`
//       );
//       return;
//     }

//     const payload = {
//       ...data,
//       playerNames: data.playerNames.slice(0, playersNeeded),
//       email: userData.email, // if your backend needs it
//     };

//     try {
//       /* ১️⃣ join */
//       await axiosPublic.post('/booking_player_list', payload);

//       /* ২️⃣ balance কমাতে  */
//       await axiosPublic.patch(`/users/${userData._id}`, {
//         balance: balance - entryfee,
//       });

//       // সব ঠিক হলে
//       toast.success('Joined successfully!');
//       refetch();
//       navigate('/classicmatch', { replace: true }); // ← replace করলে back-এ আর আসবে না
//     } catch (err) {
//       console.error(err); // debug-এ সহায়ক
//       toast.error(err.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div className='pt-24'>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className='mx-auto w-[360px] bg-white p-5 rounded-2xl shadow-lg text-center space-y-4'>
//         <h2 className='font-extrabold text-xl'>
//           {gametype} | {version} | #{customMatchId}
//         </h2>
//         <p className='text-sm'>
//           {date} at {time}
//         </p>
//         <div className='flex justify-between text-sm font-semibold'>
//           <span>Win Prize: {totalPrice} TK</span>
//           <span>Entry Fee: {entryfee} TK</span>
//         </div>
//         <hr />
//         <p className='text-orange-600 text-sm font-bold'>
//           অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করুন।
//         </p>

//         {/* selector */}
//         <div className='flex justify-center gap-3'>
//           {Object.keys(GAME_TYPES).map((t) => (
//             <button
//               key={t}
//               type='button'
//               onClick={() => setValue('gameType', t)}
//               className={`px-4 py-2 rounded-lg font-semibold capitalize ${
//                 gameType === t
//                   ? 'bg-violet-600 text-white'
//                   : 'bg-gray-200 text-gray-700'
//               }`}>
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* dynamic inputs */}
//         {Array.from({ length: playersNeeded }).map((_, idx) => (
//           <div key={idx}>
//             <Controller
//               name={`playerNames.${idx}`}
//               control={control}
//               rules={{ required: `Player ${idx + 1} name required` }}
//               render={({ field }) => (
//                 <input
//                   {...field}
//                   placeholder={`Player ${idx + 1} Name`}
//                   className='input input-bordered w-full'
//                 />
//               )}
//             />
//             {errors.playerNames?.[idx] && (
//               <span className='text-xs text-red-600'>
//                 {errors.playerNames[idx].message}
//               </span>
//             )}
//           </div>
//         ))}

//         <button
//           disabled={isSubmitting}
//           className='w-full py-3 rounded-full bg-violet-700 text-white font-bold'>
//           {isSubmitting ? 'Joining...' : 'Join Now!'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JoinForm;

import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import UseUser from '../../Hooks/UseUser';
import UseAuth from '../../Hooks/UseAuth';
import { toast } from 'react-toastify'; // <-- Add this import

const GAME_TYPES = { solo: 1, duo: 2, squad: 4 };

const JoinForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const [userData, isLoading, refetch] = UseUser();

  if (!state?.match) {
    navigate('/classicmatch');
    return null;
  }

  const {
    _id,
    customMatchId,
    gametype,
    version,
    date,
    time,
    totalPrice,
    entryfee,
  } = state.match;

  // console.log('customMatchId', customMatchId);
  /* react hook form  */
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      gameType: gametype, // solo | duo | squad
      playerNames: Array(GAME_TYPES[gametype]).fill(''),
      matchId: _id, // This is the _id (string form) from the classicMatch
      customMatchId: customMatchId,
    },
  });

  const gameType = useWatch({ control, name: 'gameType' }); // live value
  const playersNeeded = GAME_TYPES[gameType];

  /* keep array length in sync with selector */
  useEffect(() => {
    setValue('playerNames', (prev = []) =>
      prev
        .slice(0, playersNeeded)
        .concat(Array(Math.max(playersNeeded - prev.length, 0)).fill(''))
    );
  }, [playersNeeded, setValue]);

  /* submit */
  const onSubmit = async (data) => {
    if (isLoading) return; // still fetching profile

    const balance = userData?.balance ?? 0; // ← adjust field name
    if (balance < entryfee) {
      toast.error(
        `আপনার ব্যালান্স নেই,আপনার দরকার ${entryfee} TK কিন্তু আপনার আছে  ${balance} TK.`
      );
      return;
    }

    const payload = {
      ...data,
      playerNames: data.playerNames.slice(0, playersNeeded),
      email: userData.email, // if your backend needs it
    };

    try {
      /* ১️⃣ join */
      await axiosPublic.post('/booking_player_list', payload);

      /* ২️⃣ balance কমাতে  */
      // FIX: Correct the URL to match the backend's /users/balance/:userId endpoint
      await axiosPublic.patch(`/users/balance/${userData._id}`, {
        balance: balance - entryfee,
      });

      // সব ঠিক হলে
      toast.success('Joined successfully!');
      refetch();
      navigate('/classicmatch', { replace: true }); // ← replace করলে back-এ আর আসবে না
    } catch (err) {
      console.error(err); // debug-এ সহায়ক
      toast.error(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className='pt-24'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto w-[360px] bg-white p-5 rounded-2xl shadow-lg text-center space-y-4'>
        <h2 className='font-extrabold text-xl'>
          {gametype} | {version} | #{customMatchId}
        </h2>
        <p className='text-sm'>
          {date} at {time}
        </p>
        <div className='flex justify-between text-sm font-semibold'>
          <span>Win Prize: {totalPrice} TK</span>
          <span>Entry Fee: {entryfee} TK</span>
        </div>
        <hr />
        <p className='text-orange-600 text-sm font-bold'>
          অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করুন।
        </p>

        {/* selector */}
        <div className='flex justify-center gap-3'>
          {Object.keys(GAME_TYPES).map((t) => (
            <button
              key={t}
              type='button'
              onClick={() => setValue('gameType', t)}
              className={`px-4 py-2 rounded-lg font-semibold capitalize ${
                gameType === t
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}>
              {t}
            </button>
          ))}
        </div>

        {/* dynamic inputs */}
        {Array.from({ length: playersNeeded }).map((_, idx) => (
          <div key={idx}>
            <Controller
              name={`playerNames.${idx}`}
              control={control}
              rules={{ required: `Player ${idx + 1} name required` }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder={`Player ${idx + 1} Name`}
                  className='input input-bordered w-full'
                />
              )}
            />
            {errors.playerNames?.[idx] && (
              <span className='text-xs text-red-600'>
                {errors.playerNames[idx].message}
              </span>
            )}
          </div>
        ))}

        <button
          disabled={isSubmitting}
          className='w-full py-3 rounded-full bg-violet-700 text-white font-bold'>
          {isSubmitting ? 'Joining...' : 'Join Now!'}
        </button>
      </form>
    </div>
  );
};

export default JoinForm;

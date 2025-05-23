// import { useForm } from 'react-hook-form';
// import bkash from '../../assets/bkash.webp';
// import nogod from '../../assets/nogot.png';
// import { Helmet } from 'react-helmet-async';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // make sure this line is in a top-level file once

// const Withdraw = () => {
//   /* ────────────────────────────────────────────────
//      React-Hook-Form setup
//   ──────────────────────────────────────────────────*/
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   /* ────────────────────────────────────────────────
//      Submit handler
//   ──────────────────────────────────────────────────*/
//   const onSubmit = () => {
//     toast.success('উত্তোলন অনুরোধ সফল হয়েছে'); // ✅ toast alert
//     reset(); // clear the form
//   };

//   /* ────────────────────────────────────────────────
//      JSX
//   ──────────────────────────────────────────────────*/
//   return (
//     <div>
//       <Helmet>
//         <title>semicolonff | Withdraw Money</title>
//       </Helmet>

//       <div className='pt-28 bg-primary-bg-image flex justify-center'>
//         <div className='flex flex-col max-w-md p-2 sm:p-10 bg-white'>
//           {/* Bkash / Nogod info */}
//           <div className='mb-2 text-center flex flex-col gap-2'>
//             <div className='flex gap-2 items-center'>
//               <img
//                 className='h-10 w-10'
//                 src={bkash}
//                 alt='Bkash'
//               />
//               <p>
//                 <span className='text-xl text-pink-600'>01639136200</span> -
//                 উত্তোলন ন্যূনতম 50 TK
//               </p>
//             </div>
//             <div className='flex gap-2 items-center'>
//               <img
//                 className='h-10 w-10'
//                 src={nogod}
//                 alt='Nogod'
//               />
//               <p>
//                 <span className='text-xl text-orange-500'>01639136200</span> -
//                 উত্তোলন ন্যূনতম 50 TK
//               </p>
//             </div>
//           </div>

//           {/* ──────── Form ──────── */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className='space-y-12'>
//             <div className='space-y-4 font-semibold mt-5'>
//               {/* Amount */}
//               <div>
//                 <label
//                   htmlFor='amount'
//                   className='block mb-2 text-sm'>
//                   আপনি কত টাকা উত্তোলন করতে চান তা লিখুন
//                 </label>
//                 <input
//                   type='number'
//                   id='amount'
//                   {...register('amount', {
//                     required: 'টাকার পরিমাণ আবশ্যক',
//                     min: { value: 50, message: 'ন্যূনতম 50 TK লাগবে' },
//                   })}
//                   placeholder='টাকার পরিমাণ লিখুন'
//                   className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
//                 />
//                 {errors.amount && (
//                   <p className='text-red-500 text-sm'>
//                     {errors.amount.message}
//                   </p>
//                 )}
//               </div>

//               {/* Receiver number */}
//               <div>
//                 <label
//                   htmlFor='number'
//                   className='block mb-2 text-sm'>
//                   যে নাম্বারে টাকা পাঠাতে চান সেটি লিখুন
//                 </label>
//                 <input
//                   type='text'
//                   id='number'
//                   {...register('number', {
//                     required: 'নাম্বার আবশ্যক',
//                     pattern: {
//                       value: /^\d{11}$/,
//                       message: '১১ ডিজিটের সঠিক ফোন নাম্বার দিন',
//                     },
//                   })}
//                   placeholder='আপনার বিকাশ অথবা নগদের নাম্বার'
//                   className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
//                 />
//                 {errors.number && (
//                   <p className='text-red-500 text-sm'>
//                     {errors.number.message}
//                   </p>
//                 )}
//               </div>

//               {/* Method */}
//               <div className='flex gap-4 items-center'>
//                 {/* Bkash radio */}
//                 <div className='flex items-center'>
//                   <input
//                     type='radio'
//                     value='Bkash'
//                     id='bkash_radio'
//                     {...register('method', {
//                       required: 'উত্তোলন মেথড সিলেক্ট করুন',
//                     })}
//                     className='mr-2'
//                   />
//                   <label
//                     htmlFor='bkash_radio'
//                     className='flex items-center gap-2'>
//                     <img
//                       className='w-10 h-10'
//                       src={bkash}
//                       alt='Bkash'
//                     />
//                     Bkash
//                   </label>
//                 </div>

//                 {/* Nogod radio */}
//                 <div className='flex items-center'>
//                   <input
//                     type='radio'
//                     value='Nogod'
//                     id='nogod_radio'
//                     {...register('method', {
//                       required: 'উত্তোলন মেথড সিলেক্ট করুন',
//                     })}
//                     className='mr-2'
//                   />
//                   <label
//                     htmlFor='nogod_radio'
//                     className='flex items-center gap-2'>
//                     <img
//                       className='w-10 h-10'
//                       src={nogod}
//                       alt='Nogod'
//                     />
//                     Nogod
//                   </label>
//                 </div>
//               </div>
//               {errors.method && (
//                 <p className='text-red-500 text-sm'>{errors.method.message}</p>
//               )}
//             </div>

//             {/* Submit */}
//             <div className='space-y-2'>
//               <button
//                 type='submit'
//                 className='w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white'>
//                 Withdraw Money
//               </button>
//             </div>
//           </form>

//           <div className='mt-5'>
//             <p className='px-6 text-sm text-center text-error font-semibold'>
//               উত্তোলনের অনুরোধ পাঠানোর পূর্বে ব্যালেন্স চেক করুন।
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Withdraw;
// import { useForm } from 'react-hook-form';
// import bkash from '../../assets/bkash.webp';
// import nogod from '../../assets/nogot.png';
// import { Helmet } from 'react-helmet-async';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosPublic from '../../Hooks/UseAxiosPublic';

// const Withdraw = () => {
//   const axiosPublic = UseAxiosPublic();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   return (
//     <div>
//       <Helmet>
//         <title>semicolonff | Withdraw Money</title>
//       </Helmet>

//       <div className='pt-28 bg-primary-bg-image flex justify-center'>
//         <div className='flex flex-col max-w-md p-2 sm:p-10 bg-white'>
//           {/* Bkash / Nogod info */}
//           <div className='mb-2 text-center flex flex-col gap-2'>
//             <div className='flex gap-2 items-center'>
//               <img
//                 className='h-10 w-10'
//                 src={bkash}
//                 alt='Bkash'
//               />
//               <p>
//                 <span className='text-xl text-pink-600'>01639136200</span> -
//                 উত্তোলন ন্যূনতম 50 TK
//               </p>
//             </div>
//             <div className='flex gap-2 items-center'>
//               <img
//                 className='h-10 w-10'
//                 src={nogod}
//                 alt='Nogod'
//               />
//               <p>
//                 <span className='text-xl text-orange-500'>01639136200</span> -
//                 উত্তোলন ন্যূনতম 50 TK
//               </p>
//             </div>
//           </div>

//           {/* ──────── Form ──────── */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className='space-y-12'>
//             <div className='space-y-4 font-semibold mt-5'>
//               {/* Amount */}
//               <div>
//                 <label
//                   htmlFor='amount'
//                   className='block mb-2 text-sm'>
//                   আপনি কত টাকা উত্তোলন করতে চান তা লিখুন
//                 </label>
//                 <input
//                   type='number'
//                   id='amount'
//                   {...register('amount', {
//                     required: 'টাকার পরিমাণ আবশ্যক',
//                     min: { value: 50, message: 'ন্যূনতম 50 TK লাগবে' },
//                   })}
//                   placeholder='টাকার পরিমাণ লিখুন'
//                   className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
//                 />
//                 {errors.amount && (
//                   <p className='text-red-500 text-sm'>
//                     {errors.amount.message}
//                   </p>
//                 )}
//               </div>

//               {/* Receiver number */}
//               <div>
//                 <label
//                   htmlFor='number'
//                   className='block mb-2 text-sm'>
//                   যে নাম্বারে টাকা পাঠাতে চান সেটি লিখুন
//                 </label>
//                 <input
//                   type='text'
//                   id='number'
//                   {...register('number', {
//                     required: 'নাম্বার আবশ্যক',
//                     pattern: {
//                       value: /^\d{11}$/,
//                       message: '১১ ডিজিটের সঠিক ফোন নাম্বার দিন',
//                     },
//                   })}
//                   placeholder='আপনার বিকাশ অথবা নগদের নাম্বার'
//                   className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
//                 />
//                 {errors.number && (
//                   <p className='text-red-500 text-sm'>
//                     {errors.number.message}
//                   </p>
//                 )}
//               </div>

//               {/* Method */}
//               <div className='flex gap-4 items-center'>
//                 {/* Bkash radio */}
//                 <div className='flex items-center'>
//                   <input
//                     type='radio'
//                     value='Bkash'
//                     id='bkash_radio'
//                     {...register('method', {
//                       required: 'উত্তোলন মেথড সিলেক্ট করুন',
//                     })}
//                     className='mr-2'
//                   />
//                   <label
//                     htmlFor='bkash_radio'
//                     className='flex items-center gap-2'>
//                     <img
//                       className='w-10 h-10'
//                       src={bkash}
//                       alt='Bkash'
//                     />
//                     Bkash
//                   </label>
//                 </div>

//                 {/* Nogod radio */}
//                 <div className='flex items-center'>
//                   <input
//                     type='radio'
//                     value='Nogod'
//                     id='nogod_radio'
//                     {...register('method', {
//                       required: 'উত্তোলন মেথড সিলেক্ট করুন',
//                     })}
//                     className='mr-2'
//                   />
//                   <label
//                     htmlFor='nogod_radio'
//                     className='flex items-center gap-2'>
//                     <img
//                       className='w-10 h-10'
//                       src={nogod}
//                       alt='Nogod'
//                     />
//                     Nogod
//                   </label>
//                 </div>
//               </div>
//               {errors.method && (
//                 <p className='text-red-500 text-sm'>{errors.method.message}</p>
//               )}
//             </div>

//             {/* Submit */}
//             <div className='space-y-2'>
//               <button
//                 type='submit'
//                 className='w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white'>
//                 Withdraw Money
//               </button>
//             </div>
//           </form>

//           <div className='mt-5'>
//             <p className='px-6 text-sm text-center text-error font-semibold'>
//               উত্তোলনের অনুরোধ পাঠানোর পূর্বে ব্যালেন্স চেক করুন।
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Withdraw;

// const onSubmit = async (data) => {
//   const withdrawAmount = Number(data.amount);

//   if (withdrawAmount > userData?.balance) {
//     toast.error('❌ আপনার ব্যালেন্স পর্যাপ্ত নয়');
//     return;
//   }

//   const payload = {
//     amount: withdrawAmount,
//     number: data.number,
//     method: data.method,
//     email: userData?.email || 'anonymous',
//     userId: userData?._id || 'unknown',
//     requestedAt: new Date().toISOString(),
//     status: 'pending',
//   };

//   try {
//     await axiosPublic.post('/withdraw', payload);
//     toast.success('✅ উত্তোলন অনুরোধ সফল হয়েছে');
//     reset();
//   } catch (err) {
//     console.error('Withdraw request failed:', err);
//     const msg =
//       err?.response?.data?.error || '❌ উত্তোলনের অনুরোধ ব্যর্থ হয়েছে';
//     toast.error(msg);
//   }
// };
// import { useForm } from 'react-hook-form';
// import bkash from '../../assets/bkash.webp';
// import nogod from '../../assets/nogot.png';
// import { Helmet } from 'react-helmet-async';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import UseUser from '../../Hooks/UseUser';
// import UseAxiosPublic from '../../Hooks/UseAxiosPublic';

// const Withdraw = () => {
//   const axiosPublic = UseAxiosPublic();
//   const [userData, isLoading] = UseUser(); // ✅ Get full user data (including balance)

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const amount = Number(data.amount);

//     // Check if balance is enough
//     if (userData.balance < amount) {
//       toast.error('পর্যাপ্ত ব্যালেন্স নেই ❌');
//       return;
//     }

//     try {
//       const payload = {
//         amount,
//         number: data.number,
//         method: data.method,
//         email: user?.email ?? 'anonymous',
//         userId: user?._id ?? 'unknown',
//         requestedAt: new Date().toISOString(),
//         status: 'pending',
//       };

//       // Step 1: Submit withdraw request
//       await axiosPublic.post('/withdraw', payload);

//       // Step 2: Immediately deduct from user's balance
//       await axiosPublic.patch(`/user/${user?.email}/deduct`, {
//         amountToDeduct: amount,
//       });

//       toast.success('উত্তোলন অনুরোধ সফল হয়েছে ✅');
//       reset();
//       refetch(); // refresh balance
//     } catch (err) {
//       console.error('Withdraw error:', err);
//       toast.error('উত্তোলনের অনুরোধ ব্যর্থ হয়েছে ❌');
//     }
//     if (isLoading) {
//       return <p className='text-center mt-20'>লোড হচ্ছে...</p>;
//     }
//   };
//   return (
//     <div>
//       <Helmet>
//         <title>semicolonff | Withdraw Money</title>
//       </Helmet>

//       <div className='pt-28 bg-primary-bg-image flex justify-center'>
//         <div className='flex flex-col max-w-md p-2 sm:p-10 bg-white'>
//           {/* Bkash / Nogod Info */}
//           <div className='mb-2 text-center flex flex-col gap-2'>
//             <div className='flex gap-2 items-center'>
//               <img
//                 className='h-10 w-10'
//                 src={bkash}
//                 alt='Bkash'
//               />
//               <p>
//                 <span className='text-xl text-pink-600'>01639136200</span> -
//                 ন্যূনতম ৫০ টাকা
//               </p>
//             </div>
//             <div className='flex gap-2 items-center'>
//               <img
//                 className='h-10 w-10'
//                 src={nogod}
//                 alt='Nogod'
//               />
//               <p>
//                 <span className='text-xl text-orange-500'>01639136200</span> -
//                 ন্যূনতম ৫০ টাকা
//               </p>
//             </div>
//           </div>

//           {/* ✅ Current Balance */}
//           <p className='text-center text-green-700 font-bold'>
//             আপনার বর্তমান ব্যালেন্স: {userData?.balance ?? 0} টাকা
//           </p>

//           {/* ──────── Form ──────── */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className='space-y-12'>
//             <div className='space-y-4 font-semibold mt-5'>
//               {/* Amount */}
//               <div>
//                 <label
//                   htmlFor='amount'
//                   className='block mb-2 text-sm'>
//                   আপনি কত টাকা উত্তোলন করতে চান?
//                 </label>
//                 <input
//                   type='number'
//                   id='amount'
//                   {...register('amount', {
//                     required: 'টাকার পরিমাণ আবশ্যক',
//                     min: { value: 50, message: 'ন্যূনতম ৫০ টাকা লাগবে' },
//                   })}
//                   placeholder='টাকার পরিমাণ লিখুন'
//                   className='w-full px-3 py-2 border rounded-md'
//                 />
//                 {errors.amount && (
//                   <p className='text-red-500 text-sm'>
//                     {errors.amount.message}
//                   </p>
//                 )}
//               </div>

//               {/* Receiver Number */}
//               <div>
//                 <label
//                   htmlFor='number'
//                   className='block mb-2 text-sm'>
//                   যে নাম্বারে টাকা পাঠাতে চান
//                 </label>
//                 <input
//                   type='text'
//                   id='number'
//                   {...register('number', {
//                     required: 'নাম্বার আবশ্যক',
//                     pattern: {
//                       value: /^\d{11}$/,
//                       message: '১১ ডিজিটের সঠিক নাম্বার দিন',
//                     },
//                   })}
//                   placeholder='বিকাশ বা নগদ নাম্বার দিন'
//                   className='w-full px-3 py-2 border rounded-md'
//                 />
//                 {errors.number && (
//                   <p className='text-red-500 text-sm'>
//                     {errors.number.message}
//                   </p>
//                 )}
//               </div>

//               {/* Method */}
//               <div className='flex gap-4 items-center'>
//                 <div className='flex items-center'>
//                   <input
//                     type='radio'
//                     value='Bkash'
//                     id='bkash_radio'
//                     {...register('method', { required: 'মেথড সিলেক্ট করুন' })}
//                     className='mr-2'
//                   />
//                   <label
//                     htmlFor='bkash_radio'
//                     className='flex items-center gap-2'>
//                     <img
//                       className='w-10 h-10'
//                       src={bkash}
//                       alt='Bkash'
//                     />{' '}
//                     Bkash
//                   </label>
//                 </div>
//                 <div className='flex items-center'>
//                   <input
//                     type='radio'
//                     value='Nogod'
//                     id='nogod_radio'
//                     {...register('method', { required: 'মেথড সিলেক্ট করুন' })}
//                     className='mr-2'
//                   />
//                   <label
//                     htmlFor='nogod_radio'
//                     className='flex items-center gap-2'>
//                     <img
//                       className='w-10 h-10'
//                       src={nogod}
//                       alt='Nogod'
//                     />{' '}
//                     Nogod
//                   </label>
//                 </div>
//               </div>
//               {errors.method && (
//                 <p className='text-red-500 text-sm'>{errors.method.message}</p>
//               )}
//             </div>

//             {/* Submit */}
//             <div className='space-y-2'>
//               <button
//                 type='submit'
//                 className='w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white'>
//                 Withdraw Money
//               </button>
//             </div>
//           </form>

//           <div className='mt-5'>
//             <p className='px-6 text-sm text-center text-error font-semibold'>
//               উত্তোলনের পূর্বে ব্যালেন্স চেক করুন।
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Withdraw;

import { useForm } from 'react-hook-form';
import bkash from '../../assets/bkash.webp'; // Make sure these paths are correct
import nogod from '../../assets/nogot.png'; // Make sure these paths are correct
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UseUser from '../../Hooks/UseUser';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';

const Withdraw = () => {
  const axiosPublic = UseAxiosPublic();
  // Assuming UseUser returns: [userDataObject, isLoadingBoolean, refetchFunction]
  const [userData, isLoading, refetch] = UseUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // Set default values if needed, e.g., for method
      method: '',
    },
  });

  const onSubmit = async (data) => {
    const amount = Number(data.amount);

    if (isLoading && !userData) {
      // If still loading initial user data
      toast.info('ব্যবহারকারীর তথ্য লোড হচ্ছে। অনুগ্রহ করে একটু অপেক্ষা করুন।');
      return;
    }

    if (!userData || userData.balance === undefined) {
      toast.error(
        'ব্যবহারকারীর তথ্য অথবা ব্যালেন্স পাওয়া যায়নি। অনুগ্রহ করে পৃষ্ঠাটি রিফ্রেশ করুন।'
      );
      return;
    }

    // Frontend balance check for immediate user feedback (backend also validates)
    if (userData.balance < amount) {
      toast.error('আপনার অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স নেই। ❌');
      return;
    }
    if (amount < 50) {
      // Should match RHF validation, but good as a safeguard
      toast.error('ন্যূনতম ৫০ টাকা উত্তোলন করতে হবে।');
      return;
    }

    const payload = {
      amount,
      number: data.number,
      method: data.method,
      email: userData.email, // Crucial: use email from the fetched userData
      userId: userData._id, // Crucial: use _id from the fetched userData
    };

    try {
      // Single API call: Backend handles request logging AND balance deduction
      const response = await axiosPublic.post('/withdraw', payload);

      toast.success(
        response.data.message ||
          'উত্তোলন অনুরোধ সফল হয়েছে এবং ব্যালেন্স আপডেট করা হয়েছে। ✅'
      );
      reset(); // Clear the form
      if (typeof refetch === 'function') {
        refetch(); // Refresh user data to show updated balance
      } else {
        console.warn(
          'UseUser hook did not provide a refetch function. Balance display might be stale.'
        );
        // Fallback: You might consider a full page reload if refetch is critical and not available
        // window.location.reload();
      }
    } catch (err) {
      console.error('Withdraw error:', err);
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'উত্তোলনের অনুরোধ ব্যর্থ হয়েছে। ❌';
      toast.error(errorMessage);
    }
  };

  // Show a loading state for the entire component if userData is initially loading
  if (isLoading && !userData) {
    return (
      <div className='pt-28 flex justify-center items-center min-h-screen bg-primary-bg-image'>
        <p className='text-xl font-semibold text-gray-700'>
          আপনার তথ্য লোড হচ্ছে...
        </p>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>semicolonff | টাকা উত্তোলন</title>
      </Helmet>

      <div className='pt-28 bg-primary-bg-image flex justify-center items-start min-h-screen py-10'>
        <div className='flex flex-col max-w-md w-full p-6 sm:p-10 bg-white rounded-lg shadow-xl m-4'>
          {/* Bkash / Nogod Info */}
          <div className='mb-6 text-center flex flex-col gap-3'>
            <h2 className='text-2xl font-bold text-gray-800 mb-3'>
              টাকা উত্তোলন করুন
            </h2>
            <div className='flex gap-2 items-center justify-center sm:justify-start'>
              <img
                className='h-10 w-10 object-contain'
                src={bkash}
                alt='Bkash'
              />
              <p className='text-sm sm:text-base text-gray-700'>
                <span className='text-lg text-pink-600 font-semibold'>
                  01639136200
                </span>{' '}
                (bKash) - ন্যূনতম ৫০ টাকা
              </p>
            </div>
            <div className='flex gap-2 items-center justify-center sm:justify-start'>
              <img
                className='h-10 w-10 object-contain'
                src={nogod}
                alt='Nogod'
              />
              <p className='text-sm sm:text-base text-gray-700'>
                <span className='text-lg text-orange-500 font-semibold'>
                  01639136200
                </span>{' '}
                (Nagad) - ন্যূনতম ৫০ টাকা
              </p>
            </div>
          </div>

          {/* Current Balance */}
          <p className='text-center text-xl text-green-700 font-bold mb-6'>
            আপনার বর্তমান ব্যালেন্স:{' '}
            {userData?.balance !== undefined
              ? `${userData.balance.toFixed(2)} টাকা`
              : 'ব্যালেন্স লোড হচ্ছে...'}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6'>
            <div className='space-y-4 font-semibold'>
              {/* Amount */}
              <div>
                <label
                  htmlFor='amount'
                  className='block mb-1.5 text-sm text-gray-700'>
                  আপনি কত টাকা উত্তোলন করতে চান?
                </label>
                <input
                  type='number'
                  id='amount'
                  {...register('amount', {
                    required: 'টাকার পরিমাণ আবশ্যক',
                    min: {
                      value: 50,
                      message: 'ন্যূনতম ৫০ টাকা উত্তোলন করতে হবে।',
                    },
                    max: {
                      value:
                        userData?.balance !== undefined
                          ? userData.balance
                          : Infinity,
                      message: 'আপনার অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স নেই।',
                    },
                    valueAsNumber: true,
                  })}
                  placeholder='টাকার পরিমাণ লিখুন '
                  className='w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                />
                {errors.amount && (
                  <p className='text-red-600 text-xs mt-1'>
                    {errors.amount.message}
                  </p>
                )}
              </div>

              {/* Receiver Number */}
              <div>
                <label
                  htmlFor='number'
                  className='block mb-1.5 text-sm text-gray-700'>
                  আপনি যে নাম্বারে টাকা নিতে চান সেই নাম্বারটি লিখুন
                  (bKash/Nagad)
                </label>
                <input
                  type='text'
                  id='number'
                  {...register('number', {
                    required: 'নাম্বার আবশ্যক',
                    pattern: {
                      value: /^(01[3-9]\d{8})$/,
                      message:
                        '১১ ডিজিটের সঠিক বাংলাদেশী মোবাইল নাম্বার দিন (e.g., 01xxxxxxxxx)',
                    },
                  })}
                  placeholder='আপনার বিকাশ অথবা নগদ নাম্বার'
                  className='w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                />
                {errors.number && (
                  <p className='text-red-600 text-xs mt-1'>
                    {errors.number.message}
                  </p>
                )}
              </div>

              {/* Method */}
              <div>
                <label className='block mb-2 text-sm text-gray-700'>
                  পেমেন্ট মেথড নির্বাচন করুন
                </label>
                <div className='flex gap-4 items-center'>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      value='Bkash'
                      id='bkash_radio'
                      {...register('method', {
                        required: 'দয়া করে একটি পেমেন্ট মেথড সিলেক্ট করুন।',
                      })}
                      className='mr-2 h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500'
                    />
                    <label
                      htmlFor='bkash_radio'
                      className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer'>
                      <img
                        className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
                        src={bkash}
                        alt='Bkash'
                      />{' '}
                      Bkash
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      value='Nogod'
                      id='nogod_radio'
                      {...register('method', {
                        required: 'দয়া করে একটি পেমেন্ট মেথড সিলেক্ট করুন।',
                      })}
                      className='mr-2 h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500'
                    />
                    <label
                      htmlFor='nogod_radio'
                      className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer'>
                      <img
                        className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
                        src={nogod}
                        alt='Nogod'
                      />{' '}
                      Nogod
                    </label>
                  </div>
                </div>
                {errors.method && (
                  <p className='text-red-600 text-xs mt-1'>
                    {errors.method.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className='pt-4'>
              {' '}
              <button
                type='submit'
                disabled={isLoading && !userData} // Disable if initial data is loading
                className='w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed'>
                টাকা উত্তোলন করুন
              </button>
            </div>
          </form>

          <div className='mt-8'>
            <p className='px-6 text-xs sm:text-sm text-center text-red-700 font-medium'>
              উত্তোলনের অনুরোধ পাঠানোর পূর্বে আপনার অ্যাকাউন্টের ব্যালেন্স এবং
              প্রদত্ত নাম্বারটি ভালোভাবে চেক করুন। কোনো ভুল তথ্যের জন্য
              কর্তৃপক্ষ দায়ী থাকবে না।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

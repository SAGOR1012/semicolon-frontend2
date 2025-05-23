import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const { signIn } = UseAuth();
  const navigate = useNavigate(); // login korar por onno location a automatically niye jabe
  const location = useLocation();

  const from = location.state?.from.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // Success alert
        // Swal.fire({
        //   title: 'Login successful',
        //   icon: 'success',
        //   draggable: true,
        //   timer: 1500,
        //   showConfirmButton: false,
        // });
        toast.success('Login successful'); // ✅ toast alert

        // Redirect to home page
        // navigate('/');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Optional: Show error alert
        Swal.fire({
          title: 'সম্ভবত আপনার ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে',
          text: ' দয়া করে সঠিক তথ্য দিয়ে আবার চেষ্টা করুন অথবা পাসওয়ার্ড ভুলে গেলে সাপোর্ট টিমের সাথে যোগাযোগ করুন',
          icon: 'error',
        });
      });

    // console.log(data.email, data.password);
  };

  return (
    <div className='flex justify-center bg-primary'>
      <Helmet>
        <title>semicolonff | Login</title>
      </Helmet>
      <div className='w-full max-w-sm p-8 space-y-3 rounded-xl bg-primary-bg-image mt-28'>
        <h1 className='text-2xl font-bold text-center text-white mb-10'>
          Login
        </h1>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto max-w-xs'>
          {/* email */}
          <label
            htmlFor='email'
            className='block text-white mb-1'>
            Email
          </label>
          <input
            className='w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green focus:bg-white'
            {...register('email', { required: 'Email is required' })}
            type='email'
            placeholder='Email'
          />
          {/* email error statement */}
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
          )}

          {/* Password */}
          <label
            htmlFor='password'
            className='block text-white mb-1'>
            Password
          </label>
          <input
            className='w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green focus:bg-white'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters',
              },
              maxLength: {
                value: 11,
                message: 'Password cannot exceed 11 characters',
              },
            })}
            type='password'
            placeholder='Password'
          />
          {/* password error statement */}
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </p>
          )}

          <button className=' mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
            <svg
              className='w-6 h-6 -ml-2'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
              <circle
                cx='8.5'
                cy='7'
                r='4'
              />
              <path d='M20 8v6M23 11h-6' />
            </svg>
            <span className='ml-3'>Login</span>
          </button>
        </form>

        <p className='text-xs text-center sm:px-6 text-white'>
          কোনো একাউন্ট নেই ?
          <Link
            to='/signup'
            rel='noopener noreferrer'
            href='#'
            className='text-orange-600 '>
            {' '}
            নতুন একাউন্ট খুলুন{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

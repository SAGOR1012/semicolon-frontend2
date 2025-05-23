import { useEffect, useState } from 'react';

const WarningPopup = () => {
  // Automatically open the modal when the page loads

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6'>
              <h2 className='text-xl text-red-500 font-bold mb-4'>
                সতর্কবার্তা !
              </h2>
              {/* list item */}
              <ol className='mb-6 list-decimal list-inside space-y-2'>
                <li>
                  Unregistered প্লেয়ার যে ইনভাইট দিবে তাকে সহ রুম থেকে কিক দেয়া
                  হবে!
                </li>
                <li>
                  অবশ্যই কাস্টম রুম এ আপনি যে স্লট এ জয়েন করেছেন সেই স্লট এই
                  থাকবেন!
                </li>
                <li>
                  সন্দেহজনক user কে কোন নোটিস ছাড়াই BAN করা হবে! ({' '}
                  <span className='text-red-500'>মনস্টার ট্রাক </span>
                  চালানো নিষেধ)
                </li>
              </ol>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                onClick={handleClose}>
                OK !
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WarningPopup;

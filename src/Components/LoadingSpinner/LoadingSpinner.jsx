import { Square } from 'ldrs/react';
import 'ldrs/react/Square.css'; //
import './spinner.css';

const LoadingSpinner = () => {
  return (
    <div>
      {/* <span className='loader'>Load&nbsp;ng</span> */}
      {/* <span className='loader'></span> */}
      {/*     Default values shown*/}
      <Square
        size='35'
        stroke='5'
        strokeLength='0.25'
        bgOpacity='0.1'
        speed='1.2'
        color='blue'
      />
    </div>
  );
};

export default LoadingSpinner;

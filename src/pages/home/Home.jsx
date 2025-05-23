import { Helmet } from 'react-helmet-async';
import GameTypeCard from '../../Components/GameTypeCard/GameTypeCard';
import WarningPopup from '../../Components/PopupCard/WarningPopup';
import Banner from './banner/Banner';

const Home = () => {
  return (
    <div className='bg-primary-bg-image '>
      <Helmet>
        <title>semicolonff | Home</title>
      </Helmet>
      <WarningPopup></WarningPopup> {/* warning Popup */}
      <Banner></Banner>
      {/* Free Fire Game section */}
      <GameTypeCard></GameTypeCard>
    </div>
  );
};

export default Home;

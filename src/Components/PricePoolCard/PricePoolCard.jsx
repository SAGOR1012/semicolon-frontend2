const PricePoolCard = ({ match }) => {
  const { gametype, version, customMatchId, prizes = [] } = match;

  return (
    <div className='bg-slate-50'>
      <div className='flex flex-col items-center bg-yellow-400 py-2 mb-2'>
        <h3 className='font-bold'>PRICE POOL</h3>
        <p>
          {gametype} | {version} | #{customMatchId}
        </p>
      </div>
      <ul className='font-semibold space-y-1 px-3'>
        {prizes.map((prize, index) => (
          <li key={index}>
            🏆 {prize.position} - {prize.amount} Taka
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricePoolCard;

const ClassicFFRules = ({ rules }) => {
  // Split rules by line breaks or numbers, filter out empty lines
  const rulesArray = rules
    .split(/\d+\.\s?/) // Split by numbers like "1. "
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  return (
    <div>
      <dialog
        id='classicFFRulesModal'
        className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-xs btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg text-warning'>খেলার নিয়ম!</h3>
          <ol className='list-decimal list-inside py-4 space-y-1'>
            {rulesArray.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ol>
        </div>
      </dialog>
    </div>
  );
};

export default ClassicFFRules;

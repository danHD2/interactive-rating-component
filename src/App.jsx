import './App.css'
import star from '../public/icon-star.svg'
import { useState } from 'react'
import PropTypes from 'prop-types';

function App({ onSubmitRating }) {
const [selectedRating, setSelectedRating] = useState(null);
  return (
    <>
    <div className='flex flex-col items-start'></div>
        <img src={star} className='bg-lighterGrey rounded-full p-3' alt="Star Icon" />       
        <h1 className='text-3xl font-semibold py-5'>How did we do?</h1>
        <p className='text-lightGrey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='py-5 flex w-full justify-between'>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`bg-lighterGrey w-12 p-3 rounded-full hover:bg-Orange hover:text-varyDarkBlue ${selectedRating === num ? 'bg-white text-varyDarkBlue' : ''}`}
              onClick={() => setSelectedRating(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          className='bg-Orange hover:bg-white tracking-wider rounded-full w-full py-2 mt-2 text-varyDarkBlue font-bold'
          onClick={() => onSubmitRating(selectedRating)}
          disabled={selectedRating === null}
        >
          SUBMIT
        </button>  
    </>
  )
}

App.propTypes = {
  onSubmitRating: PropTypes.func.isRequired,
};

export default App

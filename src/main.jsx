import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Success from './success.jsx';


function Main() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSubmit = (selectedRating) => {
    setRating(selectedRating);
    setSubmitted(true);
  }
  return (
    <StrictMode>
      <div className='bg-darkBlue font-Overpass p-10 rounded-3xl w-27'>
        {!submitted ? (
          <App onSubmitRating={handleRatingSubmit} />
        ) : (
          <Success rating={rating || 0} />
        )}
      </div>
    </StrictMode>
  );
}
createRoot(document.getElementById('root')).render(<Main />);

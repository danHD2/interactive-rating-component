import illustration from '../public/illustration-thank-you.svg'
import PropTypes from 'prop-types';

function Success({ rating }) {
    return (
        <div className='flex flex-col items-center'>
            <img src={illustration} alt="Illustration" />
            <div className='bg-lighterGrey py-2 px-5 rounded-full my-8'>
                <p className='text-Orange font-light'>You selected {rating} out of 5</p>
            </div>
            <h1 className='text-3xl font-semibold'>Thank you!</h1>
            <p className='text-lightGrey py-3 text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
        </div>

    )
}

Success.propTypes = {
    rating: PropTypes.number.isRequired,
  };

export default Success
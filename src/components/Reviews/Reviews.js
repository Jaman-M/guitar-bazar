import React from 'react';
import useReview from '../../Hook/userReview';
import BuyerReview from '../BuyerReview/BuyerReview';

const Reviews = () => {
    const[reviews, setReviews] = useReview()
    
    return (
        <div>
            <h1 className='text-4xl my-10'>Buyer <span className='text-4xl text-orange-500 font-bold'>Reviews!!</span></h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    reviews.map(review => <BuyerReview
                        key={review.id}
                        review={review}
                    >

                    </BuyerReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;
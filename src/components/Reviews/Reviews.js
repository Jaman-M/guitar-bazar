import React from 'react';
import BuyerReview from '../BuyerReview/BuyerReview';

const Reviews = () => {
    const buyerReviews=[
        {id: 1, name:'bang-1', rattings:4.5},
        {id: 2, name:'bang-2', rattings:3.5},
        {id: 3, name:'bang-3', rattings:4.0},
        {id: 4, name:'bang-4', rattings:4.5},
        {id: 5, name:'bang-5', rattings:5},
        {id: 6, name:'bang-6', rattings:4.5},
    ]
    return (
        <div>
            <h1 className='text-4xl my-10'>Buyer <span className='text-4xl text-orange-500 font-bold'>Reviews!!</span></h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    buyerReviews.map(review => <BuyerReview
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
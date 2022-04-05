import React from 'react';
import BuyerReview from '../BuyerReview/BuyerReview';

const Reviews = () => {
    const buyerReviews=[
        {id: 1, name:'Hero', rattings:4.5 , comment: 'this is very good'},
        {id: 2, name:'Alom 15', rattings:3.5, comment: 'This is awesome, but price is so high. The price could have been reduced a little more'},
        {id: 3, name:'Bacca Shakib', rattings:4.0, comment: 'this is very good'},
        {id: 4, name:'Apu Vabi', rattings:4.5, comment: 'this is very good'},
        {id: 5, name:'Bappa cheka', rattings:5, comment: 'not bad'},
        {id: 6, name:'Bappi kaku', rattings:4.5, comment: 'i like it very much'},
        {id: 6, name:'nuru cro', rattings:4.5, comment: 'i like it very much'},
        {id: 6, name:'khalid bro', rattings:4.5, comment: 'i like it very much'},
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
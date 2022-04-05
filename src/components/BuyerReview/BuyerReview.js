import React from 'react';

const BuyerReview = (props) => {
    const{name, rattings, comment} = props.review;
    return (
        <div className='bg-gray-100 mx-5 p-4 rounded-lg'>
            <div className='flex items-center'>
            <span><img className='rounded-full h-20 mx-4' src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png" alt="" /></span> <h2 className='text-xl font-bold'>{name}</h2>
            </div>
            <div>
                <h1 className='text-left my-8'><span className='font-bold'>Product's Review :</span> {comment} </h1>
            </div>
            <div>
            <p className='text-left'>
               <h1 className='text-xl'><span className='font-bold'>Rattings:</span> {rattings}</h1> 
            </p>
            </div>
        </div>
    );
};

export default BuyerReview;
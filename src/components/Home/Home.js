import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold  mt-10'>Welcome to <span className='text-3xl font-bold text-orange-500 mt-10'>Guitar Bazar</span></h1>

            <div className='grid grid-cols-3 gap-4 text-left m-10'>
                <div className='col-span-2 mt-10'> <span className='
                font-bold text-8xl mt-10'>Your Best guitar!!</span> <br /> <span className='font-bold text-8xl text-orange-500 mt-5'>Come to Buy</span> 
                <p className='font-mono text-2xl mt-10'>One of the best things about learning guitar riffs is that they are awesome to play. What’s better than learning your favourite guitar riffs on your guitar? Literally nothing!</p>
                <button className='bg-orange-300 py-4 rounded my-4 px-8 text-2xl hover:bg-orange-700'> <a href="https://www.youtube.com/watch?v=RGNWNE-iurA">Live Demo</a> </button>
                </div>
                <div className='col-span-1'>
                    <img src="https://www.nicepng.com/png/detail/55-556715_girl-playing-an-acoustic-guitar-music-girl.png" alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default Home;
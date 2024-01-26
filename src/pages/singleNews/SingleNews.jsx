import React from 'react';

const SingleNews = () => {
    return (
        <section>
            <div className='relative'>
                <div
                    className='w-full h-[439px] object-cover bg-gradient-180 from-[#383838] via-[#191919] to-dark-8 bg-cover relative'>
                    <img src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-[439px] object-cover opacity-70 ' />
                    <p className='text-center font-inter text-[44px] font-semibold text-white absolute left-0 right-0 bottom-4 bg-clip-text'>
                        The Rise of Artificial Intelligence in Healthcare
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleNews;

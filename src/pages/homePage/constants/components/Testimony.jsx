import React from 'react'

const Testimony = ({ id, name, img, add, content, rating }) => {

    const RatingLogo = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7.80408 1.47145C8.19042 0.812467 9.14308 0.812466 9.52942 1.47145L11.6902 5.15701C11.8312 5.3975 12.0661 5.56821 12.3384 5.62799L16.5113 6.54408C17.2574 6.70788 17.5518 7.61391 17.0445 8.18498L14.207 11.3789C14.0218 11.5873 13.9321 11.8635 13.9594 12.1409L14.3776 16.3927C14.4524 17.1529 13.6817 17.7129 12.9818 17.4068L9.06739 15.6952C8.81197 15.5835 8.52153 15.5835 8.26611 15.6952L4.35171 17.4068C3.65181 17.7128 2.88109 17.1529 2.95587 16.3927L3.37411 12.1409C3.4014 11.8635 3.31165 11.5873 3.1265 11.3789L0.289034 8.18498C-0.218308 7.61391 0.0760776 6.70788 0.822195 6.54408L4.99508 5.62799C5.26736 5.56821 5.50234 5.3975 5.64332 5.15701L7.80408 1.47145Z" fill="#FFCE22" />
        </svg>
    )


    return (
        <article className='flex flex-col justify-start items-center gap-1'>
            <div className='flex items-center gap-3'>
                <img src={img} alt={name} className='h-12 w-12 rounded-[48px] object-cover' />
                <div className='font-inter'>
                    <p className='text-white font-medium text-lg'>{name}</p>
                    <p className='text-base text-dark-40'>{add}</p>
                </div>
            </div>
            <div className='flex justify-center items-center py-2 px-3 gap-1 rounded-full bg-dark-8 border border-dark-15 w-fit relative -bottom-6'>
                <RatingLogo />
                <RatingLogo />
                <RatingLogo />
                <RatingLogo />
                <RatingLogo />
            </div>
            <div className='pt-10 pr-6 pb-6 pl-6 rounded-xl border border-dark-15 bg-dark-10 text-center text-white font-inter text-base w-fit h-full '>
                {content}
            </div>
        </article>
    )
}

export default Testimony
import React from 'react'
import Image from 'next/image'

import Computer from '@/../public/computer.png';
import Phone from '@/../public/phone.png';


export const System = () => {
    return (
        <div className='paddingAlignment bg-night flex flex-col sm:flex-row items-center justify-center gap-6 shadow-md -mt-12'>
            <Image
                src={Phone}
                alt='Phone'
                className='object-cover min-h-full min-w-1/2'
            />
            <Image
                src={Computer}
                alt='Computer'
                className='object-cover min-h-full min-w-1/2'
            />
        </div>

    )
}

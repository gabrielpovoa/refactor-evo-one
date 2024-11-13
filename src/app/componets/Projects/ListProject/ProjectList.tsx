import Image, { StaticImageData } from 'next/image';
import React from 'react'

type Props = {
    img: StaticImageData | string;
    title: string;
    subtitle: string,
    description: string,
}

export const ProjectList = ({ img, title, subtitle, description }: Props) => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-start'>
            <Image
                src={img}
                alt={`${title} - ${subtitle}`}
                className='object-cover w-full sm:w-96 rounded-md mt-4 duration-300 ease-linear hover:scale-105'
            />
            <div className='flex flex-col gap-2'>
                <h2 className='text-night font-bold text-sm sm:text-lg'>{title}</h2>
                <p className='text-neutral-800 text xs sm:text-sm'>{subtitle}</p>
                <p className='text-neutral-800 text xs sm:text-sm'>{description}</p>
            </div>
        </div>
    )
}

import React from 'react'

type Props = {
    icon: any,
    title: string,
    description: string,
}

export const Service = ({ icon, title, description }: Props) => {
    return (
        <div className='flex items-center justify-center flex-col gap-2 mt-12'>
            <span className='text-red hover:text-[#0D21A1] duration-300 ease-linear transition-colors text-5xl'>{icon}</span>
            <p className='text-night font-bold xs:text-xs text-sm md:text-lg xl:text-xl lg:text-2xl text-center'>{title}</p>
            <p className='text-night/70 text-center text-sm'>{description}</p>
        </div>
    )
}

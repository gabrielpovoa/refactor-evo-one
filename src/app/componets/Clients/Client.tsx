import { EvoPartner } from '@/data/EvoPartner'
import React from 'react'
import MarqueePartner from './Marquee'

export const Client = () => {
    return <>

        <section id='Clientes' className='bg-night isolate paddingAlignment text-white flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center '>
                <h1 className='text-lg sm:text-4xl font-bold '>Alguns dos nossos clientes</h1>
            </div>
        </section>

        <div className='absolute left-0 right-0 flex items-center justify-center pointer-events-none'>
            <h1 className="text-stroke text-center text-5xl sm:text-9xl  p-12 uppercase font-bold z-0 leading-none sm:leading-tight">
                evo <span className='text-red-stroke'>one</span>
            </h1>
        </div>

        <div className="marquee-wrapper overflow-hidden">
            <div className="animate-marquee flex space-x-4 sm:space-x-8 py-6 sm:py-12">
                {EvoPartner.map((partner) => (
                    <MarqueePartner key={partner.id} img={partner.partner} />
                ))}
                {EvoPartner.map((partner) => (
                    <MarqueePartner key={`duplicate-${partner.id}`} img={partner.partner} />
                ))}
            </div>
        </div>

    </>
}

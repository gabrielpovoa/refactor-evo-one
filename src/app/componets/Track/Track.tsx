import React from 'react'
import { Service } from './ServiceList/Service'
import { EvoTrack } from '@/data/EvoTrack'

export const Track = () => {
    return (
        <section id='Rastreamento' className='paddingAlignment bg-flash relative z-20 mx-4 -translate-y-28 rounded-md shadow-md'>
            <div className='flex items-center justify-center flex-col gap-4 w-full  mx-auto'>
                <h1 className='text-lg xl:text-4xl font-bold text-center'>Conhece a plataforma Evo Track?</h1>
                <p className='text-night text-center sm:w-1/2'>A Evo Track é um sistema de rastreamento veícular totalmente em nuvem, contando com aplicativos nativos Android e IOS e equipamentos fornecidos pelos melhores fabricantes mundiais, tecnologia GPS integrada, sistemas inteligentes de telemetria e modernos conceitos de coleta de dados.</p>
            </div>
            <div className='flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto container'>
                {EvoTrack.map((item, index) => (
                    <Service key={index} icon={item.icon} title={item.label_title} description={item.description} />
                ))}
            </div>
        </section>
    )
}

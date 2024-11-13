import React from 'react'
import { ProjectList } from './ListProject/ProjectList'
import { EvoProjects } from '@/data/EvoProjects'

export const Project = () => {
    return (
        <section id='Projetos' className='paddingAlignment bg-white shadow-md flex items-center justify-center flex-col'>
            <div className='relative flex items-center justify-center'>

                <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none'>
                    <h1 className="text-stroke text-center text-5xl sm:text-9xl opacity-20 p-12 uppercase font-bold z-0 leading-none sm:leading-tight">
                        evo <span className='text-red-stroke'>one</span>
                    </h1>
                </div>

                <div className='flex items-center justify-center flex-col gap-4 w-full mx-auto z-10'>
                    <h1 className='text-night font-bold text-center text-lg xl:text-4xl mt-6 sm:mt-8 sm:w-5/6 w-full'>
                        Conheça alguns de nossos últimos projetos realizados.
                    </h1>
                </div>
            </div>

            <div className='container mx-auto sm:w-4/5 mt-12'>
                {EvoProjects.map((item, index) => (
                    <ProjectList
                        key={index}
                        img={item.image}
                        title={item.label_title}
                        subtitle={item.label_subtitle}
                        description={item.description}
                    />
                ))}
            </div>
        </section>

    )
}

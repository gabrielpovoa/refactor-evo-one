import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const RightSide = () => {
    return (
        <aside className='flex flex-col items-start gap-4 mx-auto mt-16 max-w-xl sm:mt-20'>
            <h1 className='text-3xl sm:text-5xl isolate uppercase font-bold '>Entrar em <br />contato</h1>
            <p>Para solicitar o seu orçamento, preencha o formulário ou entre em contato conosco pelo e-mail <Link href='mailto:contato@evo1.com.br' className='italic border-b border-red hover:border-blue-600'>contato@evo1.com.br</Link> ou pelo telefone <Link href='tel:(51) 3095-4959' className='italic border-b border-red hover:border-blue-600'>(51) 3095-4959</Link>.
            </p>
            <div className='flex gap-2'>
                <MapPin className='hover:text-green-600 text-red transition-colors duration-300 ease-out' />
                <h2>Encontre-nos</h2>
            </div>
            <div className="w-full  mx-auto ">
                <div className="relative overflow-hidden pb-[56.25%]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1731502742643!6m8!1m7!1s_3Oi8XXagy1D5RkmLHPeow!2m2!1d-30.05484534615075!2d-51.16373435761885!3f184.70824!4f0!5f0.7820865974627469"
                        className="absolute top-0 left-0 w-full h-full rounded-md"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>

                </div>
            </div>
        </aside>
    )
}

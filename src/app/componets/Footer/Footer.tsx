import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-night p-8 flex justify-end flex-col items-end shadow-md'>
            <h1 className='text-white'>
                <Link href="https://joao-povoa-filho.vercel.app/" target='_blank' className='text-red'>João Gabriel | Refatorado por João</Link>
            </h1>
            <h1 className='text-white'>Hestia | Desenvolvido por ThemeIsle</h1>
        </footer>
    )
}

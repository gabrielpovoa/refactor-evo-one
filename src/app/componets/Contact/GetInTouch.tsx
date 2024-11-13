import { RightSide } from './RightSide'
import { LeftSide } from './LeftSide'

export const GetInTouch = () => {
    return <>
        <div id='Contato' className='relative bg-contact-banner bg-cover bg-center bg-no-repeat 
        text-white flex justify-center items-start isolate'>

            <div className='absolute left-0 right-0 flex items-center justify-center pointer-events-none'>
                <h1 className="text-stroke-white text-center text-5xl sm:text-9xl  p-12 uppercase font-bold z-0 leading-none sm:leading-tight">
                    evo <span className='text-red-white'>one</span>
                </h1>
            </div>

            <div className='bg-black/60 sm:bg-black/90 absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center'></div>

            <div className='z-50 relative flex-1 flex justify-between flex-col sm:flex-row items-center sm:items-start p-6'>
                <RightSide />
                <LeftSide />
            </div>
        </div>
    </>
}

import Image from 'next/image'

import heroImage from '../../public/images/hero1.webp'


const Hero1: React.FC = () => {
    return (
        <div className="w-full overflow-hidden relative h-[90vh] lg:h-[80vh]">

            {/* mobile screen */}
            <div className='lg:hidden'>
                <iframe loading="lazy" className="w-full aspect-video px-3 mt-8" src="https://www.youtube.com/embed/LLmX2JDAMd0" title="YouTube video player" allowFullScreen></iframe>
                <div className='flex flex-col h-full gap-32'>
                    <h1 className="font-Syne text-4xl font-medium text-myNeon text-center pt-8 px-3">Management agency for the new wave of talent</h1>
                    <div className='w-[96px] h-[96px] rounded-full border-2 border-myNeon flex items-center justify-center z-50 ml-8'>
                        <p className='font-Syne text-xl font-medium text-myNeon'>Explore!</p>
                    </div>
                </div>
                <Image src={heroImage} alt='Sultan Entertainment' quality={100} priority className="w-[294px] h-[360px] absolute right-[-20px] bottom-0 rounded-b-[50px]"/>
            </div>

            {/* desktop screen */}
            <div className='hidden lg:inline-flex w-full h-full'>
                <div className='w-8/12 h-full pl-16 pt-12'>
                    <iframe loading="lazy" className="w-full aspect-video" src="https://www.youtube.com/embed/LLmX2JDAMd0" title="YouTube video player" allowFullScreen></iframe>
                </div>
                <div className='w-4/12 h-full pt-12 px-10 flex flex-col justify-between'>
                    <h1 className="font-Syne text-5xl font-medium text-myNeon text-center">Management agency for the new wave of talent</h1>
                    <div className='w-[96px] h-[96px] rounded-full border-2 border-myNeon flex items-center justify-center z-50 mb-48'>
                        <p className='font-Syne text-xl font-medium text-myNeon'>Explore!</p>
                    </div>
                </div>
                <Image src={heroImage} alt='Sultan Entertainment' quality={100} priority className="w-[300px] absolute bottom-0 right-[-30px] rounded-b-[50px]"/>
            </div>





        </div>
    )
}

export default Hero1
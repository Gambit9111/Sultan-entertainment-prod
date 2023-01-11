import Image from 'next/image'

import heroImage from '../../public/images/hero1.webp'


const Hero1: React.FC = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative">
            <iframe loading="lazy" className="w-full aspect-video px-3 mt-14" src="https://www.youtube.com/embed/LLmX2JDAMd0" title="YouTube video player" allowFullScreen></iframe>
            <div className='flex flex-col h-full gap-32 '>
                <h1 className="font-Syne text-4xl font-medium text-myNeon text-center pt-8 px-3">Management agency for the new wave of talent</h1>
                <div className='w-[96px] h-[96px] rounded-full border-2 border-myNeon flex items-center justify-center z-50 ml-6'>
                    <p className='font-Syne text-xl font-medium text-myNeon'>Explore!</p>
                </div>
            </div>
            <Image src={heroImage} alt='Sultan Entertainment' quality={100} priority className="w-[294px] h-[360px] absolute right-[-20px] bottom-20 rounded-b-[50px]"/>
        </div>
    )
}

export default Hero1
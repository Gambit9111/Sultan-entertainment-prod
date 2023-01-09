import Image from 'next/image'

import logo from '../../public/logo.webp'
import Vinyl from '../../public/vinyl.svg'
import close from '../../public/close.svg'

import youtube from '../../public/youtube.svg'
import instagram from '../../public/instagram.svg'
import spotify from '../../public/spotify.svg'
import apple from '../../public/apple.svg'

const Header: React.FC = () => {
    return (
        <header className='w-full h-[70px] border-b-2 border-myNeon sticky top-0'>
            <div className='flex w-full h-full relative items-start justify-center overflow-hidden pt-3 pr-6'>
                <Image src={logo} alt='Sultan Entertainment' className='w-[42px] h-[32px ' />
                <h1 className='text-myNeon uppercase font-Syne font-bold text-5xl tracking-tighter pt-2'>aukštas</h1>
                <Image src={Vinyl} alt='Vinyl' className='absolute top-[-33px] right-[-33px] animate-spin hover:animate-none hover:scale-150'
                onClick={() => {
                    const navMenu = document.getElementById('nav-menu');
                    navMenu?.classList.toggle('hidden');
                }}/>
            </div>

            {/* dropdown */}
            <div id="nav-menu" className='hidden absolute top-0 right-0 w-full h-[400px] bg-myBlack border-2 border-myNeon rounded-b-xl'>

                <div className='flex w-full h-full justify-between'>
                    <div className='pt-8 pl-12 space-y-6'>
                        <nav className='text-myWhite uppercase font-Syne text-2xl font-bold space-y-2'>
                            <h3>home</h3>
                            <h3>contact</h3>
                            <h3>merch</h3>
                            <h3>artists</h3>
                        </nav>
                        <div className='text-myNeon uppercase font-Syne text-base font-semibold space-y-2'>
                            <h4>@prosto.pijus</h4>
                            <h4>@bienskas</h4>
                            <h4>@_seneka__</h4>
                            <h4>@m.a.m.i.s</h4>
                            <h4>@don.muile</h4>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6 pr-3 pt-6'>
                        <Image src={youtube} alt='youtube' />
                        <Image src={spotify} alt='spotify' />
                        <Image src={instagram} alt='instagram' />
                        <Image src={apple} alt='apple' />
                    </div>
                </div>


                <Image src={close} alt='close' className='absolute top-[-2px] right-[-2px]' onClick={() => {
                    const navMenu = document.getElementById('nav-menu');
                    navMenu?.classList.toggle('hidden');
                } }/>

            </div>
        </header>
    )
}

export default Header
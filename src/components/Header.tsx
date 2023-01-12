import Image from 'next/image'

import logo from '../../public/logo.webp'

const Header: React.FC = () => {
    return (
        <header className='w-full h-[70px] border-b-2 border-myNeon bg-myBlack lg:h-[102px]'>
            {/* mobile screen */}
            <div className='flex w-full h-full relative items-start justify-center overflow-hidden pt-3 pr-6 lg:hidden'>
                <Image src={logo} alt='Sultan Entertainment' quality={100} className='w-[42px] h-[32px] ' />
                <h1 className='text-myNeon uppercase font-Syne font-bold text-5xl tracking-tighter pt-2'>aukštas</h1>
                <Image src='/Vinyl.svg' alt='Vinyl' width={70} height={70} quality={100} className='absolute top-[-33px] right-[-33px] animate-spin hover:animate-none hover:scale-150'
                onClick={() => {
                    const navMenu = document.getElementById('nav-menu');
                    navMenu?.classList.toggle('hidden');
                }}/>
            </div>
            
            {/* dekstop screen */}
            <div className='hidden lg:inline-flex px-16 w-full h-full items-center justify-between pt-3'>
                <nav className='text-myWhite uppercase font-Syne text-2xl font-bold flex gap-12'>
                    <h3>Home</h3>
                    <h3>Contact</h3>
                    <h3>Merch</h3>
                    <h3>Artists</h3>
                </nav>
                <div className='flex gap-1'>
                    <Image src={logo} alt='Sultan Entertainment' quality={100} className='w-[42px] h-[32px] ' />
                    <h1 className='text-myNeon uppercase font-Syne font-bold text-5xl tracking-tighter pt-2'>aukštas</h1>
                </div>
            </div>

            {/* mobile dropdown */}
            <div id="nav-menu" className='z-50 hidden absolute top-0 right-0 w-full h-[400px] bg-myBlack border-2 border-myNeon rounded-b-xl'>

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
                        <Image src='/youtube.svg' alt='youtube' width={38} height={38} />
                        <Image src='/spotify.svg' alt='spotify' width={38} height={38} />
                        <Image src='/instagram.svg' alt='instagram' width={38} height={38} />
                        <Image src='/apple.svg' alt='apple' width={38} height={38} />
                    </div>
                </div>


                <Image src='/close.svg' width={64} height={64} alt='close' className='absolute top-[-2px] right-[-2px]' onClick={() => {
                    const navMenu = document.getElementById('nav-menu');
                    navMenu?.classList.toggle('hidden');
                } }/>

            </div>
        </header>
    )
}

export default Header
import { useEffect, useRef } from 'react';

export default function Home() {
    const leavesMaskRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            leavesMaskRef.current.style.transform = `translateY(${
                -scrollTop * 0.5
            }px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='min-h-screen relative'>
            <header className='bg-blue-500 p-4'>
                <nav className='container mx-auto'>
                    <ul className='flex justify-end space-x-4'>
                        <li>
                            <a className='text-white' href='#'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a className='text-white' href='#'>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a className='text-white' href='#'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className='w-full bg-primary py-16 text-center'>
                <h1
                    className='font-title text-6xl md:text-9xl lg:text-20vw font-bold bg-clip-text leading-none inline-block'
                    style={{
                        backgroundImage: "url('/forest-leaves.jpg')",
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        backgroundAttachment: 'fixed',
                        fontFamily: "'Bungee', sans-serif",
                    }}
                >
                    Gabriel H. Dalmoro
                </h1>
            </section>
            <div className='bg-forest-leaves bg-cover bg-center min-h-screen relative'>
                <div
                    className='absolute top-0 left-0 w-full h-3/4 bg-leaves-mask'
                    ref={leavesMaskRef}
                ></div>
            </div>
        </main>
    );
}

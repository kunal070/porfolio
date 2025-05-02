import React, { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Game from '../Game'
import { Physics } from '@react-three/cannon'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CustomToast from './CustomToast'
import JoystickComponent from './Joystick'
import { JoystickProvider } from '../context/joystick.context'

const MenuData = () => {
    const navigate = useNavigate()

    const openPage = (path) => {
        navigate(`/${path}`)
    }

    return (
        <>
            <div className="btn btn-yellow-bottom" onClick={() => openPage("about")} style={{ width: "150px" }}>
                <p> About </p>
            </div>
            <div className="btn btn-yellow-bottom" onClick={() => openPage("projects")} style={{ width: "150px" }}>
                <p> Projects </p>
            </div>
            <div className="btn btn-yellow-bottom" onClick={() => openPage("resume")} style={{ width: "150px" }}>
                <p> Resume </p>
            </div>
            <div className="btn btn-yellow-bottom" onClick={() => openPage("contact")} style={{ width: "150px" }}>
                <p> Contact </p>
            </div>
            <div className="btn btn-yellow-bottom" onClick={() => openPage("characters")} style={{ width: "150px" }}>
                <p> Characters </p>
            </div>
        </>
    )
}

const Home = () => {
    const [pointerLockFlag, setPointerLockFlag] = useState(false)
    const [showSmallMenu, setShowSmallMenu] = useState(false)

    const isMobileDevice = JSON.parse(window.sessionStorage.getItem('isMobile')) === '1';

    const handlePointerLock = () => {
        document.body.requestPointerLock()
    }

    const lockPointer = (e) => {
        if (!isMobileDevice) {
            e.target.requestPointerLock()
        }
    }

    const pointerLockChange = () => {
        setPointerLockFlag(document.pointerLockElement)
    }

    useEffect(() => {
        document.addEventListener('pointerlockchange', pointerLockChange);
        return () => {
            document.removeEventListener('pointerlockchange', pointerLockChange);
        }
    }, [])

    const showToast = () => {
        toast(<CustomToast message="👋 Found a bug or want to connect?" message2="Use the 'Contact Us' form to reach out🌟" />, { delay: 2000, limit: 1 })
    }

    useEffect(() => {
        setTimeout(() => {
            if (!sessionStorage.getItem('previouslyVisited')) {
                showToast();
                sessionStorage.setItem('previouslyVisited', 'true');
            }
        }, 3000);
    }, [])

    const toggleMenu = () => {
        setShowSmallMenu(!showSmallMenu)
    }

    return (
        <>
            <JoystickProvider>
                {showSmallMenu &&
                    <div className='bg-menu w-full h-full flex justify-center items-center flex-col z-10 cursor-pointer' onClick={toggleMenu}>
                        <div className='absolute top-0 right-0 text-2xl m-4 p-3 bg-[#f3c448] rounded-full'>
                            X
                        </div>
                        <MenuData />
                    </div>
                }
                <Suspense fallback={<Loader />}>
                    <div className="flex h-screen w-full absolute flex-col z-10 lg:flex-row md:flex-col sm:flex-col">
                        {/* Menu in large screen */}
                        <div className='hidden px-4 flex-col justify-center align-center w-1/5 h-full lg:flex md:hidden sm:hidden' id='navbar-default'>
                            <MenuData />
                        </div>

                        {/* Hamburger in small screen */}
                        <div className='absolute top-0 right-0 p-4  m-2 bg-ham float-end lg:hidden md:hidden sm:absolute' onClick={toggleMenu}>
                            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </div>

                        <div className="w-full flex p-16 pt-20 h-full sm:h-full" onPointerDown={handlePointerLock}>
                            <div className=''>
                                <div className="add-search">
                                    {pointerLockFlag ?
                                        <>
                                            <p className='text-xl'> Press WASD to move. </p>
                                            <p className='text-xl'> Press SHIFT to run. </p>
                                            <p className='text-xl'> Press ESCAPE to return. </p>
                                        </>
                                        :
                                        <>
                                            <p className='text-xl'> Hello, I am Manav Shah,</p>
                                            <p className='text-xl'> MERN stack developer. </p>
                                            {
                                                isMobileDevice ? null : <p className='text-xl'> Click Mouse to Move around. </p>
                                            }
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* joystick small screen */}
                    {
                        isMobileDevice ?
                            <div className='p-4 m-2 bottom-0 left-50 absolute z-10'>
                                <JoystickComponent />
                            </div> : null
                    }

                    <Canvas shadows onPointerDown={lockPointer}>
                        <hemisphereLight skyColor="#b1e1ff" intensity={1} />
                        <Physics>
                            <Game />
                        </Physics>
                    </Canvas>
                </Suspense>
            </JoystickProvider>
        </>
    )
}

export default Home

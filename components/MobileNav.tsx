import { useState } from 'react'
import Link from "next/link";
import { Discord, Github } from "@icons-pack/react-simple-icons"
import Themeswitch from './Themeswitch'

const MobileNav = () => {
    const [navShow, setNavShow] = useState(false)

    const onToggleNav = () => {
        setNavShow((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden'
            }
            return !status
        })
    }

    return (
        <div className="sm:hidden">
            <div className='float-right'>
                <button
                    type="button"
                    className="ml-1 mr-1 h-8 w-8 rounded py-1"
                    aria-label="Toggle Menu"
                    onClick={onToggleNav}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-gray-900 dark:text-gray-100"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className={` fixed top-0 left-0 z-20 h-screen w-full transform duration-500 ease-in-out  ${navShow ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className=" h-screen bg-white backdrop-blur-xl  dark:bg-black">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="mr-5 mt-11 h-8 w-8 rounded"
                                aria-label="Toggle Menu"
                                onClick={onToggleNav}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-gray-900 dark:text-gray-100"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="fixed mt-8 h-full px-20">
                            <div className='px-12 py-4'>
                                <Link className="text-2xl font-bold tracking-widest text-gray-900 transition dark:text-gray-100 w-full" href={'/discord'}>DIscord</Link>
                            </div>
                            <div className='px-12 py-4'>
                                <Link className="text-2xl font-bold tracking-widest text-gray-900 transition dark:text-gray-100 " href={'/github'}><span>Github</span></Link>
                            </div>
                            <div className='px-12 py-4'>
                                <div className="text-2xl font-bold tracking-widest text-gray-900 transition dark:text-gray-100 ">
                                    <Themeswitch />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold">
                1-BOT
            </h1>
        </div>
    )
}

export default MobileNav
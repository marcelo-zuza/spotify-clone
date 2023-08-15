import React from 'react'
import SpotifyLogo from '../assets/img/spotify-logo.png'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
                <div className="container flex items-center mx-auto">
                    <div>
                        <a href="#">
                            <img className="w-20 md:w-125px" src={SpotifyLogo} alt="Spoitify" />
                        </a>
                    </div>
                    <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="items-end flex-1 text-white font-bold hidden md:flex">
                        <nav className="flex-1">
                            <ul className="flex justify-end flex-1">
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm" href="#">Premium</a>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm" href="#">Ajuda</a>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm" href="#">Baixar</a>
                                </li>
                                <li className="px-4">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm" href="#">Inscrever-se</a>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm" href="#">Log-in</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
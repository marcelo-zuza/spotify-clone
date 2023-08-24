

import React, { useState } from 'react';
import SpotifyLogo from '../assets/img/spotify-logo.png'

const TestNavBar = () => {


    const [menuOpen, setMenuOpen] = useState(false);

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
                        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            <i className="fas fa-bars"></i>
                        </button>                    
                    </div>

                    <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col space-y-4 space-x-3 py-3">
                            <a href="#" className="text-white">Início</a>
                            <a href="#" className="text-white">Sobre</a>
                            <a href="#" className="text-white">Serviços</a>
                            <a href="#" className="text-white">Contato</a>
                        </div>
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

export default TestNavBar
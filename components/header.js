import Image from 'next/image'
import { useState } from 'react';
import styles from './header.module.css'

import { BsHandbag } from "react-icons/bs";
import {VscAccount,VscThreeBars} from 'react-icons/vsc'

const Header  = ()=>{
    const [click,setClick] = useState(false)

    const navLoad = ()=>{
           setClick(!click)
        
    }
    return(
        <header className="py-4 bg-white drop-shadow-lg border-b-1 border-b-slate-700">
            <div className='xl:container xl:mx-auto  md:container md:mx-auto sm:container sm:mx-auto flex my-3   justify-between'>
                <div className="text-3xl  font-bold flex md:text-2xl sm:text-2xl" >
                    <h3 className=' text-sky-400 tracking-widest'>Fashion<span className='text-red-600'>Shop</span></h3>
                </div>
                <div className='xl:text-xl  lg:text-xl lg:flex xl:flex md:text-base  sm:hidden nav'>
                    <ul className='flex cursor-pointer relative nav-list'>
                        <li className='px-4 font-bold nav-list-item'><a>Home</a></li>
                        <li className='px-4 nav-list-item'><a>Shop</a></li>
                        <li className='px-4 nav-list-item'><a>New Arrivales</a></li>
                        <div className=' w-12 absolute bg-blue-500 -top-6  left-64 text-base flex justify-center items-center  font-bold text-fuchsia-100 px-1 '>20% </div>
                        <li className='px-4 nav-list-item'><a>Contact us</a></li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className='text-2xl lg:flex xl:flex md:hidden sm:hidden'>
                        <VscAccount/>
                    </div>
                    <div className=' text-2xl mx-14'>
                        <BsHandbag/>
                    </div>
                    <div className='text-2xl lg:hidden xl:hidden md:flex sm:flex'>
                        <VscThreeBars onClick={navLoad}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
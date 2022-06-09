import Image from 'next/image'

import { BsHandbag } from "react-icons/bs";

const Header  = ()=>{
    return(
        <header className="py-4 bg-white drop-shadow-lg border-b-1 border-b-slate-700">
            <div className='xl:container xl:mx-auto  flex my-3 justify-between'>
                <div className="text-3xl font-bold flex" >
                    <h3 className=' text-sky-400 tracking-widest'>Fashion<span className='text-red-600'>Shop</span></h3>
                </div>
                <div className='text-xl'>
                    <ul className='flex cursor-pointer relative'>
                        <li className='px-4 font-bold'><a>Home</a></li>
                        <li className='px-4'><a>Shop</a></li>
                        <li className='px-4'><a>New Arrivales</a></li>
                        <div className=' w-12 absolute bg-blue-500 -top-6  left-64 text-base flex justify-center items-center  font-bold text-fuchsia-100 px-1 '>20% </div>
                        <li className='px-4'><a>Contact us</a></li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className=' text-blue-50  '>
                        <button className=' bg-blue-500 border-none outline-none rounded-2xl px-3 h-10 relative -top-2 text-sm'>Login/Register</button>
                    </div>
                    <div className=' text-2xl ml-14'>
                        <BsHandbag/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
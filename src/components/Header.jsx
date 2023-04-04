import React from 'react'
import MenuItem from './MenuItem'
import{ImHome} from 'react-icons/im';
import{ImInfo} from 'react-icons/im';
import Link from 'next/link';
export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-4'>
        
        <div className="flex">
            <MenuItem title="HOME" address="/" Icon={ImHome}/>
            <MenuItem title="ABOUT" address="/about" Icon={ImInfo}/>
        </div>
        <div className="text-2xl">
            <Link href="/">
                <h2><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
            </Link>
        </div>

    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import {BsInstagram} from 'react-icons/bs'

export default function About() {
  return (
    <div className='max-w-6xl mx-auto space-y-4 p-4'>
        <h1 className='text-2xl font-medium text-amber-500'>About</h1>
        <p>Welcome to our movie database website! We are a team of passionate movie enthusiasts who have come together to create a one-stop destination for all your movie related needs.</p>
        <p>
            Our website is designed to provide you with a comprehensive database of movies from all around the world,along with the latest news, reviews and trailers.
        </p>
        <p>
            In addition to our extensive movie database, we also offer a platform for movie lovers to connect and share their thoughts on the latest releases. Our community section includes a forum where you can discuss your favorite films with like-minded individuals and read reviews and rating form other users.
        </p>
        <p>Alok Dubey</p>
        <div className='flex'>
          <img src="instagram.svg" alt="instagram" className='mr-2'/>
        <p>@alok_____dubey</p>
        <Link href="https://www.instagram.com/alok_____dubey/?hl=en">
        <button className='ml-4 hover:text-amber-600'>Connect</button>
       </Link>
        </div>

        <div className='flex'>
          <img src="linkedin.svg" alt="linkedin" className='mr-2'/>
        <p>@alok_____dubey</p>
        <Link href="https://www.linkedin.com/in/alok-kumar-dubey-44346325a">
        <button className='ml-4 hover:text-amber-600' >Connect</button>
       </Link>
        </div>

    </div>
  )
}

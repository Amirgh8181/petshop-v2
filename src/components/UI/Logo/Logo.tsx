import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blackLogo from "@/public/images/logo/logo.png"

const Logo = () => {
    return (
        <Link href={"/"} className="btn btn-ghost !px-0 text-xl flex justify-center items-center md:w-[15vmax] sm:w-[20vmax] w-[23vmax]">
            <Image src={blackLogo} alt='logo' width={blackLogo.width} height={blackLogo.height} className='block w-full h-full object-contain' />
        </Link>
    )
}

export default Logo
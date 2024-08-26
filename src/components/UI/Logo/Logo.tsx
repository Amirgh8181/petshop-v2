import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blackLogo from "@/public/images/logo/logo.png"
import StaticImageCopm from '../StaticImage'

const Logo = () => {
    return (
        <Link href={"/"} className="btn btn-ghost p-1 xl:w-[12vmax] md:w-[15vmax]  w-[23vmax] h-full">
            <StaticImageCopm img={blackLogo} imgAlt='logo' imgClass='w-full object-contain' />
        </Link>
    )
}

export default Logo
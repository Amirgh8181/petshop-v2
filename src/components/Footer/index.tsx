import React from 'react'
import Logo from '../UI/Logo/Logo'
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { TiSocialTwitter } from 'react-icons/ti'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations("Footer")
    const icons = [
        { icon: <FaPhone />, style: "text-2xl hover:text-green-500 cursor-pointer", tooltipMassage: t("phone") },
        { icon: <TiSocialTwitter />, style: "text-3xl hover:text-blue-500 cursor-pointer", tooltipMassage: t("twitter") },
        { icon: <FaInstagram />, style: "text-3xl hover:text-red-500 cursor-pointer", tooltipMassage: t("instagram") },
        { icon: <FaWhatsapp />, style: "text-3xl hover:text-green-400 cursor-pointer", tooltipMassage: t("whatsapp") },
    ]
    return (
        <footer className="footer bg-primary place-items-center md:place-items-start items-center p-4">
            <aside className="grid-flow-col items-center text-white">
                <div className='flex items-center'>
                    <Logo />
                    <div className="divider divider-horizontal" />
                    <div className=''>
                        <div className='flex'>
                            <p>{t("Support")}</p>
                            <Link href={"/#aboutUs"} className='link mx-2'>{t("About")}</Link>
                        </div>
                        <div className=''>2023 Dev Ventures Project</div>
                    </div>
                </div>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-8 text-white">
                {icons.map((item, index) =>
                    <div className={`${item.style} tooltip transition-colors duration-300`} key={index} data-tip={item.tooltipMassage}>{item.icon}</div>
                )}
            </nav>
        </footer>
    )
}

export default Footer
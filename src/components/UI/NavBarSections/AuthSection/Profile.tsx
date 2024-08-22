"use client"
import { BiLogIn } from 'react-icons/bi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { signOut } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { IoPersonSharp } from "react-icons/io5";

const Profile = () => {
    const t = useTranslations("Profile")
    return (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="avatar placeholder">
                        <div className="navbarBtn">
                            <span className="navIconSize"><IoPersonSharp /></span>
                        </div>
                    </div>


                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow space-y-4 bg-primary glass">
                        <li>
                            <Link href={'/FavoriteList'} className="flex items-center space-x-2 hocTextSize3 text-nowrap">
                                <span> <FaHeart /> </span>
                                <span>{t("favorite")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Cart'} className="flex items-center space-x-2 hocTextSize3 text-nowrap">
                                <span> <MdOutlineShoppingCart /> </span>
                                <span>{t("cart")}</span>
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center space-x-2 hocTextSize3 text-nowrap text-red-500" onClick={() => signOut()}>
                                <span><BiLogIn /></span>
                                <span>{t("logout")}</span>
                            </div>
                        </li>
                    </ul>
                </div >


    )
}

export default Profile
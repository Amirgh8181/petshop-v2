import { BiLogIn } from 'react-icons/bi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { signOut } from 'next-auth/react'
import { authSectionProps } from '.'
import { useTranslations } from 'next-intl'

const Profile = ({ isAuth }: { isAuth: authSectionProps }) => {
    const t=useTranslations("Profile")
    return (
        <>
            {isAuth &&
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="avatar placeholder">
                        <div className="navbarBtn !p-4">
                            <span className="text-3xl">{isAuth.user.username.split("")[0]}</span>
                        </div>
                    </div>


                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href={'/FavoriteList'} className="flex items-center space-x-2">
                                <span className="text-2xl"> <FaHeart /> </span>
                                <span>{t("favorite")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Cart'} className="flex items-center space-x-2">
                                <span className="text-2xl"> <MdOutlineShoppingCart /> </span>
                                <span>{t("cart")}</span>
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center space-x-2" onClick={() => signOut()}>
                                <span className="text-2xl"><BiLogIn /></span>
                                <span className="font-bold">{t("logout")}</span>
                            </div>
                        </li>
                    </ul>
                </div >
            }
        </>

    )
}

export default Profile
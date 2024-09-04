
"use client"
import { useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import style from "./login.module.css"
import { UseFormRegister } from 'react-hook-form';
import { useLocale, useTranslations } from 'next-intl';


const PasswordInput = ({ reg }: { reg: UseFormRegister<any>; }) => {
    const t=useTranslations("Auth.placeholder")
    const local=useLocale()
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className='w-full relative flex items-center'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t("pass")}
                    className={style.inputStyle}
                    {...reg("password")}
                />
                <span
                    onClick={togglePasswordVisibility}
                    className={`absolute ${local==="fa"?'left-3':"right-3"} cursor-pointer navIconSize`}
                >
                    {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                </span>
            </div>


        </div>
    );
};

export default PasswordInput;

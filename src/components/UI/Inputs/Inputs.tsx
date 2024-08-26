"use client"
import { AuthInputType } from '@/root/types'
import React from 'react'
import InputLabel from './InputLabel'
import styles from "./login.module.css"
import InputErr from './InputErr'
import { UseFormRegister } from 'react-hook-form'
import PasswordInput from './PasswordInp'
import { useLocale, useTranslations } from 'next-intl'

interface LoginInputType extends AuthInputType {
    registerVal: "email" | "password" | "name",
}


export interface ChildComponentProps {
    register: UseFormRegister<any>;
    inputCreateData: LoginInputType,
    placeholder?: string
}

const AuthInputs = ({ inputCreateData, register, placeholder }: ChildComponentProps) => {
    const t = useTranslations("Auth.placeholder")
    const local = useLocale()
    return (
        <label className="form-control w-full" key={inputCreateData.key}>

            <InputLabel text={inputCreateData.key}>
                {inputCreateData.icon}
            </InputLabel>
            {inputCreateData.type === "password" ?
                <PasswordInput
                    reg={register}
                />
                :
                <input
                    className={styles.inputStyle}
                    type={inputCreateData.type}
                    {...register(inputCreateData.registerVal)}
                    placeholder={t(placeholder)}
                />
            }
            {inputCreateData.err &&
                <InputErr err={inputCreateData.err} />
            }
        </label>

    )
}

export default AuthInputs
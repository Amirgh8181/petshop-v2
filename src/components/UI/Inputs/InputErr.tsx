"use client"
import React from 'react'
import Styles from './login.module.css'
<<<<<<< HEAD
import { useTranslations } from 'next-intl'
const InputErr = ({ err }: { err: string }) => {
    const t=useTranslations("Auth.inpErr")
    return (
        <span className={Styles.authErr}>
            {t(err)}
=======
const InputErr = ({ err }: { err: string }) => {
    return (
        <span className={Styles.authErr}>
            {err}
>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
        </span>
    )
}

export default InputErr
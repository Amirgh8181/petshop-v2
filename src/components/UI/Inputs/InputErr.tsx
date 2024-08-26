"use client"
import React from 'react'
import Styles from './login.module.css'
import { useTranslations } from 'next-intl'
const InputErr = ({ err }: { err: string }) => {
    const t=useTranslations("Auth.inpErr")
    return (
        <span className={Styles.authErr}>
            {t(err)}
        </span>
    )
}

export default InputErr
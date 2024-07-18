import React from 'react'
import Styles from './login.module.css'
import { useTranslations } from 'next-intl'

const InputLabel = ({ children, text }: { children: React.ReactNode, text: string }) => {
  const t = useTranslations("Auth.inputs")

  return (
    <div className={Styles.authLabel}>
      <div className={Styles.authLabelIcon}>{children}</div>
      <div>{t(text)}</div>
    </div>
  )
}

export default InputLabel
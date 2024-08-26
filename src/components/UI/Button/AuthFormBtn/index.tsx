"use client"
import { useTranslations } from 'next-intl'
import React from 'react'

const AuthBtn = ({ isLoading }: { isLoading: boolean }) => {
    const t=useTranslations("Auth")
    return (
        <button
            disabled={isLoading}
            type="submit"
            className="btn md:text-xl h-12 bg-primary w-full rounded-box">
            {isLoading ? t("pending") : t("submit")}
        </button>

    )
}

export default AuthBtn
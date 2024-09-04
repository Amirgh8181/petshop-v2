"use client"
import { useCategType } from '@/src/stores/Category/useCategType'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
const PreviewSectionsHeader = ({ previewSectionName, previewLink, type }: { previewSectionName: string, previewLink: string, type?: string }) => {
    const t = useTranslations("Index.Shop")
    const { setType } = useCategType()
    const changeType = () => {
        type && setType(type)
    }
    return (
        <div className='flex items-center justify-between md:px-20 px-4'>
            <h2>{previewSectionName}</h2>
            <div onClick={changeType}>
                <Link href={previewLink} aria-label='redirect to other section'
                    className='text-sm sm:text-base md:text-xl hover:text-primary cursor-pointer font-semibold'>
                    {t("more")}
                </Link>
            </div>
        </div>
    )
}
export default PreviewSectionsHeader
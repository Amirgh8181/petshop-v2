import Link from 'next/link'
import React from 'react'

const PreviewSectionsHeader = ({ previewSectionName, previewLink }: { previewSectionName: string, previewLink: string }) => {
    return (
        <div className='flex items-center justify-between md:px-20 px-4'>
            <h2>{previewSectionName}</h2>
            <Link href={previewLink} aria-label='redirect to other section'
                className='btn text-xl hover:text-primary cursor-pointer font-semibold !px-2'>
                More
            </Link>
        </div>
    )
}

export default PreviewSectionsHeader
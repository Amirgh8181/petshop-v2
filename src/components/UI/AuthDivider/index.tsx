"use client"
import Link from 'next/link'

interface AuthDividerProps {
    linkHref: string,
    question: string,
    authType: string
}

const AuthDivider = ({ linkHref, question, authType }: AuthDividerProps) => {
    return (
        <>
            <div className="divider divider-primary" />
            <div className='mt-4 flex hocTextSize'>
                <span>{question}</span>
                <Link href={linkHref} className="text-blue-600 link mx-2">{authType}</Link>
            </div>
        </>
    )
}

export default AuthDivider
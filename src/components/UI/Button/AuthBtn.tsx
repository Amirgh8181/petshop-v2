import React from 'react'

const AuthBtn = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <button
            disabled={isLoading}
            type="submit"
            className="btn md:text-xl h-12 bg-primary w-full rounded-box">
            {isLoading ? "pending" : "Submit"}
        </button>

    )
}

export default AuthBtn
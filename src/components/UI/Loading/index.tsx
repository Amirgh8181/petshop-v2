import React from 'react'

const LoadingUi = ({ isLoading }: { isLoading: boolean }) => {
    
    return (
        <>
            {
                isLoading &&
                <div className='w-full h-screen fixed inset-0 z-40 bg-primary/50 flex flex-col justify-center items-center space-y-5'>
                    <span className="loading loading-spinner loading-lg text-white scale-150"></span>
                    <span className='text-white'>please wait ...</span>
                </div>
            }
        </>
    )
}

export default LoadingUi
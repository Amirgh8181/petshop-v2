'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const NprogressProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#8b5cf6"
                options={{ showSpinner: true }}
                shallowRouting
                
            />
        </>
    );
};

export default NprogressProviders;
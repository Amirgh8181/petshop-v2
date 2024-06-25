'use client';
 
import {useTranslations} from 'next-intl';
 
export default function Error({error, reset}:{
    error: Error & { digest?: string }
    reset: () => void
  }) {
  const t = useTranslations('Error');
 
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1>err</h1>
      <button onClick={reset}>retry</button>
    </div>
  );
}
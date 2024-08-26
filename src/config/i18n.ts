import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
export const i18n ={
  defaultLocale: 'en',
  locales: ['en', 'fa']
}as const;
export type Locale=(typeof i18n)['locales'][number]

export default getRequestConfig(async ({locale}) => {
  if (!i18n.locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
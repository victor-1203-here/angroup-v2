import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLenis } from 'lenis/react';
import { cn } from '@/configs/cn';
import PageTransition from '@/layouts/PageTransition';
import { gillSans } from '@/lib/fonts';
import '@/styles/globals.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    const pathname = usePathname();

    const isHomePage = pathname === '/';

    useEffect(() => {
        const initGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);
        };

        initGSAP();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ReactLenis root>
                <DefaultSeo
                    title={undefined}
                    defaultTitle="An Group"
                    titleTemplate={`%s | An Group`}
                    description="Bunker Fuel Malaysia"
                    additionalLinkTags={[
                        {
                            rel: 'icon',
                            href: '/images/icon.svg?',
                        },
                    ]}
                />
                <NextNProgress color={'rgb(var(--color-primary))'} />
                <div className={cn(gillSans.variable, 'font-gill flex min-h-screen flex-col bg-[#F4F4F4]')}>
                    <main className={cn('flex-grow', !isHomePage && 'mt-14 md:mt-20')}>
                        <PageTransition>
                            <Component {...pageProps} />
                        </PageTransition>
                    </main>
                </div>
            </ReactLenis>
        </QueryClientProvider>
    );
}

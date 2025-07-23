import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Montserrat, Open_Sans, Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLenis } from 'lenis/react';
import { cn } from '@/configs/cn';
import PageTransition from '@/layouts/PageTransition';
import '@/styles/globals.css';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const openSans = Open_Sans({
    variable: '--font-open-sans',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

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
                <div
                    className={cn(
                        montserrat.variable,
                        poppins.variable,
                        openSans.variable,
                        'flex min-h-screen flex-col bg-[#F4F4F4] font-montserrat',
                    )}
                >
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

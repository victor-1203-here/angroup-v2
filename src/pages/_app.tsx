import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLenis } from 'lenis/react';
import { cn } from '@/configs/cn';
import PageTransition from '@/layouts/PageTransition';
import { gillSans } from '@/lib/fonts';
import '@/styles/globals.css';
import Footer from '../components/footer';
import Header from '../components/header';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {

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
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
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
                <div className={cn(gillSans.variable, 'font-gill')}>
                    <Header />
                    <main>
                        <PageTransition>
                            <Component {...pageProps} />
                        </PageTransition>
                    </main>
                    <Footer />
                    <CookieConsent
                        location="bottom"
                        buttonText="Accept All"
                        cookieName="siteCookieConsent"
                        style={{ background: '#2B373B' }}
                        buttonStyle={{
                            color: '#fff',
                            background: 'linear-gradient(180deg, #102a00, #00cca5)',
                            fontSize: '13px',
                            padding: '8px 24px',
                            borderRadius: '5px',
                            border: 'none',
                            minWidth: '120px',
                        }}
                        declineButtonStyle={{
                            color: '#fff',
                            background: 'linear-gradient(180deg, #892520, #c0392b)',
                            fontSize: '13px',
                            padding: '8px 24px',
                            borderRadius: '5px',
                            border: 'none',
                            minWidth: '120px',
                        }}
                        enableDeclineButton
                        declineButtonText="Decline"
                    >
                        This website uses cookies to enhance your experience.{' '}
                    </CookieConsent>
                </div>
            </ReactLenis>
        </QueryClientProvider>
    );
}

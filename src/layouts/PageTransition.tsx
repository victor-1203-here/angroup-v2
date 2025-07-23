import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const transitionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = transitionRef.current;
        if (!el) return;

        // Initial animation when component mounts
        gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1 });

        // On unmount: fade out
        return () => {
            gsap.to(el, { opacity: 0, duration: 1 });
        };
    }, [router.pathname]);

    return (
        <div key={router.pathname} ref={transitionRef}>
            {children}
        </div>
    );
}

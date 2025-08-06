import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Discover from '../components/discover';

const slides = [
    {
        title: 'Built on Purpose',
        description: 'Delivering reliable petroleum and chemical solutions across Asia and Europe.',
        image: '/images/home/photo_001.jpg',
        link: '/services',
    },
    {
        title: 'Engineered for Excellence',
        description: 'Driven by precision, built on integrity — we’re here to move industries forward.',
        image: '/images/home/photo_002.jpg',
        link: '/services',
    },
    {
        title: 'One Partner. Total Solutions',
        description: 'From fuel to logistics, we’re your one-stop petroleum service provider.',
        image: '/images/home/photo_003.jpg',
        link: '/services',
    },
    {
        title: 'Where Safety Meets Scale',
        description: 'Extensive network, proven SOPs, and uncompromised safety standards.',
        image: '/images/home/photo_004.jpg',
        link: '/services',
    },
    {
        title: 'Your Energy. Delivered',
        description: 'Wide coverage, timely transportation, and responsive customer support.',
        image: '/images/home/photo_005.jpg',
        link: '/services',
    },
];

const highlights = [
    {
        title: 'Expanding Regional & Global Reach',
        description: (
            <>
                An Group operates across key markets in Asia and Europe, including Malaysia, China, Laos, and the Netherlands. With a growing
                international presence and established logistics hubs in Penang, Port Klang, Bukit Kayu Hitam, and Johor, we ensure that clients
                receive dependable access to petroleum and chemical products — no matter where they operate.
            </>
        ),
        imageSrc: '/images/home/photo_012.jpg',
    },
    {
        title: 'Committed to Energy Transition',
        description: (
            <>
                As the global energy landscape shifts toward sustainability, An Group is committed to adapting responsibly. We are actively
                reinforcing our operations to align with evolving environmental goals, exploring avenues in renewable energy, reducing emissions, and
                investing in cleaner, more efficient solutions for long-term impact.
            </>
        ),
        imageSrc: '/images/home/photo_013.jpg',
    },
    {
        title: 'Strong Logistics & Storage Capabilities',
        description: (
            <>
                Our operations are powered by a fleet of 63 well-maintained tankersand inland transport solutions designed to handle varying volume
                needs. Combined with a total storage capacity of 5 million litres across our strategic locations, An Group ensures efficient, timely,
                and safe delivery to meet even the most demanding supply requirements.
            </>
        ),
        imageSrc: '/images/home/photo_014.jpg',
    },
    {
        title: 'Recognized Industry Leader',
        description: (
            <>
                An Group’s consistent excellence has earned us numerous national and regional accolades from industry giants like Petronas. From Top
                Volume Performer to Regional Sales Champion, our awards reflect our dedication to operational excellence, trusted client
                relationships, and high-performance delivery across multiple markets.
            </>
        ),
        imageSrc: '/images/home/photo_015.jpg',
    },
    {
        title: 'Committed to Energy Transition',
        description: (
            <>
                As the global energy landscape shifts toward sustainability, An Group is committed to adapting responsibly. We are actively
                reinforcing our operations to align with evolving environmental goals, exploring avenues in renewable energy, reducing emissions, and
                investing in cleaner, more efficient solutions for long-term impact.
            </>
        ),
        imageSrc: '/images/home/photo_016.jpg',
    },
];

const AUTOPLAY_TIME = 5000;

export default function MySwiper() {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [expanded, setExpanded] = useState(0);
    const displayImage = expanded >= 0 ? highlights[expanded].imageSrc : highlights[0].imageSrc;
    const displayTitle = expanded >= 0 ? highlights[expanded].title : highlights[0].title;

    useEffect(() => {
        let rafId: number;
        let startTs: number | null = null;
        if (!isHover) {
            const animate = (ts: number) => {
                if (startTs == null) startTs = ts;
                const elapsed = ts - startTs;
                setProgress(Math.min(elapsed / AUTOPLAY_TIME, 1));
                if (elapsed < AUTOPLAY_TIME) {
                    rafId = requestAnimationFrame(animate);
                }
            };
            setProgress(0);
            rafId = requestAnimationFrame(animate);
        }
        return () => {
            cancelAnimationFrame(rafId);
        };
    }, [activeIdx, isHover]);

    // Swiper event listeners
    const handleSwiper = (swiper: SwiperClass) => {
        swiperRef.current = swiper;
        swiper.on('slideChange', () => setActiveIdx(swiper.realIndex));
        swiper.on('autoplay', () => setActiveIdx(swiper.realIndex));
        setActiveIdx(swiper.realIndex);
    };

    const onMouseEnter = () => {
        setIsHover(true);
        swiperRef.current?.autoplay?.stop();
    };
    const onMouseLeave = () => {
        setIsHover(false);
        swiperRef.current?.autoplay?.start();
    };

    return (
        <>
            <section className="relative h-screen w-full">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: AUTOPLAY_TIME, disableOnInteraction: false }}
                    loop
                    onSwiper={handleSwiper}
                    className="h-screen"
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative h-screen w-full">
                                <img src={slide.image} alt={slide.title} className="h-screen w-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-20" />
                                <div className="absolute left-0 top-0 hidden h-full max-w-[35vw] flex-col justify-center p-12 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] md:ml-8 md:flex">
                                    <h2 className="mb-4 text-4xl font-bold text-white">{slide.title}</h2>
                                    <p className="mb-6 text-lg text-white">{slide.description}</p>
                                    <a href={slide.link} className="mb-8 flex items-center gap-2 font-semibold text-white underline">
                                        <span>Read More</span>
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="absolute left-0 top-0 flex h-full max-w-[85vw] flex-col justify-center p-6 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] md:hidden">
                                    <h2 className="mb-2 text-2xl font-bold text-white">{slide.title}</h2>
                                    <p className="mb-4 text-white">{slide.description}</p>
                                    <a href={slide.link} className="mb-16 flex items-center gap-2 font-semibold text-white underline">
                                        <span>Read More</span>
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="absolute bottom-6 left-6 mb-8 flex w-[calc(100%-3rem)] items-center justify-between text-white md:hidden">
                                    <span className="ml-4 font-medium">{slide.title}</span>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            type="button"
                                            aria-label="Previous slide"
                                            onClick={() => swiperRef.current?.slidePrev()}
                                            className="custom-prev-button rounded-full p-2 [background:linear-gradient(90deg,#102a00,#00cca5)] focus:outline-none"
                                        >
                                            <FaArrowLeft />
                                        </button>
                                        <span className="text-lg font-bold">
                                            {idx + 1} / {slides.length}
                                        </span>
                                        <button
                                            type="button"
                                            aria-label="Next slide"
                                            onClick={() => swiperRef.current?.slideNext()}
                                            className="custom-next-button rounded-full p-2 [background:linear-gradient(270deg,#102a00,#00cca5)] focus:outline-none"
                                        >
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="max-w-9xl absolute bottom-8 left-1/2 z-10 hidden w-full -translate-x-1/2 md:flex">
                    <div
                        className="flex w-full justify-center gap-32 overflow-x-auto whitespace-nowrap"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {slides.map((slide, i) => {
                            const isActive = activeIdx === i;
                            return (
                                <button
                                    key={slide.title}
                                    type="button"
                                    className="group relative min-w-0 max-w-[240px] whitespace-nowrap px-1 py-2 text-center text-[1.08rem] font-medium leading-[1.2] focus:outline-none"
                                    aria-current={isActive}
                                    onClick={() => {
                                        swiperRef.current?.slideToLoop(i);
                                        setActiveIdx(i);
                                    }}
                                >
                                    <span
                                        className={`relative z-10 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-[#00cca5] to-[#7fc995] bg-clip-text text-transparent transition-all duration-200'
                                                : 'text-white'
                                        } `}
                                        style={
                                            isActive
                                                ? {
                                                      backgroundImage: `linear-gradient(90deg, #00cca5 ${progress * 100}%, #fff ${progress * 100}%)`,
                                                      backgroundSize: '100% 100%',
                                                      backgroundRepeat: 'no-repeat',
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent',
                                                  }
                                                : undefined
                                        }
                                    >
                                        {slide.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[96rem] px-8 py-12">
                <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold">Our Journey of Growth</h2>
                        <p className="text-gray-700 md:max-w-xl">
                            As the world moves toward cleaner energy, An Group is strengthening its foundation to meet changing industry needs, with a
                            focus on sustainability and excellence.
                        </p>
                    </div>
                    <a
                        href="/honor"
                        className="flex items-center gap-2 self-start rounded-xl bg-gradient-to-b from-[#102a00] to-[#00cca5] px-6 py-2 font-semibold text-white shadow-lg md:self-center"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        View all
                    </a>
                </div>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="group relative flex-1 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
                        <img src="/images/home/photo_006.jpg" alt="Strengthening the Core" className="h-96 w-full object-cover md:h-96" />
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full rounded-2xl bg-gradient-to-t from-[#102a00]/90 to-[#00cca5] px-16 py-6 text-center opacity-90 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                            <h3 className="pb-2 text-lg font-semibold text-white">Strengthening the Core</h3>
                            <p className="text-sm text-white">
                                Enhancing operations with greater safety and efficiency while lowering emissions to build a solid, future-ready
                                foundation.
                            </p>
                        </div>
                    </div>
                    <div className="group relative flex-1 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
                        <img src="/images/home/photo_007.jpg" alt="Capturing New Growth" className="h-96 w-full object-cover md:h-96" />
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full rounded-2xl bg-gradient-to-t from-[#102a00]/90 to-[#00cca5] px-16 py-6 text-center opacity-90 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                            <h3 className="pb-2 text-lg font-semibold text-white">Capturing New Growth</h3>
                            <p className="text-sm text-white">
                                Expanding into renewables, specialty chemicals, hydrogen, and carbon solutions to meet evolving energy needs.
                            </p>
                        </div>
                    </div>
                    <div className="group relative flex-1 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
                        <img src="/images/home/photo_008.jpg" alt="Achieving Net Zero" className="h-96 w-full object-cover md:h-96" />
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full rounded-2xl bg-gradient-to-t from-[#102a00]/90 to-[#00cca5] px-16 py-6 text-center opacity-90 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                            <h3 className="pb-2 text-lg font-semibold text-white">Achieving Net Zero</h3>
                            <p className="text-sm text-white">
                                Committed to a carbon-neutral future by 2050, with ongoing efforts to reduce emissions across all operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-4 py-14">
                <h2 className="mb-2 text-center text-2xl font-bold text-[#38947e] md:mb-4 md:text-3xl">
                    Leading the Future of
                    <br className="md:hidden" /> Energy Distribution
                </h2>
                <p className="mb-10 text-center text-sm md:text-lg">
                    AN GROUP delivers fuel and chemicals across Asia and Europe
                    <br className="md:hidden" />
                    with a strong fleet and strategic storage hubs.
                </p>

                <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-lg">
                    <div className="relative">
                        <img src="/images/home/photo_009.jpg" alt="Vision" className="h-56 w-full object-cover" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-row items-center justify-center gap-10 p-8 md:mx-12 md:justify-between md:px-12">
                            <h3 className="text-3xl font-semibold text-white md:text-5xl">Vision</h3>
                            <p className="max-w-xs text-white md:text-lg">
                                To lead as East Asia’s top petroleum provider, growing worldwide while delivering quality, building lasting
                                partnerships, and protecting our environment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-lg">
                    <div className="relative">
                        <img src="/images/home/photo_010.jpg" alt="Mission" className="h-56 w-full object-cover" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-row items-center justify-center gap-10 p-8 md:mx-12 md:justify-between md:px-12">
                            <h3 className="text-3xl font-semibold text-white md:text-5xl">Mission</h3>
                            <p className="max-w-xs text-white md:text-lg">
                                To bridge energy needs with eco-efficient solutions through innovation, education, and sustainable practices.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-[2.5rem] shadow-lg">
                    <div className="relative">
                        <img src="/images/home/photo_011.jpg" alt="Values" className="h-56 w-full object-cover" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-row items-center justify-center gap-10 p-8 md:mx-12 md:justify-between md:px-12">
                            <h3 className="text-3xl font-semibold text-white md:text-5xl">Values</h3>
                            <p className="max-w-xs text-white md:text-lg">
                                We deliver excellence through safe operations, sustainable energy solutions, and trustworthy support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[96rem] px-4 py-14">
                <h2 className="mb-2 text-3xl font-bold">Highlights</h2>
                <p className="mb-8 text-lg text-gray-700">Reliable Supply, Global Reach</p>

                <div className="flex flex-col items-start gap-8 md:flex-row">
                    <div className="w-full flex-shrink-0 md:w-1/2 lg:w-[38%]">
                        <div className="h-72 overflow-hidden rounded-3xl shadow-lg md:h-[32rem]">
                            <div className="relative h-full">
                                <img src={displayImage} alt={displayTitle} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1 md:min-h-[650px]">
                        {highlights.map((item, idx) => {
                            const isExpanded = expanded === idx;

                            return (
                                <div key={item.title} className="mb-8">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-2xl hover:bg-gray-50 focus:outline-none"
                                        onClick={() => setExpanded(isExpanded ? -1 : idx)}
                                        aria-expanded={isExpanded}
                                        aria-label="Tab Opener"
                                        aria-controls={`section-content-${idx}`}
                                    >
                                        <span className={isExpanded ? 'text-[#38947e]' : ''}>{item.title}</span>
                                        {isExpanded ? (
                                            <FaMinusCircle className="text-xl text-[#38947e] transition-transform duration-300" />
                                        ) : (
                                            <FaPlusCircle className="text-xl text-[#38947e] transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        id={`section-content-${idx}`}
                                        className={`overflow-hidden px-2 pb-4 text-base text-gray-800 transition-[max-height,opacity,margin] duration-300 ease-in-out ${
                                            isExpanded ? 'mt-2 max-h-[1000px] opacity-100' : 'mt-0 max-h-0 opacity-0'
                                        }`}
                                        aria-hidden={!isExpanded}
                                    >
                                        <div className="mb-2">{item.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Discover />
        </>
    );
}

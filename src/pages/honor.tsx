import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const honorsData = [
    {
        year: '2015',
        awards: [
            {
                title: 'National Sales Award',
                achievement: '2nd Runner Up - Top Volume Performer',
                img: '/images/honor/2015/T1.jpg',
            },
            {
                title: 'National Sales Award',
                achievement: 'Champion - Top Volume Performer',
                img: '/images/honor/2015/T2.jpg',
            },
        ],
    },
    {
        year: '2016',
        awards: [
            {
                title: 'Regional Sales Award',
                achievement: 'Champion - Top Volume Performer',
                img: '/images/honor/2016/T1.jpg',
            },
            {
                title: 'National Sales Award',
                achievement: '1st Runner Up - Top Volume Performer',
                img: '/images/honor/2016/T2.jpg',
            },
        ],
    },
    {
        year: '2017',
        awards: [
            {
                title: 'Regional Sales Award',
                achievement: 'Champion - Top Volume Performer',
                img: '/images/honor/2017/T1.jpg',
            },
            {
                title: 'National Sales Award',
                achievement: '2nd Runner Up - Top Volume Performer',
                img: '/images/honor/2017/T2.jpg',
            },
        ],
    },
    {
        year: '2020',
        awards: [
            {
                title: 'Commercial Channel Partner Submit',
                achievement: 'Champion - Nothern Region 2020',
                img: '/images/honor/2020/T1.jpg',
            },
            {
                title: 'Commercial Channel Partner Submit',
                achievement: '2nd Runner Up - National Award 2020',
                img: '/images/honor/2020/T2.jpg',
            },
        ],
    },
    {
        year: '2024',
        awards: [
            {
                title: 'Commercial Business Partner Excellence Award (CBPEA)',
                achievement: 'Champion - Top 3 Northern Region',
                img: '/images/honor/2024/T1.jpg',
            },
        ],
    },
];

const licenses = [
    { img: '/images/honor/pda_01.png' },
    { img: '/images/honor/pda_02.png' },
    { img: '/images/honor/pda_03.png' },
    { img: '/images/honor/pda_04.png' },
    { img: '/images/honor/pda_05.png' },
];

const locations = [
    { name: 'Netherlands', left: '49%', top: '46%' },
    { name: 'Europe', left: '55%', top: '49%' },
    { name: 'Myanmar', left: '75%', top: '59%' },
    { name: 'Thailand', left: '75%', top: '62%' },
    { name: 'Laos', left: '77%', top: '60%' },
    { name: 'Cambodia', left: '76%', top: '61%' },
    { name: 'Vietnam', left: '77%', top: '62%' },
    { name: 'Malaysia', left: '76%', top: '64%' },
    { name: 'Singapore', left: '76%', top: '65%' },
    { name: 'Indonesia', left: '79%', top: '66%' },
    { name: 'Australia', left: '85%', top: '74%' },
    { name: 'China', left: '78%', top: '55%' },
];

export default function Honor() {
    const [activeTab, setActiveTab] = React.useState<'honors' | 'licenses'>('honors');
    const [previewSrc, setPreviewSrc] = React.useState<string | null>(null);
    const [showModal, setShowModal] = React.useState(false);

    // put inside Honor component
    const closeWithAnim = React.useCallback(() => {
        setShowModal(false);
        setTimeout(() => setPreviewSrc(null), 300); // match duration-300
    }, []);


    React.useEffect(() => {
    if (!previewSrc) return;

    const handleClose = () => closeWithAnim();

    // close on scroll, keydown, or touch
    window.addEventListener("scroll", handleClose);
    window.addEventListener("keydown", handleClose);
    window.addEventListener("touchstart", handleClose);

    return () => {
        window.removeEventListener("scroll", handleClose);
        window.removeEventListener("keydown", handleClose);
        window.removeEventListener("touchstart", handleClose);
    };
    }, [previewSrc, closeWithAnim]);

    return (
        <>
            <Head>
                <title>Honors & Licences - AN Group</title>
                <meta name="description" content="Learn more about AN Group, our values, mission, and team." />
            </Head>

            <section className="relative flex h-screen w-full flex-col">
                <Image
                    src="/images/honor/main.jpg"
                    alt="About Us Story"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                    }}
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
                {/* <div className="absolute bottom-4 left-4 z-10 flex max-w-md flex-col p-4 md:p-8">
                    <p className="mb-3 text-base font-medium text-white sm:text-lg md:text-xl">Honors & Licences</p>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl">Honors</h1>
                </div> */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-left md:items-start">
                    <div className="px-6 py-10 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] md:mx-12 md:p-8 md:px-8">
                        <h1 className="mb-4 text-2xl font-semibold text-white md:text-4xl">Honors & Licences</h1>
                        <p className="mb-6 text-xl text-white md:text-4xl">Honors</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#64c4ae] px-4 py-12 md:px-10">
                <div className="mx-auto flex max-w-[96rem] flex-col items-start md:flex-row md:gap-24">
                    <div className="w-full md:w-1/2">
                        <div className="mb-6 flex justify-center">
                            <button
                                className={`rounded-bl-md rounded-tl-md px-8 py-2 font-semibold shadow-md ${
                                    activeTab === 'honors' ? 'bg-white text-green-700' : 'bg-[#38947e] text-white'
                                }`}
                                onClick={() => setActiveTab('honors')}
                            >
                                Honors
                            </button>
                            <button
                                className={`ml-[-4px] rounded-br-md rounded-tr-md px-8 py-2 font-semibold shadow-md ${
                                    activeTab === 'licenses' ? 'bg-white text-green-700' : 'bg-[#38947e] text-white'
                                }`}
                                onClick={() => setActiveTab('licenses')}
                            >
                                Licenses
                            </button>
                        </div>

                        <div className="relative">
                            {activeTab === 'licenses' && <div className="absolute inset-0 rounded-3xl bg-white/70"></div>}
                            <div className={`relative z-10 px-6 py-6 md:px-0 ${activeTab === 'licenses' ? 'md:mt-16' : ''}`}>
                                {activeTab === 'honors' && (
                                    <>
                                        <div className="hidden overflow-x-auto md:block">
                                            <table className="w-full text-left text-xs md:text-base">
                                                <thead>
                                                    <tr>
                                                        <th className="py-2 pr-4 text-white">Year</th>
                                                        <th className="py-2 pr-4 text-white">Award</th>
                                                        <th className="py-2 text-white">Achievement Level</th>
                                                    </tr>
                                                </thead>
                                                {honorsData.map(({ year, awards }) => (
                                                    <tbody key={year} className="border-b-2 border-green-700">
                                                        {awards.map((award, idx) => (
                                                            <tr key={year + idx}>
                                                                <td className="py-1 pr-4 text-white">{idx === 0 ? year : ''}</td>
                                                                <td className="py-1 pr-4 text-white">
                                                                    {award.title}
                                                                </td>
                                                                <td className="py-1 text-white">
                                                                    {award.achievement}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                ))}
                                            </table>
                                        </div>

                                        <div className="block md:hidden">
                                            {honorsData.map(({ year, awards }) => (
                                                <div key={year} className="mb-6">
                                                    <h3 className="mb-3 text-lg font-bold text-green-700">{year}</h3>
                                                    <ul className="space-y-3">
                                                        {awards.map((award, idx) => (
                                                            <li key={idx} className="rounded bg-white p-3 shadow">
                                                                <div className="font-semibold">{award.title}</div>
                                                                <div className="text-sm">{award.achievement}</div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {activeTab === 'licenses' && (
                                    <div className="mx-auto max-w-2xl">
                                        <p className="mb-4 md:mb-6">
                                            We are a fully licensed and authorized operator under the Petroleum Development Act (PDA), ensuring that
                                            our business operates in full compliance with industry regulations and national standards. Our licenses,
                                            issued and approved by the Ministry of Domestic Trade and Cost of Living (Kementerian Perdagangan Dalam
                                            Negeri dan Kos Sara Hidup - KPDN), grant us the legal authority to conduct and maintaining the highest
                                            levels of safety, efficiency, and service quality.
                                        </p>
                                        <Swiper
                                            modules={[Pagination, Navigation]}
                                            className="[--swiper-navigation-color:#38947e] [--swiper-pagination-color:#38947e] [--swiper-pagination-bullet-inactive-color:#7bb49b]"
                                            spaceBetween={16}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            navigation={true}
                                            breakpoints={{
                                                640: { slidesPerView: 1 },
                                                768: { slidesPerView: 2 },
                                                1024: { slidesPerView: 3 },
                                            }}
                                        >
                                            {licenses.map((item, idx) => (
                                                <SwiperSlide key={idx}>
                                                    <div className="flex flex-col items-center pb-8">
                                                        <Image
                                                            src={item.img}
                                                            alt="licenses"
                                                            width={400}
                                                            height={300}
                                                            className="mb-2 max-h-[500px] w-full rounded object-contain cursor-zoom-in hover:opacity-95"
                                                            onClick={() => {
                                                                setPreviewSrc(item.img);
                                                                setTimeout(() => setShowModal(true), 10);
                                                            }}
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {previewSrc && (
                        <div
                            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70"
                            onClick={closeWithAnim}
                        >
                            <div className={`relative transform transition-all duration-300 ${showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"} max-w-[90vw] md:max-w-[75vw] p-4 flex items-center justify-center`}>
                            <Image
                                src={previewSrc}
                                alt="preview"
                                width={1600}
                                height={1200}
                                className="max-h-[80vh] max-w-[90vw] h-auto w-auto object-contain mx-auto"
                                sizes="(max-width: 768px) 90vw, 75vw"
                            />
                            <button
                                className="absolute -right-3 -top-3 rounded-full bg-white/90 px-3 py-1 text-2xl font-bold leading-none text-gray-800"
                                onClick={closeWithAnim}
                                aria-label="Close preview"
                            >
                                ×
                            </button>
                            </div>
                        </div>
                    )}
                    <div className="flex hidden min-h-[300px] w-full items-center justify-center md:relative md:my-8 md:block md:min-h-[500px] md:w-1/2 md:py-20">
                        <Image
                            src="/images/honor/map_2.png"
                            alt="World Map"
                            width={600}
                            height={450}
                            className="h-full max-h-[400px] w-full max-w-full rounded-3xl object-contain md:max-h-[600px] md:object-cover"
                        />
                        {locations.map((loc) => (
                            <div
                                key={loc.name}
                                className="group absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 shadow-md"
                                style={{
                                    left: loc.left,
                                    top: loc.top,
                                    animationDuration: '700ms',
                                }}
                                title={loc.name}
                            >
                                <div className="h-full w-full animate-pulse rounded-full border-2 border-[#057265] bg-[#057265] shadow-lg group-hover:animate-none"></div>
                                <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
                                    {loc.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );

}



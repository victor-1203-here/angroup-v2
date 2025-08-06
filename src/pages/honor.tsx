import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const honorsData = [
    {
        year: '2015',
        awards: [
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: '2nd Runner Up - Top Volume Performer',
            },
            {
                title: 'Regional Sales Award (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
        ],
    },
    {
        year: '2016',
        awards: [
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: '2nd Runner Up - Top Volume Performer',
            },
            {
                title: 'Regional Sales Award (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
        ],
    },
    {
        year: '2017',
        awards: [
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: '2nd Runner Up - Top Volume Performer',
            },
            {
                title: 'Regional Sales Award (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
            {
                title: 'Special Appreciation',
                achievement: 'Top Volume Performer (20M+ liters p.a.)',
            },
        ],
    },
    {
        year: '2018',
        awards: [
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
            {
                title: 'Commercial Dealer (Northern Region)',
                achievement: '2nd Runner Up - Top Volume Performer',
            },
            {
                title: 'Regional Sales Award (Northern Region)',
                achievement: 'Champion - Top Volume Performer',
            },
            {
                title: 'Special Appreciation',
                achievement: 'Top Volume Performer',
            },
        ],
    },
    {
        year: '2019',
        awards: [
            {
                title: 'Special Appreciation',
                achievement: 'Top Volume Performer',
            },
        ],
    },
    {
        year: '2018',
        awards: [
            {
                title: 'Commercial Business Partner Excellence Award (CBPEA)',
                achievement: 'Champion - Top 3 Northern Region',
            },
            {
                title: 'Shell Award for Oil Bunkering in Malaysia',
                achievement: 'Awarded to Group Subsidiary',
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
    { img: '/images/honor/pda_06.png' },
];

export default function Honor() {
    const [activeTab, setActiveTab] = React.useState<'honors' | 'licenses'>('honors');
    return (
        <>
            <Head>
                <title>Honors & Licences - AN Group</title>
                <meta name="description" content="Learn more about AN Group, our values, mission, and team." />
            </Head>

            <section className="relative h-screen w-full">
                <Image
                    src="/images/honor/pic_001.jpg"
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
                <div className="absolute bottom-4 left-4 z-10 flex max-w-md flex-col p-4 md:p-8">
                    <p className="mb-3 text-base font-medium text-white sm:text-lg md:text-xl">Honors & Licences</p>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl">Honors</h1>
                </div>
            </section>

            <section className="w-full px-4 py-12 [background:linear-gradient(90deg,rgba(0,204,165,0.7)_0%,rgba(16,42,0,0.7)_100%)] md:px-10">
                <div className="mx-auto flex max-w-[96rem] flex-col items-start md:flex-row md:gap-24">
                    <div className="w-full md:w-1/2">
                        <div className="mb-6 flex justify-center">
                            <button
                                className={`rounded-bl-md rounded-tl-md px-8 py-2 font-semibold shadow-md ${
                                    activeTab === 'honors' ? 'bg-white text-green-700' : 'bg-gradient-to-b from-[#07dfb5] to-[#295b40] text-white'
                                }`}
                                onClick={() => setActiveTab('honors')}
                            >
                                Honors
                            </button>
                            <button
                                className={`ml-[-4px] rounded-br-md rounded-tr-md px-8 py-2 font-semibold shadow-md ${
                                    activeTab === 'licenses' ? 'bg-white text-green-700' : 'bg-gradient-to-b from-[#07dfb5] to-[#295b40] text-white'
                                }`}
                                onClick={() => setActiveTab('licenses')}
                            >
                                Licenses
                            </button>
                        </div>

                        <div className="relative">
                            {activeTab === 'licenses' && <div className="absolute inset-0 rounded-3xl bg-white/70"></div>}
                            <div className="relative z-10 px-6 py-6 md:px-0">
                                {activeTab === 'honors' && (
                                    <>
                                        <div className="hidden overflow-x-auto md:block">
                                            <table className="w-full text-left text-xs md:text-base">
                                                <thead>
                                                    <tr>
                                                        <th className="py-2 pr-4">Year</th>
                                                        <th className="py-2 pr-4">Award</th>
                                                        <th className="py-2">Achievement Level</th>
                                                    </tr>
                                                </thead>
                                                {honorsData.map(({ year, awards }) => (
                                                    <tbody key={year} className="border-b-2 border-green-700">
                                                        {awards.map((award, idx) => (
                                                            <tr key={year + idx}>
                                                                <td className="py-1 pr-4">{idx === 0 ? year : ''}</td>
                                                                <td className="py-1 pr-4">{award.title}</td>
                                                                <td className="py-1">{award.achievement}</td>
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
                                            spaceBetween={16}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            style={{ maxWidth: 800 }}
                                            breakpoints={{
                                                640: { slidesPerView: 1 },
                                                768: { slidesPerView: 2 },
                                                1024: { slidesPerView: 3 },
                                            }}
                                        >
                                            {licenses.map((item, idx) => (
                                                <SwiperSlide key={idx}>
                                                    <div className="flex flex-col items-center">
                                                        <img src={item.img} alt="licences" className="mb-2 max-h-96 w-full rounded object-contain" />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex hidden min-h-[300px] w-full items-center justify-center md:my-8 md:block md:min-h-[500px] md:w-1/2 md:py-20">
                        <img
                            src="/images/honor/map.png"
                            alt="World Map"
                            className="h-full max-h-[400px] w-full max-w-full rounded-3xl object-contain md:max-h-[600px] md:object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

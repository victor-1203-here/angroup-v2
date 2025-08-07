import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const directors = [
    {
        name: 'Tan Than Kau',
        photo: '/images/about/Mr Tan.jpg',
        title: 'Founder\nManaging Director',
        tagline: 'Transforming passion into global energy solutions',
    },
    {
        name: 'Christine Ng Saw Kheng',
        photo: '/images/about/Ms Christine.jpg',
        title: 'Executive Director',
        tagline: 'Mastering the financial pulse of petrochemical trade',
    },
];

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - AN Group</title>
                <meta name="description" content="Learn more about AN Group, our values, mission, and team." />
            </Head>

            <section className="relative h-screen w-full">
                <Image
                    src="/images/about/pic_01.jpg"
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
                    <p className="mb-3 text-base font-medium text-white sm:text-lg md:text-xl">About Us</p>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl">Our Story</h1>
                </div>
            </section>

            <section className="relative flex min-h-screen justify-center bg-white">
                <div className="flex flex-col-reverse items-center md:flex-row">
                    <div
                        className="relative z-0 -mt-10 flex w-full max-w-2xl flex-shrink-0 justify-start bg-[#1c3e5d] p-8 shadow-xl sm:-mt-16 md:-mt-8 md:mr-[-30px] md:w-2/3 lg:mt-0"
                        style={{ minHeight: '100vh' }}
                    >
                        <div className="max-w-xl content-center space-y-10 md:pl-5 md:pr-20">
                            <p className="text-base text-white sm:text-xl md:text-xl md:leading-10">
                                An Group is a leading player in the distribution of petroleum and chemical products. We are recognized as a
                                sought-after one-stop partner due to our extensive service coverage and a proven track record of fulfilling the
                                growing demand for fuel and chemicals. Our services also include efficient transportation solutions.
                            </p>
                            <p className="text-base text-white sm:text-xl md:text-xl md:leading-10">
                                We prioritize the safety and efficiency of our operations by ensuring that our fleet drivers are well-trained and
                                follow strict Standard Operating Procedures (SOP). To maintain the highest levels of service, our on-site technicians
                                regularly inspect and maintain our vehicles.
                            </p>
                            <p className="text-base text-white sm:text-xl md:text-xl md:leading-10">
                                With strategic logistics bases in Penang, Port Klang, Bukit Kayu Hitam, and Johor, we are able to guarantee wide
                                coverage and prompt delivery to meet our customers&apos; needs.
                            </p>
                        </div>
                    </div>

                    <div className="z-10 mt-8 flex w-full items-center justify-center md:mt-0 md:w-2/3 md:justify-start">
                        <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-full shadow-2xl shadow-black md:h-[32rem] md:w-[32rem]">
                            <Image
                                src="/images/about/watching-backsot.jpeg"
                                alt="Refinery workers"
                                width={512}
                                height={512}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="relative h-screen w-full">
                <Image
                    src="/images/about/pic_02.jpg"
                    alt="About Us Leaders"
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
                <div className="absolute inset-0 bg-gray-700 bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4 z-10 flex max-w-lg flex-col p-4 sm:bottom-6 sm:left-6 sm:p-6 md:p-8">
                    <p className="mb-3 text-base font-medium text-white sm:text-lg md:text-xl">About Us</p>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl">Our Leaders</h1>
                </div>
            </section>

            {/* Forth Section */}
            <section className="bg-white pt-10 md:py-14 lg:py-16">
                <h2 className="md:mb-15 mb-8 text-center text-3xl font-bold md:mt-8 md:text-4xl lg:mb-20 lg:mt-10">Board of Directors</h2>
                <div className="md:gap-15 flex flex-col items-center justify-center gap-10 pb-12 md:flex-row md:pb-0 lg:gap-20">
                    {directors.map((d) => (
                        <div
                            key={d.name}
                            className="flex h-[24rem] w-52 flex-col items-center rounded-xl bg-white pb-4 text-center shadow-lg shadow-black md:h-[36rem] md:w-64 md:pb-6 lg:h-[36rem] lg:w-72 lg:pb-8"
                        >
                            <div className="relative mb-4 h-80 w-full">
                                <Image
                                    src={d.photo}
                                    alt={d.name}
                                    className="rounded-t-2xl"
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
                            </div>
                            <div className="flex h-[47%] flex-col gap-4 px-6 md:h-1/2 md:gap-6 lg:h-1/2 lg:gap-8">
                                <h3 className="w-3/4 text-left text-lg font-semibold text-[#38947e] md:text-xl lg:text-2xl">{d.name}</h3>
                                <p className="md:text-md mb-2 whitespace-pre-line text-left text-sm font-medium text-gray-700 lg:text-lg">
                                    {d.title}
                                </p>
                                <p className="md:text-md text-left text-base text-xs lg:text-lg">&quot;{d.tagline}&quot;</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

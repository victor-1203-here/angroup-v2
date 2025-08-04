import Head from "next/head";
import Image from "next/image";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Services() {
    return (
        <>
            <Head>
                <title>Our Services | An Group</title>
                <meta name="description" content="Connect with us. Stay in-the-know on what we do by subscribing to our email updates." />
            </Head>
            <section className="relative min-h-screen flex flex-col">
                <Image
                    src="/images/service/AN_interior.jpg"
                    alt="Connect with us"
                    fill
                    priority
                    className="object-cover [object-position:45%_center] md:[object-position:left_center]"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-left md:items-start">
                    <div className="px-6 py-10 md:px-8 md:p-8 md:mx-12 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)]">
                        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4">Our Services</h1>
                        <p className="text-xl md:text-4xl text-white mb-6">
                            An Group supplies fuel and chemicals<br /> with reliable delivery across Asia and Europe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="md:max-w-[100rem] mx-auto px-12 md:px-24">
                    <div className="mb-12 text-left md:ml-12">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Services</h2>
                        <p className="text-lg text-gray-700">
                            An Group’s petroleum and chemical
                            <br className="md:hidden" />
                            distribution business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-20 md:gap-x-[9rem] mb-12">
                        <div>
                            <img
                            src="/images/service/service_001.jpg"
                            alt="Energy Solutions"
                            className="rounded-2xl object-cover object-center w-full h-52 md:h-96"
                            />
                            <div className="mt-4 md:mt-6">
                            <h3 className="text-xl text-[#38947e] mb-2">1. Our Energy Solutions</h3>
                            <p className="text-lg text-gray-700">
                                An Group offers a full suite of petroleum and chemical distribution services designed to meet the demands of modern industry. From diesel, fuel oil, LPG, and LNG to specialty chemicals and lubricants, our solutions are tailored to support operational efficiency, business growth, and long-term reliability across Asia and Europe.
                            </p>
                            </div>
                        </div>
                        <div>
                            <img
                            src="/images/service/service_002.jpg"
                            alt="What We Deliver"
                            className="rounded-2xl object-cover object-center w-full h-52 md:h-96"
                            />
                            <div className="mt-4 md:mt-6">
                            <h3 className="text-xl text-[#38947e] mb-2">2. What We Deliver</h3>
                            <p className="text-lg text-gray-700">
                                We go beyond just supplying fuel — we deliver trust, safety, and performance. Our inland distribution team, 63-vehicle fleet, and strategically located logistics hubs ensure that clients receive timely, high-quality products no matter their location or volume requirement. With flexible credit terms and value-added support, we help your business scale.
                            </p>
                            </div>
                        </div>
                        <div>
                            <img
                            src="/images/service/service_003.jpg"
                            alt="Powering Your Operations"
                            className="rounded-2xl object-cover object-center w-full h-52 md:h-96"
                            />
                            <div className="mt-4 md:mt-6">
                            <h3 className="text-xl text-[#38947e] mb-2">3. Powering Your Operations</h3>
                            <p className="text-lg text-gray-700">
                                Whether you're in manufacturing, logistics, agriculture, or construction, An Group powers your operations with dependable fuel and chemical solutions. Our comprehensive service offering is backed by strict SOPs, regular maintenance, and an expert logistics team, giving you peace of mind and uninterrupted supply.
                            </p>
                            </div>
                        </div>
                        <div>
                            <img
                            src="/images/service/service_004.jpg"
                            alt="Reliable Supply"
                            className="rounded-2xl object-cover object-center w-full h-52 md:h-96"
                            />
                            <div className="mt-4 md:mt-6">
                            <h3 className="text-xl text-[#38947e] mb-2">4. Reliable Supply. Every Time.</h3>
                            <p className="text-lg text-gray-700">
                                At An Group, reliability is more than a promise — it’s our standard. With over 5 million litres of storage capacity and extensive distribution coverage, we ensure uninterrupted delivery even during high-demand periods. Our proactive maintenance routines and experienced drivers uphold safety and consistency in every delivery.
                            </p>
                            </div>
                        </div>
                        <div>
                            <img
                            src="/images/service/service_005.jpg"
                            alt="Powering Your Operations"
                            className="rounded-2xl object-cover object-center w-full h-52 md:h-96"
                            />
                            <div className="mt-4 md:mt-6">
                            <h3 className="text-xl text-[#38947e] mb-2">5. Fuel. Chemicals. Logistics.</h3>
                            <p className="text-lg text-gray-700">
                                We specialize in three key pillars: high-quality fuel, certified chemicals, and efficient logistics. Whether you need methanol, urea, lubricants, or bulk diesel deliveries, An Group provides scalable solutions for businesses of all sizes. As a trusted partner of Petronas, our reputation is built on quality, service, and results.
                            </p>
                            </div>
                        </div>
                        <div>
                            <img
                            src="/images/service/service_006.jpg"
                            alt="Reliable Supply"
                            className="rounded-2xl object-cover object-center w-full h-52 md:h-96"
                            />
                            <div className="mt-4 md:mt-6">
                            <h3 className="text-xl text-[#38947e] mb-2">6. End-to-End Distribution Expertise</h3>
                            <p className="text-lg text-gray-700">
                                From sourcing to storage, delivery, and customer support — An Group provides seamless, end-to-end fuel and chemical distribution solutions. Our integrated approach ensures every stage of the supply chain is handled with precision, speed, and compliance. Whether it’s large-scale industrial orders or tailored volume requests, we manage it all with professionalism and care, so you can focus on running your business.
                            </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center">
                <div className="w-full relative md:py-12 md:px-8 [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] hidden md:block">
                    <div className="mb-8 px-8 ml-12 w-full text-left">
                        <h2 className="md:text-4xl font-semibold md:text-[#fff]">Discover More</h2>
                    </div>

                    <div
                        className="w-full relative md:p-2 [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] hidden md:flex items-center justify-between min-h-[370px] md:min-h-[430px]">
                        <div className="relative flex-1 mx-2 rounded-[1.5rem] overflow-hidden">
                            <img
                                src="/images/service/service_001.jpg"
                                alt="Our Story"
                                className="w-full h-96 object-cover rounded-[1.5rem]"
                            />
                            <button type='button' className="flex absolute top-4 right-4 items-center gap-2 px-6 py-2 rounded-full font-semibold text-white text-[1rem] bg-gradient-to-b from-[#07dfb5] to-[#295b40] shadow-lg z-10 transition hover:opacity-90">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                View all
                            </button>
                            <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex justify-center items-end">
                                <span className="text-white text-2xl font-semibold drop-shadow">Our Story</span>
                            </div>
                        </div>

                        <div className="relative flex-1 mx-2 rounded-[1.5rem] overflow-hidden min-w-[300px]">
                            <img
                                src="/images/service/service_002.jpg"
                                alt="Achievements & Awards"
                                className="w-full h-96 object-cover rounded-[1.5rem]"
                            />
                            <button type='button' className="flex absolute top-4 right-4 items-center gap-2 px-6 py-2 rounded-full font-semibold text-white text-[1rem] bg-gradient-to-b from-[#07dfb5] to-[#295b40] shadow-lg z-10 transition hover:opacity-90">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                View all
                            </button>
                            <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex justify-center items-end">
                                <span className="text-white text-2xl font-semibold drop-shadow">Achievements & Awards</span>
                            </div>
                        </div>

                        <div className="relative flex-1 mx-2 rounded-[1.5rem] overflow-hidden min-w-[300px]">
                            <img
                                src="/images/service/service_003.jpg"
                                alt="Inside An Group"
                                className="w-full h-96 object-cover rounded-[1.5rem]"
                            />
                            <button type='button' className="flex absolute top-4 right-4 items-center gap-2 px-6 py-2 rounded-full font-semibold text-white text-[1rem] bg-gradient-to-b from-[#07dfb5] to-[#295b40] shadow-lg z-10 transition hover:opacity-90">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                View all
                            </button>
                            <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex justify-center items-end">
                                <span className="text-white text-2xl font-semibold drop-shadow">Inside An Group</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10 px-8 w-full text-left md:hidden">
                    <h2 className="text-3xl font-semibold">Discover More</h2>
                </div>
                <div className="w-full md:hidden overflow-hidden relative [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] flex items-center min-h-[370px]">
                    <div className="w-full rounded-[1.5rem] bg-white/0 overflow-hidden mx-4">
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                            <SwiperSlide>
                                <div className="relative">
                                <img
                                    src="/images/service/service_001.jpg"
                                    alt="Our Story"
                                    className="w-full h-64 object-cover rounded-[1.5rem]"
                                />
                                <button type='button' className="flex absolute top-3 right-4 items-center gap-2 px-4 py-1.5 rounded-full font-semibold text-white text-sm bg-gradient-to-b from-[#07dfb5] to-[#295b40] shadow z-10">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View all
                                </button>
                                <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex justify-center items-end">
                                    <span className="text-white text-xl font-semibold drop-shadow">Our Story</span>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative">
                                <img
                                    src="/images/service/service_002.jpg"
                                    alt="Achievements & Awards"
                                    className="w-full h-64 object-cover rounded-[1.5rem]"
                                />
                                <button type='button' className="flex absolute top-3 right-4 items-center gap-2 px-4 py-1.5 rounded-full font-semibold text-white text-sm bg-gradient-to-b from-[#07dfb5] to-[#295b40] shadow z-10">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View all
                                </button>
                                <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex justify-center items-end">
                                    <span className="text-white text-xl font-semibold drop-shadow">Achievements & Awards</span>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative">
                                <img
                                    src="/images/service/service_003.jpg"
                                    alt="Inside An Group"
                                    className="w-full h-64 object-cover rounded-[1.5rem]"
                                />
                                <button type='button' className="flex absolute top-3 right-4 items-center gap-2 px-4 py-1.5 rounded-full font-semibold text-white text-sm bg-gradient-to-b from-[#07dfb5] to-[#295b40] shadow z-10">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View all
                                </button>
                                <div className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex justify-center items-end">
                                    <span className="text-white text-xl font-semibold drop-shadow">Inside An Group</span>
                                </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Discover() {
    return (
        <section className="flex flex-col items-center">
            <div className="relative hidden w-full [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] md:block md:px-8 md:py-12">
                <div className="mb-8 ml-12 w-full px-8 text-left">
                    <h2 className="font-semibold md:text-4xl md:text-[#fff]">Discover More</h2>
                </div>

                <div className="relative hidden min-h-[370px] w-full items-center justify-between [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] md:flex md:min-h-[430px] md:p-2">
                    <div className="relative mx-2 flex-1 overflow-hidden rounded-[1.5rem]">
                        <Image
                            src="/images/home/photo_017.jpg"
                            alt="Our Story"
                            width={600}
                            height={384}
                            className="h-96 w-full rounded-[1.5rem] object-cover"
                        />
                        <Link
                            href="/about"
                            className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#07dfb5] to-[#295b40] px-6 py-2 text-[1rem] font-semibold text-white shadow-lg transition hover:opacity-90"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View all
                        </Link>

                        <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent py-3">
                            <span className="text-2xl font-semibold text-white drop-shadow">Our Story</span>
                        </div>
                    </div>

                    <div className="relative mx-2 min-w-[300px] flex-1 overflow-hidden rounded-[1.5rem]">
                        <Image
                            src="/images/home/photo_018.jpg"
                            alt="Achievements & Awards"
                            width={600}
                            height={384}
                            className="h-96 w-full rounded-[1.5rem] object-cover"
                        />
                        <Link
                            href="/honor"
                            className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#07dfb5] to-[#295b40] px-6 py-2 text-[1rem] font-semibold text-white shadow-lg transition hover:opacity-90"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View all
                        </Link>
                        <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent py-3">
                            <span className="text-2xl font-semibold text-white drop-shadow">Achievements & Awards</span>
                        </div>
                    </div>

                    <div className="relative mx-2 min-w-[300px] flex-1 overflow-hidden rounded-[1.5rem]">
                        <Image
                            src="/images/home/photo_019.jpg"
                            alt="Inside An Group"
                            width={600}
                            height={384}
                            className="h-96 w-full rounded-[1.5rem] object-cover"
                        />
                        <Link
                            href="/services"
                            className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#07dfb5] to-[#295b40] px-6 py-2 text-[1rem] font-semibold text-white shadow-lg transition hover:opacity-90"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View all
                        </Link>
                        <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent py-3">
                            <span className="text-2xl font-semibold text-white drop-shadow">Inside An Group</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-10 w-full px-8 text-left md:hidden">
                <h2 className="text-3xl font-semibold">Discover More</h2>
            </div>
            <div className="relative flex min-h-[370px] w-full items-center overflow-hidden [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] md:hidden">
                <div className="mx-4 w-full overflow-hidden rounded-[1.5rem] bg-white/0">
                    <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                        <SwiperSlide>
                            <div className="relative">
                                <Image
                                    src="/images/service/service_001.jpg"
                                    alt="Our Story"
                                    width={600}
                                    height={256}
                                    className="h-64 w-full rounded-[1.5rem] object-cover"
                                />
                                <Link
                                    href="/about"
                                    className="absolute right-4 top-3 z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#07dfb5] to-[#295b40] px-4 py-1.5 text-sm font-semibold text-white shadow"
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View all
                                </Link>
                                <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent py-3">
                                    <span className="text-xl font-semibold text-white drop-shadow">Our Story</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <Image
                                    src="/images/service/service_002.jpg"
                                    alt="Achievements & Awards"
                                    width={600}
                                    height={256}
                                    className="h-64 w-full rounded-[1.5rem] object-cover"
                                />
                                <Link
                                    href="/honor"
                                    className="absolute right-4 top-3 z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#07dfb5] to-[#295b40] px-4 py-1.5 text-sm font-semibold text-white shadow"
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View all
                                </Link>
                                <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent py-3">
                                    <span className="text-xl font-semibold text-white drop-shadow">Achievements & Awards</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <Image
                                    src="/images/service/service_003.jpg"
                                    alt="Inside An Group"
                                    width={600}
                                    height={256}
                                    className="h-64 w-full rounded-[1.5rem] object-cover"
                                />
                                <Link
                                    href="/services"
                                    className="absolute right-4 top-3 z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#07dfb5] to-[#295b40] px-4 py-1.5 text-sm font-semibold text-white shadow"
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View all
                                </Link>
                                <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent py-3">
                                    <span className="text-xl font-semibold text-white drop-shadow">Inside An Group</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

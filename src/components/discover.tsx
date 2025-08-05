import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Discover() {
    return (
        <section className="flex flex-col items-center">
            <div className="w-full relative md:py-12 md:px-8 [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] hidden md:block">
                <div className="mb-8 px-8 ml-12 w-full text-left">
                    <h2 className="md:text-4xl font-semibold md:text-[#fff]">Discover More</h2>
                </div>

                <div
                    className="w-full relative md:p-2 [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)] hidden md:flex items-center justify-between min-h-[370px] md:min-h-[430px]">
                    <div className="relative flex-1 mx-2 rounded-[1.5rem] overflow-hidden">
                        <img
                            src="/images/home/photo_017.jpg"
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
                            src="/images/home/photo_018.jpg"
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
                            src="/images/home/photo_019.jpg"
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
    )
}
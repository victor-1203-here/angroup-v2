import Head from 'next/head';
import Image from 'next/image';
import Discover from '../components/discover';

export default function Services() {
    return (
        <>
            <Head>
                <title>Our Services | An Group</title>
                <meta name="description" content="Connect with us. Stay in-the-know on what we do by subscribing to our email updates." />
            </Head>
            <section className="relative flex min-h-screen flex-col">
                <Image
                    src="/images/service/AN_interior.jpg"
                    alt="Connect with us"
                    fill
                    priority
                    className="object-cover [object-position:45%_center] md:[object-position:left_center]"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-left md:items-start">
                    <div className="px-6 py-10 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] md:mx-12 md:p-8 md:px-8">
                        <h1 className="mb-4 text-2xl font-semibold text-white md:text-4xl">Our Services</h1>
                        <p className="mb-6 text-xl text-white md:text-4xl">
                            An Group supplies fuel and chemicals
                            <br /> with reliable delivery across Asia and Europe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto px-12 md:max-w-[100rem] md:px-24">
                    <div className="mb-12 text-left md:ml-12">
                        <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Our Services</h2>
                        <p className="text-lg text-gray-700">
                            An Group’s petroleum and chemical
                            <br className="md:hidden" />
                            distribution business.
                        </p>
                    </div>

                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-[9rem] md:gap-y-20">
                        <div>
                            <Image
                                src="/images/service/service_001.jpg"
                                alt="Energy Solutions"
                                width={600} 
                                height={208} 
                                className="rounded-2xl object-cover object-center md:h-96 md:w-full"
                            />
                            <div className="mt-4 md:mt-6">
                                <h3 className="mb-2 text-xl text-[#38947e]">1. Our Energy Solutions</h3>
                                <p className="text-lg text-gray-700">
                                    An Group offers a full suite of petroleum and chemical distribution services designed to meet the demands of
                                    modern industry. From diesel, fuel oil, LPG, and LNG to specialty chemicals and lubricants, our solutions are
                                    tailored to support operational efficiency, business growth, and long-term reliability across Asia and Europe.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/service/service_002.jpg"
                                alt="What We Deliver"
                                width={600}
                                height={208}
                                className="rounded-2xl object-cover object-center md:h-96 md:w-full"
                            />
                            <div className="mt-4 md:mt-6">
                                <h3 className="mb-2 text-xl text-[#38947e]">2. What We Deliver</h3>
                                <p className="text-lg text-gray-700">
                                    We go beyond just supplying fuel — we deliver trust, safety, and performance. Our inland distribution team,
                                    63-vehicle fleet, and strategically located logistics hubs ensure that clients receive timely, high-quality
                                    products no matter their location or volume requirement. With flexible credit terms and value-added support, we
                                    help your business scale.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/service/service_003.jpg"
                                alt="Powering Your Operations"
                                width={600}
                                height={208}
                                className="rounded-2xl object-cover object-center md:h-96 md:w-full"
                            />
                            <div className="mt-4 md:mt-6">
                                <h3 className="mb-2 text-xl text-[#38947e]">3. Powering Your Operations</h3>
                                <p className="text-lg text-gray-700">
                                    Whether you're in manufacturing, logistics, agriculture, or construction, An Group powers your operations with
                                    dependable fuel and chemical solutions. Our comprehensive service offering is backed by strict SOPs, regular
                                    maintenance, and an expert logistics team, giving you peace of mind and uninterrupted supply.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/service/service_004.jpg"
                                alt="Reliable Supply"
                                width={600}
                                height={208}
                                className="rounded-2xl object-cover object-center md:h-96 md:w-full"
                            />
                            <div className="mt-4 md:mt-6">
                                <h3 className="mb-2 text-xl text-[#38947e]">4. Reliable Supply. Every Time.</h3>
                                <p className="text-lg text-gray-700">
                                    At An Group, reliability is more than a promise — it&apos;s our standard. With over 5 million litres of storage
                                    capacity and extensive distribution coverage, we ensure uninterrupted delivery even during high-demand periods.
                                    Our proactive maintenance routines and experienced drivers uphold safety and consistency in every delivery.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/service/service_005.jpg"
                                alt="Powering Your Operations"
                                width={600}
                                height={208}
                                className="rounded-2xl object-cover object-center md:h-96 md:w-full"
                            />
                            <div className="mt-4 md:mt-6">
                                <h3 className="mb-2 text-xl text-[#38947e]">5. Fuel. Chemicals. Logistics.</h3>
                                <p className="text-lg text-gray-700">
                                    We specialize in three key pillars: high-quality fuel, certified chemicals, and efficient logistics. Whether you
                                    need methanol, urea, lubricants, or bulk diesel deliveries, An Group provides scalable solutions for businesses of
                                    all sizes. As a trusted partner of Petronas, our reputation is built on quality, service, and results.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/service/service_006.jpg"
                                alt="Reliable Supply"
                                width={600}
                                height={208}
                                className="rounded-2xl object-cover object-center md:h-96 md:w-full"
                            />
                            <div className="mt-4 md:mt-6">
                                <h3 className="mb-2 text-xl text-[#38947e]">6. End-to-End Distribution Expertise</h3>
                                <p className="text-lg text-gray-700">
                                    From sourcing to storage, delivery, and customer support — An Group provides seamless, end-to-end fuel and
                                    chemical distribution solutions. Our integrated approach ensures every stage of the supply chain is handled with
                                    precision, speed, and compliance. Whether it&apos;s large-scale industrial orders or tailored volume requests, we
                                    manage it all with professionalism and care, so you can focus on running your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Discover />
        </>
    );
}

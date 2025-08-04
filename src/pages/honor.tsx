import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Honor() {
    return (
        <>
            <Head>
                <title>Honors & Licences - AN Group</title>
                <meta name="description" content="Learn more about AN Group, our values, mission, and team."/>
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
                <div className="absolute bottom-4 left-4 flex flex-col z-10 p-4 md:p-8 max-w-md">
                    <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-3">
                        Honors & Licences
                    </p>
                    <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold">
                        Honors
                    </h1>
                </div>
            </section>

            <section className="w-full py-12 px-4 md:px-10 [background:linear-gradient(90deg,#00cca5_0%,#7fc995_100%)]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
                    <div className="w-full md:w-1/2">
                    <div className="flex justify-center mb-6">
                        <button className="bg-white text-green-700 px-8 py-2 rounded-tl-md rounded-bl-md font-semibold shadow-md">Honors</button>
                        <button className="bg-gradient-to-b from-[#07dfb5] to-[#295b40] text-white px-8 py-2 rounded-tr-md rounded-br-md font-semibold shadow-md ml-[-4px]">Licenses</button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs md:text-base">
                        <thead>
                            <tr>
                            <th className="py-2 pr-4">Year</th>
                            <th className="py-2 pr-4">Award</th>
                            <th className="py-2">Achievement Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Repeat rows as needed */}
                            <tr className="border-b border-green-200">
                            <td className="py-2 pr-4">2015</td>
                            <td className="py-2 pr-4">
                                Commercial Dealer (Northern Region)<br />
                                Commercial Dealer (Northern Region)<br />
                                Regional Sales Award (Northern Region)
                            </td>
                            <td className="py-2">
                                Champion - Top Volume Performer<br />
                                2nd Runner-up - Top Volume Performer<br />
                                Champion - Top Volume Performer
                            </td>
                            </tr>
                            {/* ...more rows */}
                        </tbody>
                        </table>
                    </div>
                    </div>

                    {/* Right: Map */}
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="/images/honor/map.png"
                        alt="World Map"
                        className="max-w-md w-full"
                    />
                    </div>
                </div>
            </section>
        </>
    )
}
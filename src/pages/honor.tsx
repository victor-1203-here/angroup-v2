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

            {/* First Section */}
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
        </>
    )
}
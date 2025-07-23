import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      {/* <Head>
        <title>About Us - AN Group</title>
        <meta
          name="description"
          content="Learn more about AN Group, our values, mission, and team."
        />
      </Head> */}

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/images/about/pic_01.jpg"
          alt="About Us Hero"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute bottom-6 left-6 flex flex-col">
          <p className="text-white text-base font-medium mb-2">About Us</p>
          <h1 className="text-white text-7xl font-bold">Our Story</h1>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12 font-gillsans">
        {/* Story Section: Multi-column layout */}  
        <section className="mx-auto max-w-5xl columns-2 gap-8">
          {/* 通过修改 `columns-2` 为 `columns-3` 或调整 `max-w-5xl` 控制宽度 */}
          <p className="text-lg leading-relaxed mb-4">
            Welcome to AN Group! We are dedicated to delivering top-notch
            marketing and trading solutions with innovation and integrity at
            our core.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is to empower businesses through digital transformation,
            leveraging cutting-edge web technologies and creative design to
            drive growth and engagement.
          </p>
          <p className="text-lg leading-relaxed">
            Meet our team of passionate professionals who bring expertise in
            marketing strategy, web development, and content creation to every
            project.
          </p>
        </section>

        {/* Leaders Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Our Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leader Card: Mr. Tan */}
            <div className="border p-6 text-center">
              <Image
                src="/images/about/Mr Tan.jpg"
                alt="Mr Tan Than Kau"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">Mr. Tan Than Kau</h3>
              <p className="text-sm text-gray-600">Co-Founder & CEO</p>
              <blockquote className="mt-4 italic">“—— 这里是他的引用语 ——”</blockquote>
            </div>
            {/* Leader Card: Christine */}
            <div className="border p-6 text-center">
              <Image
                src="/images/about/Ms Christine.jpg"
                alt="Christine Ng Saw Kheng"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">Christine Ng Saw Kheng</h3>
              <p className="text-sm text-gray-600">Co-Founder & COO</p>
              <blockquote className="mt-4 italic">“—— 这里是她的引用语 ——”</blockquote>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

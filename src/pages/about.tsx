import Head from "next/head";
import Image from "next/image";
import React from "react";

const directors = [
  {
    name: "Tan Than Kau",
    photo: "/images/about/Mr Tan.jpg",
    title: "Founder\nManaging Director",
    tagline: "Transforming passion into global energy solutions",
  },
  {
    name: "Christine Ng Saw Kheng",
    photo: "/images/about/Ms Christine.jpg", 
    title: "Executive Director",
    tagline: "Mastering the financial pulse of petrochemical trade",
  },
];

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

      {/* First Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/images/about/pic_01.jpg"
          alt="About Us Story"
          fill={true}
          objectFit="cover"
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-col z-10 p-4 sm:p-6 md:p-8 max-w-md">
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-3">
            About Us
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold">
            Our Story
          </h1>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative flex flex-col md:flex-row justify-center bg-white min-h-screen">
        <div className="flex items-center">
          <div
            className="
              relative
              z-0
              flex justify-start
              shadow-xl
              p-8
              bg-[#1c3e5d]
              w-full
              max-w-2xl
              flex-shrink-0
              md:w-2/3
              md:mr-[-30px]   // Negative right margin for overlap
            "
            style={{ minHeight: '100vh' }}
          >
            <div className="space-y-10 md:pr-20 md:pl-5 content-center max-w-xl ">
              <p className="text-white text-base sm:text-xl md:text-xl md:leading-10">
                An Group is a leading player in the distribution of petroleum and chemical products. We are recognized as a sought-after one-stop partner due to our extensive service coverage and a proven track record of fulfilling the growing demand for fuel and chemicals. Our services also include efficient transportation solutions.
              </p>
              <p className="text-white text-base sm:text-xl md:text-xl md:leading-10">
                We prioritize the safety and efficiency of our operations by ensuring that our fleet drivers are well-trained and follow strict Standard Operating Procedures (SOP). To maintain the highest levels of service, our on-site technicians regularly inspect and maintain our vehicles.
              </p>
              <p className="text-white text-base sm:text-xl md:text-xl md:leading-10">
                With strategic logistics bases in Penang, Port Klang, Bukit Kayu Hitam, and Johor, we are able to guarantee wide coverage and prompt delivery to meet our customers' needs.
              </p>
            </div>
          </div>

          <div className="z-10 flex justify-center md:justify-start items-center md:w-2/3 w-full mt-8 md:mt-0">
            <div className="rounded-full shadow-black shadow-2xl overflow-hidden w-96 h-96 md:w-[32rem] md:h-[32rem] flex items-center justify-center">
              <Image
                src="/images/about/watching-backsot.jpeg"
                alt="Refinery workers"
                width={512}      
                height={512}
                className="object-cover w-full h-full"
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
          fill={true}
          objectFit="cover"
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gray-700 bg-opacity-30"></div>
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-col z-10 p-4 sm:p-6 md:p-8 max-w-lg">
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-3">
            About Us
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold">
            Our Leaders
          </h1>
        </div>
      </section>

      {/* Forth Section */}
      <section className="py-16 bg-white h-screen w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 mt-10">Board of Directors</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          {directors.map((d) => (
            <div
              key={d.name}
              className="
                bg-white 
                rounded-xl 
                shadow-black
                shadow-lg 
                overflow-hidden 
                w-72      
                h-[36rem]          
                flex 
                flex-col 
                items-center 
                text-center 
                pb-8 
                transition 
              "
            >
              <div className="w-full h-80 relative mb-4"> 
                <Image
                  src={d.photo}
                  alt={d.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-t-2xl"
                  priority
                />
              </div>
              <div className="px-6 flex flex-col gap-8 h-1/2">
                <h3 className="text-2xl font-semibold text-[#3f9c7f] text-left w-3/4">{d.name}</h3>
                <p className="text-lg font-medium text-gray-700 whitespace-pre-line mb-2 text-left">{d.title}</p>
                <p className="text-lg text-base text-left">&quot;{d.tagline}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}

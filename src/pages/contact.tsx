// pages/contact.js
import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
        <Head>
            <title>Contact Us | An Group</title>
            <meta name="description" content="Connect with us. Stay in-the-know on what we do by subscribing to our email updates." />
          </Head>
        <section className="relative min-h-screen flex flex-col">
            <Image
            src="/images/contact/pic_001.jpg"   
            alt="Connect with us"
            fill
            priority
            className="object-cover [object-position:10%_center] md:[object-position:left_center]"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-left md:absolute md:bottom-4 md:left-4 md:items-start md:justify-end">
                <div className="px-6 py-10 md:px-8 md:p-8 md:mx-12 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)]">
                    <p className="text-sm md:text-2xl text-white/80 mb-2 tracking-wide">An Group</p>
                    <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4">Connect with us</h1>
                    <p className="text-xl md:text-4xl text-white mb-6">
                    Stay in-the-know on what we do by subscribing to our email updates.
                    </p>
                </div>
            </div>
        </section>
          
        <section className="relative min-h-[100vh] md:mx-20 flex items-center bg-white">
            <div className="h-screen w-[12.5%] md:w-[45%] [background:linear-gradient(90deg,rgba(0,204,165,0.7)_0%,rgba(16,42,0,0.7)_100%)]">
            </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative max-w-2xl w-full px-6 md:px-0">
                        <p className="mb-8 text-gray-700">
                        Subscribe to updates and alerts from An Group to know more about what we do.<br />
                        Emails on multiple categories will be sent to you as per your selection.
                        </p>
                        <form className="space-y-6 md:space-y-10" autoComplete="off">
                            <div>
                                <input
                                id="sub-name"
                                placeholder="Name*"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 mb-2 focus:ring-2 focus:ring-[#00cca5]"
                                />
                            </div>
                            <div>
                                <input
                                id="sub-email"
                                placeholder="Email*"
                                name="email"
                                type="email"
                                required
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 mb-2 focus:ring-2 focus:ring-[#00cca5]"
                                />
                            </div>
                            <fieldset className="space-y-2">
                                <div className="grid grid-cols-2 gap-x-4">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-[#00cca5]" /> General News
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-[#00cca5]" /> Media
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-[#00cca5]" /> Investor Relations
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-[#00cca5]" /> Sustainability
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-[#00cca5]" /> Reports
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-[#00cca5]" /> All of it
                                </label>
                                </div>
                            </fieldset>
                            <div className="flex items-center mt-2 gap-2">
                                <input type="checkbox" id="rcaptcha" required className="accent-[#00cca5]" />
                                <label htmlFor="rcaptcha" className="text-xs text-gray-600">
                                I'm not a robot <span className="inline-block align-bottom ml-1 bg-gray-100 border border-gray-200 px-2 py-1 text-[10px] rounded">reCAPTCHA</span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 px-4 py-2 rounded font-semibold text-white shadow
                                [background:linear-gradient(180deg,#102a00,#00cca5)]
                                hover:brightness-95 focus:outline-none transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
        </section> 
          
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
            <Image
            src="/images/contact/pic_002.jpg"   
            alt="Contact Us - Hero Background"
            fill
            priority
            className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
            <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left md:absolute md:bottom-4 md:left-4 md:items-start md:justify-end">
                <div className="px-6 py-10 md:px-8 md:p-8 md:mx-12 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)]">
                    <p className="text-sm md:text-2xl text-white/80 mb-2 tracking-wide">An Group</p>
                    <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4">Connect with us</h1>
                    <p className="text-xl md:text-4xl text-white mb-6">
                    Have a question or need a quote?<br className="md:hidden" /> Reach out our team.
                    </p>
                </div>
            </div>
        </section>
          
        <section className="
            min-h-screen
            [background:linear-gradient(90deg,rgba(0,204,165,0.2)_0%,rgba(16,42,0,0.2)_100%)]
            py-8 px-4 flex flex-col justify-center
        ">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row-reverse md:justify-between md:gap-16">
                <form className="flex-1 space-y-4 p-4 mb-8 md:text-lg md:space-y-8 md:p-10">
                    <div className="flex gap-4 md:gap-6">
                    <input
                        type="text"
                        placeholder="Name*"
                        required
                        className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-[#00cca5] text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email*"
                        required
                        className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-[#00cca5] text-sm"
                    />
                    </div>
                    <div className="flex gap-4 md:gap-6">
                    <input
                        type="tel"
                        placeholder="Phone*"
                        required
                        className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-[#00cca5] text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Company*"
                        required
                        className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-[#00cca5] text-sm"
                    />
                    </div>
                    <textarea
                        placeholder="Message"
                        rows={8}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-[#00cca5] text-sm resize-none"
                    />
                    <div className="
                        p-[2px] rounded-lg w-full
                        [background:linear-gradient(90deg,#00cca5_0%,#102a00_100%)]
                        inline-block
                    ">
                    <button
                        type="submit"
                        className="
                        w-full rounded-lg py-2 font-semibold text-black bg-white
                        border-none outline-none
                        hover:brightness-95 transition text-base
                        "
                    >
                        Submit
                    </button>
                    </div>
                </form>

                <div className="grid grid-cols-3 gap-x-1 gap-y-4 text-[12px] mt-2 mb-4 md:block md:w-1/2 md:max-w-xs md:text-base md:pr-8">
                    <div className="md:mb-4">
                        <span className="uppercase text-[#102a00]">Headquarters :</span><br />
                        No. 1383, MK 15<br />
                        Jalan Megat Harun<br />
                        14000 Bukit Mertajam<br />
                        Penang, Malaysia
                    </div>
                    <div className="md:mb-4">
                        <span className="uppercase text-[#102a00]">Corporate Office :</span><br />
                        No 4, Jalan 22B/70A,<br />
                        Desa Sri Hartamas,<br />
                        50480, Kuala Lumpur, Malaysia <br />
                        Tel: +603 640 30200
                    </div>
                    <div className="md:mb-4">
                        <span className="uppercase text-[#102a00]">Operating Hours :</span><br />
                        Mon-Fri: 8:30AM - 5:30PM<br />
                        Sat: 9AM - 1PM<br />
                        Closed on Public Holidays
                    </div>
                    <div className="md:mb-4">
                        <span className="uppercase text-[#102a00]">Tel :</span> +604 538 6820
                    </div>
                    <div>
                        <span className="uppercase text-[#102a00]">Email :</span><br />
                        <a href="mailto:info@angroup.com.my" className="">info@angroup.com.my</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

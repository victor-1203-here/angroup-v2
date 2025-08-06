import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | An Group</title>
                <meta name="description" content="Connect with us. Stay in-the-know on what we do by subscribing to our email updates." />
            </Head>
            <section className="relative flex min-h-screen flex-col">
                <Image
                    src="/images/contact/pic_001.jpg"
                    alt="Connect with us"
                    fill
                    priority
                    className="object-cover [object-position:10%_center] md:[object-position:left_center]"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-left md:absolute md:bottom-4 md:left-4 md:items-start md:justify-end">
                    <div className="px-6 py-10 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] md:mx-12 md:p-8 md:px-8">
                        <p className="mb-2 text-sm tracking-wide text-white/80 md:text-2xl">An Group</p>
                        <h1 className="mb-4 text-2xl font-semibold text-white md:text-4xl">Connect with us</h1>
                        <p className="mb-6 text-xl text-white md:text-4xl">Stay in-the-know on what we do by subscribing to our email updates.</p>
                    </div>
                </div>
            </section>

            <section className="relative flex min-h-[100vh] items-center bg-white md:mx-20">
                <div className="h-screen w-[12.5%] [background:linear-gradient(90deg,rgba(0,204,165,0.7)_0%,rgba(16,42,0,0.7)_100%)] md:w-[45%]"></div>
                <div className="flex flex-1 justify-center">
                    <div className="relative w-full max-w-2xl px-6 md:px-0">
                        <p className="mb-8 text-gray-700">
                            Subscribe to updates and alerts from An Group to know more about what we do.
                            <br />
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
                                    className="mb-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00cca5]"
                                />
                            </div>
                            <div>
                                <input
                                    id="sub-email"
                                    placeholder="Email*"
                                    name="email"
                                    type="email"
                                    required
                                    className="mb-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#00cca5]"
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
                            <div className="mt-2 flex items-center gap-2">
                                <input type="checkbox" id="rcaptcha" required className="accent-[#00cca5]" />
                                <label htmlFor="rcaptcha" className="text-xs text-gray-600">
                                    I'm not a robot{' '}
                                    <span className="ml-1 inline-block rounded border border-gray-200 bg-gray-100 px-2 py-1 align-bottom text-[10px]">
                                        reCAPTCHA
                                    </span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 w-full rounded px-4 py-2 font-semibold text-white shadow transition [background:linear-gradient(180deg,#102a00,#00cca5)] hover:brightness-95 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
                <Image src="/images/contact/pic_002.jpg" alt="Contact Us - Hero Background" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
                <div className="relative z-10 flex flex-1 flex-col items-start justify-center text-left md:absolute md:bottom-4 md:left-4 md:items-start md:justify-end">
                    <div className="px-6 py-10 [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] md:mx-12 md:p-8 md:px-8">
                        <p className="mb-2 text-sm tracking-wide text-white/80 md:text-2xl">An Group</p>
                        <h1 className="mb-4 text-2xl font-semibold text-white md:text-4xl">Contact us</h1>
                        <p className="mb-6 text-xl text-white md:text-4xl">
                            Have a question or need a quote?
                            <br className="md:hidden" /> Reach out our team.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen flex-col justify-center px-4 py-8 [background:linear-gradient(90deg,rgba(0,204,165,0.2)_0%,rgba(16,42,0,0.2)_100%)]">
                <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row-reverse md:justify-between md:gap-16">
                    <form className="mb-8 flex-1 space-y-4 p-4 md:space-y-8 md:p-10 md:text-lg">
                        <div className="flex gap-4 md:gap-6">
                            <input
                                type="text"
                                placeholder="Name*"
                                required
                                className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-[#00cca5]"
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                required
                                className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-[#00cca5]"
                            />
                        </div>
                        <div className="flex gap-4 md:gap-6">
                            <input
                                type="tel"
                                placeholder="Phone*"
                                required
                                className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-[#00cca5]"
                            />
                            <input
                                type="text"
                                placeholder="Company*"
                                required
                                className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-[#00cca5]"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows={8}
                            required
                            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-[#00cca5]"
                        />
                        <div className="inline-block w-full rounded-lg p-[2px] [background:linear-gradient(90deg,#00cca5_0%,#102a00_100%)]">
                            <button
                                type="submit"
                                className="w-full rounded-lg border-none bg-white py-2 text-base font-semibold text-black outline-none transition hover:brightness-95"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className="mb-4 mt-2 grid grid-cols-3 gap-x-1 gap-y-4 text-[12px] md:block md:w-1/2 md:max-w-xs md:pr-8 md:text-base">
                        <div className="md:mb-4">
                            <span className="uppercase text-[#102a00]">Headquarters :</span>
                            <br />
                            No. 1383, MK 15
                            <br />
                            Jalan Megat Harun
                            <br />
                            14000 Bukit Mertajam
                            <br />
                            Penang, Malaysia
                        </div>
                        <div className="md:mb-4">
                            <span className="uppercase text-[#102a00]">Corporate Office :</span>
                            <br />
                            No 4, Jalan 22B/70A,
                            <br />
                            Desa Sri Hartamas,
                            <br />
                            50480, Kuala Lumpur, Malaysia <br />
                            Tel: +603 640 30200
                        </div>
                        <div className="md:mb-4">
                            <span className="uppercase text-[#102a00]">Operating Hours :</span>
                            <br />
                            Mon-Fri: 8:30AM - 5:30PM
                            <br />
                            Sat: 9AM - 1PM
                            <br />
                            Closed on Public Holidays
                        </div>
                        <div className="md:mb-4">
                            <span className="uppercase text-[#102a00]">Tel :</span> +604 538 6820
                        </div>
                        <div>
                            <span className="uppercase text-[#102a00]">Email :</span>
                            <br />
                            <a href="mailto:info@angroup.com.my" className="">
                                info@angroup.com.my
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

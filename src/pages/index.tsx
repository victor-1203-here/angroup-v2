import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from 'swiper';
import "swiper/css";
import { FaArrowLeft, FaArrowRight, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Discover from "../components/discover";

const slides = [
  {
    title: "Built on Purpose",
    description: "Delivering reliable petroleum and chemical solutions across Asia and Europe.",
    image: "/images/home/photo_001.jpg",
    link: "/services",
  },
  {
    title: "Engineered for Excellence",
    description: "Driven by precision, built on integrity — we’re here to move industries forward.",
    image: "/images/home/photo_002.jpg",
    link: "/services",
  },
  {
    title: "One Partner. Total Solutions",
    description: "From fuel to logistics, we’re your one-stop petroleum service provider.",
    image: "/images/home/photo_003.jpg",
    link: "/services",
  },
  {
    title: "Where Safety Meets Scale",
    description: "Extensive network, proven SOPs, and uncompromised safety standards.",
    image: "/images/home/photo_004.jpg",
    link: "/services",
  },
  {
    title: "Your Energy. Delivered",
    description: "Wide coverage, timely transportation, and responsive customer support.",
    image: "/images/home/photo_005.jpg",
    link: "/services",
  },
];

const highlights = [
  {
    title: "Expanding Regional & Global Reach",
    description: (
      <>
        An Group operates across key markets in Asia and Europe, including Malaysia, China, Laos, and the Netherlands. With a growing international presence and established logistics hubs in Penang, Port Klang, Bukit Kayu Hitam, and Johor, we ensure that clients receive dependable access to petroleum and chemical products — no matter where they operate.
      </>
    ),
    imageSrc: "/images/home/photo_012.jpg", 
  },
  {
    title: "Committed to Energy Transition",
    description: (
      <>
        As the global energy landscape shifts toward sustainability, An Group is committed to adapting responsibly. We are actively reinforcing our operations to align with evolving environmental goals, exploring avenues in renewable energy, reducing emissions, and investing in cleaner, more efficient solutions for long-term impact.
      </>
    ),
    imageSrc: "/images/home/photo_013.jpg", 
  },
  {
    title: "Strong Logistics & Storage Capabilities",
    description: (
      <>
        Our operations are powered by a fleet of 63 well-maintained tankersand inland transport solutions designed to handle varying volume needs. Combined with a total storage capacity of 5 million litres across our strategic locations, An Group ensures efficient, timely, and safe delivery to meet even the most demanding supply requirements.
      </>
    ),
    imageSrc: "/images/home/photo_014.jpg",
  },
  {
    title: "Recognized Industry Leader",
    description: (
      <>
        An Group’s consistent excellence has earned us numerous national and regional accolades from industry giants like Petronas. From Top Volume Performer to Regional Sales Champion, our awards reflect our dedication to operational excellence, trusted client relationships, and high-performance delivery across multiple markets.
      </>
    ),
    imageSrc: "/images/home/photo_015.jpg",
  },
  {
    title: "Committed to Energy Transition",
    description: null,
    imageSrc: "/images/home/photo_016.jpg",
  },
];

const AUTOPLAY_TIME = 5000;

export default function MySwiper() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [expanded, setExpanded] = useState(0);
  const displayImage = expanded >= 0 ? highlights[expanded].imageSrc : highlights[0].imageSrc;
  const displayTitle = expanded >= 0 ? highlights[expanded].title : highlights[0].title;

  useEffect(() => {
    let rafId: number;
    let startTs: number | null = null;
    if (!isHover) {
      const animate = (ts: number) => {
        if (startTs == null) startTs = ts;
        const elapsed = ts - startTs;
        setProgress(Math.min(elapsed / AUTOPLAY_TIME, 1));
        if (elapsed < AUTOPLAY_TIME) {
          rafId = requestAnimationFrame(animate);
        }
      };
      setProgress(0);
      rafId = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [activeIdx, isHover]);

  // Swiper event listeners
  const handleSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
    swiper.on('slideChange', () => setActiveIdx(swiper.realIndex));
    swiper.on('autoplay', () => setActiveIdx(swiper.realIndex));
    setActiveIdx(swiper.realIndex);
  };

  const onMouseEnter = () => {
    setIsHover(true);
    swiperRef.current?.autoplay?.stop();
  };
  const onMouseLeave = () => {
    setIsHover(false);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <>
      <section className="relative h-screen w-full" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: AUTOPLAY_TIME, disableOnInteraction: false }}
          loop
          onSwiper={handleSwiper}
          className="h-screen"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-screen w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-screen"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <div className="hidden md:flex absolute left-0 top-0 p-12 md:ml-8 h-full flex-col justify-center max-w-[35vw] [text-shadow:0_4px_10px_rgba(0,0,0,0.8)]">
                  <h2 className="text-4xl font-bold mb-4 text-white">{slide.title}</h2>
                  <p className="mb-6 text-white text-lg">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="flex items-center gap-2 text-white underline font-semibold mb-8"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                {/* Mobile overlay text */}
                <div className="md:hidden absolute left-0 top-0 p-6 h-full flex flex-col justify-center max-w-[85vw] [text-shadow:0_4px_10px_rgba(0,0,0,0.8)]">
                  <h2 className="text-2xl font-bold mb-2 text-white">{slide.title}</h2>
                  <p className="mb-4 text-white">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="flex items-center gap-2 text-white underline font-semibold mb-16"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="md:hidden absolute bottom-6 left-6 flex justify-between items-center w-[calc(100%-3rem)] text-white mb-8">
                    <span className="font-medium ml-4">{slide.title}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="custom-prev-button [background:linear-gradient(90deg,#102a00,#00cca5)] rounded-full p-2 focus:outline-none"
                      >
                        <FaArrowLeft />
                      </button>
                      <span className="text-lg font-bold">{idx + 1} / {slides.length}</span>
                      <button
                        type="button"
                        aria-label="Next slide"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="custom-next-button [background:linear-gradient(270deg,#102a00,#00cca5)] rounded-full p-2 focus:outline-none"
                      ><FaArrowRight />
                      </button>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-9xl z-10">
          <div className="flex justify-center w-full gap-32 overflow-x-auto whitespace-nowrap">
            {slides.map((slide, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={slide.title}
                  type="button"
                  className="relative px-1 py-2 group text-center font-medium focus:outline-none whitespace-nowrap"
                  style={{ fontSize: "1.08rem", lineHeight: 1.2, minWidth: 0, maxWidth: "240px" }}
                  aria-current={isActive}
                  onClick={() => {
                    swiperRef.current?.slideToLoop(i);
                    setActiveIdx(i);
                  }}
                >
                  <span
                    className={`
                      relative z-10
                      ${isActive
                        ? 'bg-gradient-to-r from-[#00cca5] to-[#7fc995] bg-clip-text text-transparent transition-all duration-200'
                        : 'text-white'
                      }
                    `}
                    style={
                      isActive
                        ? {
                            backgroundImage: `linear-gradient(90deg, #00cca5 ${progress * 100}%, #fff ${progress * 100}%)`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }
                        : undefined
                    }
                  >
                    {slide.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-[96rem] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Journey of Growth</h2>
            <p className="text-gray-700 md:max-w-xl">
              As the world moves toward cleaner energy, An Group is strengthening its foundation to meet changing industry needs, with a focus on sustainability and excellence.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-b from-[#102a00] to-[#00cca5] shadow-lg self-start md:self-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View all
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="group flex-1 relative rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-200 hover:scale-[1.02]">
            <img
              src="/images/home/photo_006.jpg"
              alt="Strengthening the Core"
              className="object-cover w-full h-96 md:h-96"
            />
            <div className="
              absolute bottom-0 left-0 w-full px-16 py-6
              rounded-2xl
              bg-gradient-to-t from-[#102a00]/90 to-[#00cca5]
              transition-opacity duration-300
              opacity-90 md:opacity-0 md:group-hover:opacity-100
              pointer-events-none
              text-center
            ">
              <h3 className="text-lg font-semibold text-white pb-2">Strengthening the Core</h3>
              <p className="text-white text-sm">
                Enhancing operations with greater safety and efficiency while lowering emissions to build a solid, future-ready foundation.
              </p>
            </div>
          </div>
          <div className="group flex-1 relative rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-200 hover:scale-[1.02]">
            <img
              src="/images/home/photo_007.jpg"
              alt="Capturing New Growth"
              className="object-cover w-full h-96 md:h-96"
            />
            <div className="
              absolute bottom-0 left-0 w-full px-16 py-6
              rounded-2xl
              bg-gradient-to-t from-[#102a00]/90 to-[#00cca5]
              transition-opacity duration-300
              opacity-90 md:opacity-0 md:group-hover:opacity-100
              pointer-events-none
              text-center
            ">
              <h3 className="text-lg font-semibold text-white pb-2">Capturing New Growth</h3>
              <p className="text-white text-sm">
                Expanding into renewables, specialty chemicals, hydrogen, and carbon solutions to meet evolving energy needs.
              </p>
            </div>
          </div>
          <div className="group flex-1 relative rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-200 hover:scale-[1.02]">
            <img
              src="/images/home/photo_008.jpg"
              alt="Achieving Net Zero"
              className="object-cover w-full h-96 md:h-96"
            />
            <div className="
              absolute bottom-0 left-0 w-full px-16 py-6
              rounded-2xl
              bg-gradient-to-t from-[#102a00]/90 to-[#00cca5]
              transition-opacity duration-300
              opacity-90 md:opacity-0 md:group-hover:opacity-100
              pointer-events-none
              text-center
            ">
              <h3 className="text-lg font-semibold text-white pb-2">Achieving Net Zero</h3>
              <p className="text-white text-sm">
                Committed to a carbon-neutral future by 2050, with ongoing efforts to reduce emissions across all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4 text-[#38947e]">
          Leading the Future of<br className="md:hidden"/> Energy Distribution
        </h2>
        <p className="text-center text-sm mb-10 md:text-lg">
          AN GROUP delivers fuel and chemicals across Asia and Europe<br className="md:hidden"/>
          with a strong fleet and strategic storage hubs.
        </p>

        <div className="rounded-[2.5rem] overflow-hidden shadow-lg mb-10">
          <div className="relative">
            <img
              src="/images/home/photo_009.jpg" 
              alt="Vision"
              className="object-cover w-full h-56"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-row justify-center items-center gap-10 md:justify-between md:px-12 md:mx-12 p-8">
              <h3 className="text-3xl md:text-5xl font-semibold text-white">Vision</h3>
              <p className="text-white md:text-lg max-w-xs">
                To lead as East Asia’s top petroleum provider, growing worldwide while delivering quality, building lasting partnerships, and protecting our environment.
              </p>
            </div>
          </div>
        </div>

        {/* Mission card */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-lg mb-10">
          <div className="relative">
            <img
              src="/images/home/photo_010.jpg" // replace with your image
              alt="Mission"
              className="object-cover w-full h-56"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-row justify-center items-center gap-10 md:justify-between md:px-12 md:mx-12 p-8">
              <h3 className="text-3xl md:text-5xl font-semibold text-white">Mission</h3>
              <p className="text-white md:text-lg max-w-xs">
                To bridge energy needs with eco-efficient solutions through innovation, education, and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Values card */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src="/images/home/photo_011.jpg" // replace with your image
              alt="Values"
              className="object-cover w-full h-56"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-row justify-center items-center gap-10 md:justify-between md:px-12 md:mx-12 p-8">
              <h3 className="text-3xl md:text-5xl font-semibold text-white">Values</h3>
              <p className="text-white md:text-lg max-w-xs">
                We deliver excellence through safe operations, sustainable energy solutions, and trustworthy support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[96rem] mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold mb-2">Highlights</h2>
        <p className="mb-8 text-lg text-gray-700">Reliable Supply, Global Reach</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Main image panel - left on desktop, top on mobile */}
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-[38%]">
            <div className="rounded-3xl overflow-hidden shadow-lg h-72 md:h-[32rem]">
              <div className="relative h-full">
                <img
                  src={displayImage}
                  alt={displayTitle}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Accordion list - below image on mobile, right on desktop */}
          <div className="flex-1 w-full">
            {highlights.map((item, idx) => (
              <div key={item.title} className="mb-8">
                <button
                  type="button"
                  className="flex justify-between items-center w-full text-left text-2xl py-2 px-2 rounded-lg hover:bg-gray-50 focus:outline-none"
                  onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                  aria-expanded={expanded === idx}
                  aria-label="Tab Opener"
                  aria-controls={`section-content-${idx}`}
                >
                  <span className={`${expanded === idx ? "text-[#38947e]" : ""}`}>
                    {item.title}
                  </span>
                  {expanded === idx ? (
                    <FaMinusCircle className="text-[#38947e] text-xl" />
                  ) : (
                    <FaPlusCircle className="text-[#38947e] text-xl" />
                  )}
                </button>
                {/* Expanded Content */}
                {expanded === idx && item.description && (
                  <div
                    id={`section-content-${idx}`}
                    className="px-2 pb-4 text-base text-gray-800"
                  >
                    <div className="mb-2">{item.description}</div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#38947e] font-semibold underline mt-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Read More
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Discover />
    </>

  );
}

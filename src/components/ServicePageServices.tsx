import React from 'react';
import {
  Users,
  Music,
  Trophy,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Large-Scale Events',
    description:
      'Orchestrate complex productions with thousands of attendees. Our expertise in logistics and crowd management ensures flawless execution at any scale.',
    features: [
      'Conferences & Conventions (1000+)',
      'Multi-Venue Productions',
      'Global Event Coordination',
      'Large-Scale Event Logistics',
    ],
    image: '/images/2.jpeg',
    imageAlt: 'Large conference hall setup',
    icon: Users,
  },
  {
    number: '02',
    title: 'Music Festivals & Concerts',
    description:
      'From intimate performances to major concert experiences, we manage the details behind the scenes to create seamless and unforgettable live events.',
    features: [
      'Music Festivals',
      'Concert Productions',
      'Artist & Talent Coordination',
      'Production Management',
    ],
    image: '/images/9.jpeg',
    imageAlt: 'Live concert and music event',
    icon: Music,
  },
  {
    number: '03',
    title: 'Sporting Events',
    description:
      'Deliver high-energy sporting experiences with precision. From competitions to large public sporting events, every operational detail is carefully coordinated.',
    features: [
      'Sporting Events & Competitions',
      'Venue Operations',
      'Athlete & Guest Coordination',
      'Event Logistics & Management',
    ],
    image: '/images/5.jpeg',
    imageAlt: 'Large sporting event',
    icon: Trophy,
  },
  {
    number: '04',
    title: 'Public Celebrations',
    description:
      'Create memorable public experiences that bring communities together. We combine creative direction, production expertise, and flawless execution.',
    features: [
      'Public Celebrations',
      'Ceremonies & Special Events',
      'Community Events',
      'Live Streaming & Hybrid Events',
    ],
    image: '/images/8.jpeg',
    imageAlt: 'Public celebration event',
    icon: Sparkles,
  },
];

export const ServicePageServices: React.FC = () => {
  return (
    <section className="w-full bg-white">

      {/* =========================
          SECTION HEADING
      ========================== */}
      <div className="mx-auto flex w-full max-w-[1480px] flex-col items-center px-6 pb-16 pt-20 text-center sm:px-10 sm:pb-20 sm:pt-18 md:pt-20 lg:pb-22">

        {/* Decorative Line */}
        <div className="mb-8 h-px w-24 bg-[#06369c]/30 sm:mb-9 sm:w-28" />

        {/* Heading */}
        <h2
          className="
            font-serif
            text-[42px]
            font-normal
            leading-[1.05]
            tracking-[-0.025em]
            text-[#06369c]
            sm:text-[50px]
            md:text-[58px]
            lg:text-[64px]
          "
        >
          Our Services
        </h2>

      </div>

      {/* =========================
          SERVICES
      ========================== */}
      {services.map((service, index) => {
        const Icon = service.icon;

        // 01: Image Left / Content Right
        // 02: Content Left / Image Right
        // 03: Image Left / Content Right
        // 04: Content Left / Image Right
        const imageLeft = index % 2 === 0;

        return (
          <div
            key={service.number}
            className="mx-auto w-full max-w-[1480px]"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2">

              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className={`
                  w-full
                  ${imageLeft ? 'lg:order-1' : 'lg:order-2'}
                `}
              >
                <div
                  className="
                    h-[280px]
                    w-full
                    overflow-hidden
                    sm:h-[380px]
                    md:h-[470px]
                    lg:h-[601px]
                  "
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />
                </div>
              </div>

              {/* =========================
                  CONTENT
              ========================== */}
              <div
                className={`
                  flex
                  flex-col
                  items-start
                  px-6
                  py-10
                  sm:px-10
                  sm:py-12
                  md:px-14
                  lg:justify-center
                  lg:px-14
                  lg:py-16
                  xl:px-20
                  ${
                    imageLeft
                      ? 'lg:order-2'
                      : 'lg:order-1'
                  }
                `}
              >

                {/* Service Number */}
                <span
                  className="
                    mb-6
                    font-serif
                    text-[15px]
                    tracking-[0.15em]
                    text-[#06369c]/60
                    sm:mb-7
                    sm:text-[16px]
                  "
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    mb-7
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    bg-[#06369c]
                    sm:mb-8
                    sm:h-[57px]
                    sm:w-[57px]
                  "
                >
                  <Icon
                    className="
                      h-[25px]
                      w-[25px]
                      text-white
                      sm:h-[27px]
                      sm:w-[27px]
                    "
                    strokeWidth={1.6}
                  />
                </div>

                {/* Service Heading */}
                <h3
                  className="
                    mb-5
                    max-w-[520px]
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[1.08]
                    tracking-[-0.02em]
                    text-[#06369c]
                    sm:mb-6
                    sm:text-[40px]
                    md:text-[44px]
                    lg:text-[46px]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mb-7
                    max-w-[520px]
                    text-[15px]
                    font-normal
                    leading-[1.7]
                    text-[#315276]
                    sm:mb-8
                    sm:text-[16px]
                    md:text-[17px]
                  "
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-[13px]">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="
                        flex
                        items-start
                        text-[14px]
                        font-normal
                        leading-[1.5]
                        text-[#29496d]
                        sm:text-[15px]
                        md:text-[16px]
                      "
                    >
                      <span
                        className="
                          mr-3
                          mt-[7px]
                          h-[7px]
                          w-[7px]
                          flex-shrink-0
                          rounded-full
                          bg-[#06369c]
                          sm:mr-[17px]
                          sm:h-[8px]
                          sm:w-[8px]
                        "
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className="
                    group
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-[#06369c]
                    bg-[#06369c]
                    px-6
                    py-3.5
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#06369c]
                    sm:mt-10
                    sm:px-7
                    sm:py-4
                  "
                >
                  <span>Explore Service</span>

                  <ArrowUpRight
                    className="
                      h-[17px]
                      w-[17px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    strokeWidth={1.7}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicePageServices;
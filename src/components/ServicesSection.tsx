import React from 'react';
import { Users, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

const features = [
  'Conferences & Conventions (1000+)',
  'Music Festivals & Concerts',
  'Sporting Events & Competitions',
  'Public Celebrations & Ceremonies',
  'Multi-Venue Productions',
  'Live Streaming & Hybrid Events',
  'Global Event Coordination',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  imageSrc = '/images/11.png',
  imageAlt = 'Large conference hall setup with rows of tables and chairs',
}) => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-[180px]">

      <div className="mx-auto w-full max-w-[1480px]">

        {/* 
          MOBILE / TABLET:
          Image comes first
          
          DESKTOP:
          Content stays left and image stays right
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-2">

          {/* IMAGE
              Mobile: FIRST
              Desktop: RIGHT
          */}
          <div className="order-1 w-full lg:order-2">
            <div
              className="
                w-full
                overflow-hidden
                h-[280px]
                sm:h-[380px]
                md:h-[470px]
                lg:h-[601px]
              "
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>
          </div>

          {/* CONTENT
              Mobile: SECOND
              Desktop: LEFT
          */}
          <div
            className="
              order-2
              flex
              flex-col
              items-start
              px-6
              pt-10
              sm:px-10
              sm:pt-12
              md:px-14
              lg:order-1
              lg:px-0
              lg:pt-8
              xl:pt-8
            "
          >

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
              <Users
                className="h-[25px] w-[25px] text-white sm:h-[27px] sm:w-[27px]"
                strokeWidth={1.8}
              />
            </div>

            {/* Heading */}
            <h2
              className="
                mb-5
                font-serif
                text-[34px]
                font-normal
                leading-[1.08]
                tracking-[-0.02em]
                text-[#06369c]
                sm:mb-6
                sm:text-[38px]
                md:text-[42px]
              "
            >
              Large-Scale Events
            </h2>

            {/* Description */}
            <p
              className="
                mb-7
                max-w-[500px]
                text-[15px]
                font-normal
                leading-[1.7]
                text-[#315276]
                sm:mb-8
                sm:text-[16px]
                md:text-[18px]
              "
            >
              Orchestrate complex productions with thousands of attendees. Our expertise in
              logistics and crowd management ensures flawless execution at any scale.
            </p>

            {/* Features */}
            <ul className="space-y-3 sm:space-y-[13px]">
              {features.map((item, index) => (
                <li
                  key={index}
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

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* View All Services Button */}
            <a
              href="/services"
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
              <span>View All Services</span>

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
    </section>
  );
};

export default ServicesSection;
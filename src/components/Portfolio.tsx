import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioItem {
  number: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    number: '01',
    title: 'Global Leadership Summit',
    category: 'Conferences & Conventions',
    image: '/images/2.jpeg',
    alt: 'Large-scale corporate conference',
  },
  {
    number: '02',
    title: 'Live Music Festival',
    category: 'Music Festivals & Concerts',
    image: '/images/3.jpeg',
    alt: 'Large outdoor music festival',
  },
  {
    number: '03',
    title: 'Championship Experience',
    category: 'Sporting Events',
    image: '/images/4.png',
    alt: 'Large sporting event',
  },
  {
    number: '04',
    title: 'City Celebration',
    category: 'Public Celebrations',
    image: '/images/5.jpeg',
    alt: 'Large public celebration',
  },
  {
    number: '05',
    title: 'Executive Gathering',
    category: 'Corporate Events',
    image: '/images/6.png',
    alt: 'Premium corporate event gathering',
  },
  {
    number: '06',
    title: 'Multi-Venue Production',
    category: 'Special Events',
    image: '/images/7.png',
    alt: 'Large multi-venue event production',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24 md:py-28 lg:py-32">

      {/* =========================
          SECTION INTRO
      ========================== */}
      <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-10 lg:px-14">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            {/* Decorative Line */}
            <div className="mb-7 h-px w-24 bg-[#06369c]/30 sm:w-28" />

            {/* Heading */}
            <h2
              className="
                font-serif
                text-[44px]
                font-normal
                leading-[1]
                tracking-[-0.025em]
                text-[#06369c]
                sm:text-[52px]
                md:text-[60px]
                lg:text-[68px]
              "
            >
              Our Portfolio
            </h2>

            <p
              className="
                mt-6
                max-w-[600px]
                text-[15px]
                leading-[1.7]
                text-[#315276]
                sm:text-[16px]
                md:text-[17px]
              "
            >
              A selection of experiences we've brought to life for brands,
              organizations, communities, and audiences around the world.
            </p>
          </div>

        </div>
      </div>

      {/* =========================
          PORTFOLIO GRID
      ========================== */}
      <div
        className="
          mx-auto
          mt-14
          grid
          w-full
          max-w-[1480px]
          grid-cols-1
          gap-x-5
          gap-y-12
          px-6
          sm:mt-16
          sm:px-10
          md:grid-cols-2
          md:gap-y-16
          lg:mt-20
          lg:px-14
          lg:gap-x-7
          lg:gap-y-20
        "
      >
        {portfolioItems.map((item) => (
          <article
            key={item.number}
            className="group cursor-pointer"
          >

            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef1f6]">

              <img
                src={item.image}
                alt={item.alt}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#06369c]/0
                  transition-all
                  duration-500
                  group-hover:bg-[#06369c]/15
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  left-5
                  top-5
                  font-serif
                  text-sm
                  tracking-[0.12em]
                  text-white
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  drop-shadow-md
                "
              >
                {item.number}
              </span>

              {/* Arrow */}
              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  bg-white
                  text-[#06369c]
                  opacity-0
                  translate-y-2
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <ArrowUpRight
                  className="h-5 w-5"
                  strokeWidth={1.6}
                />
              </div>

            </div>

            {/* Project Information */}
            <div className="mt-5 flex items-start justify-between gap-5">

              <div>
                <h3
                  className="
                    font-serif
                    text-[25px]
                    font-normal
                    leading-[1.15]
                    tracking-[-0.015em]
                    text-[#06369c]
                    sm:text-[28px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#315276]
                    sm:text-[13px]
                  "
                >
                  {item.category}
                </p>
              </div>

              <span
                className="
                  pt-1
                  font-serif
                  text-[14px]
                  tracking-[0.1em]
                  text-[#06369c]/50
                "
              >
                {item.number}
              </span>

            </div>

          </article>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
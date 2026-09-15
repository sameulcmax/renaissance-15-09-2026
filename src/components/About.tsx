import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#123E9E] px-6 py-24 sm:min-h-[600px] md:min-h-[540px]">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        {/* Fine Decorative Line */}
        <div
  className="
    mb-10
    h-px
    w-[160px]
    bg-gradient-to-r
    from-transparent
    via-white
    to-transparent
    md:mb-11
  "
/>

        {/* Heading */}
        <h2 className=" text-[40px] font-normal leading-[1.1] tracking-[-0.025em] text-white sm:text-[48px] md:text-[58px] lg:text-[62px]">
          Three decades of creating
          <br />
          <span className="italic">extraordinary moments</span>
        </h2>

        {/* Body */}
        <div className="mt-9 max-w-[760px] text-[14px] font-light leading-[1.7] tracking-[0.01em] text-white/85 sm:text-[15px] md:text-[16px]">
          <p>
            For three decades, Renaissance Meetings &amp; Special Events has
            been a trusted partner for global brands, Fortune 500 companies,
            associations, Sports, non-profits, and visionary leaders seeking
            to create moments that transcend the ordinary.
          </p>

          <p className="mt-5">
            From intimate executive gatherings to large-scale productions
            reaching thousands, we bring expertise, creativity, and precision
            to every event.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
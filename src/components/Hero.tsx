import React from 'react';

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  videoSrc = '/images/final-video.mp4',
  posterSrc = '/images/5.jpeg',
}) => {
  return (
    <section
      className="
        relative
        w-full
        h-[500px]
        sm:h-[550px]
        md:h-[580px]
        lg:h-[650px]
        overflow-hidden
        bg-black
      "
    >
      {/* Hero Video */}
      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-10
          -translate-x-1/2
          sm:bottom-8
        "
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-8 w-px bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
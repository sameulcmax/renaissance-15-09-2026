
"use client";
import { motion } from "motion/react";
import { SITE } from "@/lib/site";

export function TellUsAboutNextRoom() {
  return (
    <section
      id="contact"
      className="border-t border-foreground/10 bg-white py-20 sm:py-24 md:py-22"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-12 md:items-end md:gap-10 lg:px-8">
        {/* LEFT */}
        <div className="md:col-span-7">

          <h2 className="display-xl mt-5 text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] text-[#06369c]">
            Tell us about
            <br className="hidden sm:block" />
            your next room.
          </h2>
        </div>
      </div>
    </section>
  );
}
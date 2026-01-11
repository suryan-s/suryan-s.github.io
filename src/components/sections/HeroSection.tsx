import React from 'react';
import { motion } from 'motion/react';
import { ScrambleText } from '../ui/ScrambleText';
import { Ring } from '../ui/Ring';

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
            {/* Floating Rings for Hero */}
            <Ring
                size="w-20 h-20 md:w-24 md:h-24"
                width="border-[16px] md:border-[20px]"
                color="border-[#0097a7]"
                className="left-[10%] md:left-[14%] top-[55%]"
                float={true}
                delay={0}
            />
            <Ring
                size="w-8 h-8 md:w-10 md:h-10"
                width="border-[8px] md:border-[10px]"
                color="border-[#00bcd4]"
                className="left-[30%] md:left-[34%] top-[38%]"
                float={true}
                delay={1.5}
            />
            <Ring
                size="w-10 h-10 md:w-14 md:h-14"
                width="border-[10px] md:border-[12px]"
                color="border-[#b2ebf2]"
                className="left-[42%] md:left-[45%] bottom-[18%] md:bottom-[22%]"
                float={true}
                delay={0.8}
            />
            <Ring
                size="w-12 h-12 md:w-16 md:h-16"
                width="border-[12px] md:border-[14px]"
                color="border-[#006064]"
                className="right-[25%] top-[25%]"
                opacity="opacity-80"
                float={true}
                delay={2}
            />

            {/* Content Container */}
            <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-12 h-full relative z-10">

                {/* Spacer & Info Column */}
                <div className="flex absolute md:relative inset-0 md:inset-auto md:col-span-5 h-full items-center pointer-events-none md:pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="md:-rotate-90 origin-center absolute bottom-8 left-8 md:bottom-auto md:left-12"
                    >
                        <div className="flex flex-col-reverse gap-1 text-gray-500 font-mono text-[10px] md:text-xs font-medium tracking-wide whitespace-nowrap leading-relaxed text-left md:text-right">
                            <span>// Full Stack Developer</span>
                            <span>// System Architecture & Design</span>
                            <span>// Based in India</span>
                        </div>
                    </motion.div>
                </div>

                {/* Main Hero Text */}
                <div className="col-span-1 md:col-span-7 flex flex-col justify-center pl-16 md:pl-0">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-mono text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[1.1]"
                    >
                        <ScrambleText text="Hello" delay={200} /><span className="text-[#ff4d4d]">.</span>
                        <br />
                        <ScrambleText text="I am" delay={800} />
                        <br />
                        <ScrambleText text="Suryan" delay={1400} />
                        <motion.span
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                times: [0, 0.5, 0.5, 1],
                                ease: "linear"
                            }}
                            className="text-[#ff4d4d] inline-block ml-2"
                        >_</motion.span>
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

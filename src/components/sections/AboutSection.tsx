import React from 'react';
import { motion } from 'motion/react';
import { Ring } from '../ui/Ring';
import { SkillsCard } from './about/SkillsCard';

export const AboutSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center py-20">
            <Ring
                size="w-16 h-16"
                width="border-[12px]"
                color="border-[#006064]"
                rounded="rounded-[1.5rem]"
                className="left-[18%] top-20 hidden md:block"
                float={true}
                delay={0.5}
            />
            <Ring
                size="w-12 h-12"
                width="border-[10px]"
                color="border-[#00bcd4]"
                rounded="rounded-[1rem]"
                className="right-[35%] top-[40%] hidden md:block"
                float={true}
                delay={1.2}
            />
            <Ring
                size="w-14 h-14"
                width="border-[12px]"
                color="border-[#0097a7]"
                rounded="rounded-[1.2rem]"
                className="left-[45%] bottom-20"
                float={true}
                delay={2.0}
            />

            <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 px-8 md:px-0">
                <div className="col-span-1 md:col-start-2 md:col-span-5 flex flex-col gap-12 pt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-bold leading-none tracking-tight"
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-sans">
                            Sys_
                            <br />
                            tem<span className="text-[#ff4d4d]">:</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-gray-400 text-sm md:text-base leading-relaxed max-w-lg"
                    >
                        <p className="mb-6">
                            I am a Full-Stack Engineer and System Architect based in India.
                        </p>
                        <p className="mb-6">
                            I specialize in designing scalable, high-performance distributed systems.
                            I am a fanatic of clean architecture and cloud-native solutions.
                        </p>
                        <p>
                            I love solving complex backend challenges and minimal design. Open source contributor.
                        </p>
                    </motion.div>
                </div>

                <div className="col-span-1 md:col-start-8 md:col-span-4 flex items-center">
                    <SkillsCard />
                </div>

            </div>
        </section>
    );
};

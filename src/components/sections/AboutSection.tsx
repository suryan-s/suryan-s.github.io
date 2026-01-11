import React from 'react';
import { motion } from 'motion/react';
import { Ring } from '../ui/Ring';

export const AboutSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center py-20">

            {/* Decorative Rings for Section 2 */}
            {/* Top Left Squircle */}
            <Ring
                size="w-16 h-16"
                width="border-[12px]"
                color="border-[#006064]"
                rounded="rounded-[1.5rem]"
                className="left-[18%] top-20 hidden md:block"
                float={true}
                delay={0.5}
            />
            {/* Middle Right Squircle */}
            <Ring
                size="w-12 h-12"
                width="border-[10px]"
                color="border-[#00bcd4]"
                rounded="rounded-[1rem]"
                className="right-[35%] top-[40%] hidden md:block"
                float={true}
                delay={1.2}
            />
            {/* Bottom Center Squircle */}
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

                {/* Left Column: Big Text & Bio */}
                {/* Aligned roughly with columns 2-3 (20%-60% zone) */}
                <div className="col-span-1 md:col-start-2 md:col-span-5 flex flex-col gap-12 pt-10">

                    {/* Big Text */}
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

                    {/* Bio Paragraph */}
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

                {/* Right Column: Skills Card */}
                {/* Floating in columns 8-10 area? */}
                <div className="col-span-1 md:col-start-8 md:col-span-4 flex items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full bg-[#111] border border-white/10 p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl"
                    >
                        {/* Tech Header */}
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                            <h3 className="text-lg font-mono font-bold text-gray-200 tracking-widest uppercase">
                                Kernel_Modules
                            </h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-8 font-mono text-sm">
                            {[
                                { id: 'arch', name: 'architecture.tar', status: 'LOADED', progress: 100 },
                                { id: 'full', name: 'fullstack_d', status: 'RUNNING', progress: 45 },
                                { id: 'dist', name: 'distributed.so', status: 'ACTIVE', progress: 72 },
                                { id: 'curr', name: 'curiosity.inf', status: 'OVERFLOW', progress: '∞' }
                            ].map((item, i) => (
                                <div key={item.id} className="group/skill">
                                    <div className="flex justify-between mb-2 text-gray-500 group-hover/skill:text-cyan-400 transition-colors text-xs font-medium">
                                        <span className="tracking-wide">
                                            <span className={`mr-2 ${item.status === 'OVERFLOW' ? 'text-[#ff4d4d]' : 'text-cyan-600'}`}>{'>'}</span>
                                            ./{item.name}
                                        </span>
                                        <span className={`${item.status === 'OVERFLOW' ? 'text-[#ff4d4d]' : 'text-cyan-600'} flex items-center gap-2`}>
                                            {item.status === 'RUNNING' && (
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="inline-block"
                                                >
                                                    ⠋
                                                </motion.span>
                                            )}
                                            {item.status === 'OVERFLOW' && (
                                                <motion.span
                                                    animate={{ opacity: [1, 0, 1] }}
                                                    transition={{ duration: 0.2, repeat: Infinity }}
                                                    className="inline-block font-bold"
                                                >
                                                    ⚠
                                                </motion.span>
                                            )}
                                            [{item.status}]
                                        </span>
                                    </div>

                                    {/* CLI-style Block Loader */}
                                    <div className={`w-full h-4 bg-[#0a0a0a] border relative overflow-hidden p-[2px] ${item.status === 'OVERFLOW' ? 'border-[#ff4d4d]/30' : 'border-white/10'}`}>
                                        {/* The Grid Overlay (creates the block segments) */}
                                        <div className="absolute inset-0 z-20 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_12px)] pointer-events-none" />

                                        {/* Loading Bar Content */}
                                        {item.status === 'RUNNING' || item.status === 'ACTIVE' ? (
                                            <motion.div
                                                className="h-full bg-cyan-500"
                                                initial={{ width: '0%' }}
                                                animate={{ width: ['0%', '100%'] }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: (t: number) => Math.floor(t * 20) / 20, // Steps makes it look like it's filling block by block
                                                    repeatDelay: 0.5
                                                }}
                                            />
                                        ) : item.status === 'LOADED' ? (
                                            <div className="h-full w-full bg-cyan-500/50" />
                                        ) : item.status === 'OVERFLOW' ? (
                                            <motion.div
                                                className="h-full bg-[#ff4d4d]"
                                                animate={{ width: ['100%', '102%', '98%', '100%'] }}
                                                transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                                            />
                                        ) : (
                                            <div className="h-full w-0 bg-cyan-500" />
                                        )}

                                        {/* Percentage Text Overlay (optional, creates that detailed CLI look) */}
                                        <div className="absolute right-1 top-0 bottom-0 flex items-center z-30">
                                            <span className={`text-[9px] font-bold bg-black/80 px-1 ${item.status === 'OVERFLOW' ? 'text-[#ff4d4d]' : 'text-cyan-500'}`}>
                                                {item.status === 'LOADED' ? '100%' : item.status === 'QUEUED' ? '0%' : ''}
                                                {(item.status === 'RUNNING' || item.status === 'ACTIVE') && (
                                                    <motion.span
                                                        animate={{ opacity: [1, 0.5, 1] }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                    >
                                                        {item.progress}%
                                                    </motion.span>
                                                )}
                                                {item.status === 'OVERFLOW' && (
                                                    <motion.span
                                                        animate={{ opacity: [1, 0.2, 1] }}
                                                        transition={{ duration: 0.1, repeat: Infinity }}
                                                    >
                                                        ∞%
                                                    </motion.span>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative footer */}
                        <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-[10px] text-gray-600 font-mono">
                            <span>PID: 8080</span>
                            <span>UPTIME: 99.999%</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

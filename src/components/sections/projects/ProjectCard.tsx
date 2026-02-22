import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from './projects-data';

type ProjectCardProps = {
    project: Project;
    isActive: boolean;
    onHoverStart: () => void;
    onTap: () => void;
};

export const ProjectCard = ({
    project,
    isActive,
    onHoverStart,
    onTap
}: ProjectCardProps) => {
    const collapsedTitleY = typeof window === 'undefined'
        ? "100%"
        : window.innerWidth >= 768
            ? "100%"
            : "0%";

    const borderColor = isActive
        ? 'rgba(255, 77, 77, 0.5)'
        : 'rgba(255, 255, 255, 0.1)';

    const displayTitle = project.title.replace('_', ' ');

    return (
        <motion.div
            layout
            onHoverStart={onHoverStart}
            onTap={onTap}
            initial={{ flex: 1 }}
            animate={{ flex: isActive ? 3 : 1 }}
            transition={{
                layout: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                flex: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
            }}
            className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] cursor-crosshair group min-w-[85vw] md:min-w-0 flex-shrink-0 md:flex-shrink snap-center"
            style={{ borderColor }}
        >
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,77,77,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className={`font-mono text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#ff4d4d]' : 'text-gray-600'}`}>
                        {project.id}
                    </span>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        className="text-[10px] font-mono border border-[#ff4d4d]/30 text-[#ff4d4d] px-2 py-1 rounded"
                    >
                        STATUS: SHIP
                    </motion.div>
                </div>

                <div className="relative h-full">
                    <motion.div
                        className="absolute bottom-16 left-0 md:bottom-0 md:left-0 md:origin-bottom-left md:-rotate-90 md:translate-y-full w-full md:w-[400px]"
                        animate={{
                            opacity: isActive ? 0 : 1,
                            y: collapsedTitleY
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="font-mono text-lg text-gray-400 tracking-widest whitespace-nowrap uppercase ml-0 md:ml-16 px-0 md:px-0">
                            {project.title}
                        </h3>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-0 left-0 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 20
                        }}
                        transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold font-sans mb-3 text-white">
                            {displayTitle}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                            {project.stack.map((tech) => (
                                <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1 text-[#ff4d4d]/80">
                                    "{tech}"
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                            <div className="text-xs text-gray-500 font-mono">
                                PERF_METRIC: <span className="text-[#ff4d4d]">{project.stat}</span>
                            </div>
                            <div className="ml-auto">
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#ff4d4d] group-hover:border-[#ff4d4d] transition-colors">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-6 right-6 md:hidden flex items-center gap-2 pointer-events-none"
                    animate={{
                        opacity: isActive ? 0 : 0.6,
                        x: [0, 5, 0]
                    }}
                    transition={{
                        opacity: { duration: 0.3 },
                        x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <span className="font-mono text-[10px] text-[#ff4d4d] tracking-widest">SWIPE</span>
                    <span className="text-[#ff4d4d] text-xs">→</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

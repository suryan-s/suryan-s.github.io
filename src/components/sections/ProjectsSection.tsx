import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const projects = [
        {
            id: "01",
            title: "DISTRIBUTED_LEDGER",
            desc: "High-throughput consensus algorithm implementation in Rust.",
            stack: ["Rust", "gRPC", "RocksDB"],
            stat: "50k TPS"
        },
        {
            id: "02",
            title: "NEURAL_VISUALIZER",
            desc: "Real-time WebGL visualization of neural network activation patterns.",
            stack: ["Three.js", "React", "Python"],
            stat: "60FPS"
        },
        {
            id: "03",
            title: "CLOUD_ORCHESTRATOR",
            desc: "Custom container orchestration system for edge computing nodes.",
            stack: ["Go", "Docker API", "Raft"],
            stat: "99.9% Uptime"
        },
        {
            id: "04",
            title: "DEFI_EXCHANGE",
            desc: "Decentralized exchange with automated market maker logic.",
            stack: ["Solidity", "Ethers.js", "GraphQL"],
            stat: "$2M TVL"
        },
        {
            id: "05",
            title: "SYSTEM_MONITOR",
            desc: "Kernel-level metrics collection and visualization dashboard.",
            stack: ["C++", "eBPF", "Next.js"],
            stat: "0.1% Overhead"
        }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-0 flex flex-col items-center">
            <div className="w-full max-w-7xl mb-12 px-4 md:px-8">
                <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-sans font-bold leading-none tracking-tight mb-8">
                    Pro_
                    <br />
                    jects<span className="text-[#ff4d4d]">:</span>
                </h2>
                <p className="text-gray-500 font-mono text-sm max-w-md">
                    Select a directory to inspect source code and deployment status.
                </p>
            </div>

            <div className="w-full max-w-7xl h-[500px] flex gap-4 md:gap-2 px-4 md:px-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-none">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        onHoverStart={() => window.innerWidth >= 768 && setHoveredIndex(index)}
                        onTap={() => setHoveredIndex(index)}
                        initial={{ flex: 1 }}
                        animate={{
                            flex: hoveredIndex === index ? 3 : 1,
                        }}
                        transition={{
                            layout: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                            flex: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
                        }}
                        className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] cursor-crosshair group min-w-[85vw] md:min-w-0 flex-shrink-0 md:flex-shrink snap-center"
                        style={{
                            borderColor: hoveredIndex === index ? 'rgba(255, 77, 77, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,77,77,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                        {/* Content Container */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">

                            {/* ID Header */}
                            <div className="flex justify-between items-start">
                                <span className={`font-mono text-xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-[#ff4d4d]' : 'text-gray-600'}`}>
                                    {project.id}
                                </span>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    className="text-[10px] font-mono border border-[#ff4d4d]/30 text-[#ff4d4d] px-2 py-1 rounded"
                                >
                                    STATUS: SHIP
                                </motion.div>
                            </div>

                            {/* Main Content */}
                            <div className="relative h-full">
                                {/* Collapsed Vertical Title (Horizontal on Mobile) */}
                                <motion.div
                                    className="absolute bottom-16 left-0 md:bottom-0 md:left-0 md:origin-bottom-left md:-rotate-90 md:translate-y-full w-full md:w-[400px]"
                                    animate={{
                                        opacity: hoveredIndex === index ? 0 : 1,
                                        y: window.innerWidth >= 768 ? "100%" : "0%"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="font-mono text-lg text-gray-400 tracking-widest whitespace-nowrap uppercase ml-0 md:ml-16 px-0 md:px-0">
                                        {project.title}
                                    </h3>
                                </motion.div>

                                {/* Expanded Content */}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        y: hoveredIndex === index ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.4, delay: hoveredIndex === index ? 0.1 : 0 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold font-sans mb-3 text-white">
                                        {project.title.replace('_', ' ')}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
                                        {project.desc}
                                    </p>

                                    {/* Tech Stack Array */}
                                    <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1 text-[#ff4d4d]/80">
                                                "{tech}"
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer Stats */}
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

                            {/* Mobile Swipe Indicator */}
                            <motion.div
                                className="absolute bottom-6 right-6 md:hidden flex items-center gap-2 pointer-events-none"
                                animate={{
                                    opacity: hoveredIndex === index ? 0 : 0.6,
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
                ))}
            </div>
        </section>
    );
};

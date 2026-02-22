import React from 'react';
import { motion } from 'motion/react';

type SkillStatus = 'LOADED' | 'RUNNING' | 'ACTIVE' | 'OVERFLOW';

type Skill = {
    id: string;
    name: string;
    status: SkillStatus;
    progress: number | '∞';
};

const skills: Skill[] = [
    { id: 'arch', name: 'architecture.tar', status: 'LOADED', progress: 100 },
    { id: 'full', name: 'fullstack_d', status: 'RUNNING', progress: 45 },
    { id: 'dist', name: 'distributed.so', status: 'ACTIVE', progress: 72 },
    { id: 'curr', name: 'curiosity.inf', status: 'OVERFLOW', progress: '∞' }
];

export const SkillsCard = () => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full bg-[#111] border border-white/10 p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl"
    >
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            <h3 className="text-lg font-mono font-bold text-gray-200 tracking-widest uppercase">
                Kernel_Modules
            </h3>
        </div>

        <div className="space-y-8 font-mono text-sm">
            {skills.map((skill) => (
                <SkillRow key={skill.id} skill={skill} />
            ))}
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-[10px] text-gray-600 font-mono">
            <span>PID: 8080</span>
            <span>UPTIME: 99.999%</span>
        </div>
    </motion.div>
);

const SkillRow = ({ skill }: { skill: Skill }) => {
    const statusColor = skill.status === 'OVERFLOW' ? 'text-[#ff4d4d]' : 'text-cyan-600';
    const borderClass = skill.status === 'OVERFLOW' ? 'border-[#ff4d4d]/30' : 'border-white/10';

    return (
        <div className="group/skill">
            <div className="flex justify-between mb-2 text-gray-500 group-hover/skill:text-cyan-400 transition-colors text-xs font-medium">
                <span className="tracking-wide">
                    <span className={`mr-2 ${statusColor}`}>{'>'}</span>
                    ./{skill.name}
                </span>
                <span className={`${statusColor} flex items-center gap-2`}>
                    {skill.status === 'RUNNING' && (
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                        >
                            ⠋
                        </motion.span>
                    )}
                    {skill.status === 'OVERFLOW' && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.2, repeat: Infinity }}
                            className="inline-block font-bold"
                        >
                            ⚠
                        </motion.span>
                    )}
                    [{skill.status}]
                </span>
            </div>

            <div className={`w-full h-4 bg-[#0a0a0a] border relative overflow-hidden p-[2px] ${borderClass}`}>
                <div className="absolute inset-0 z-20 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_12px)] pointer-events-none" />

                {skill.status === 'RUNNING' || skill.status === 'ACTIVE' ? (
                    <motion.div
                        className="h-full bg-cyan-500"
                        initial={{ width: '0%' }}
                        animate={{ width: ['0%', '100%'] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: (t: number) => Math.floor(t * 20) / 20,
                            repeatDelay: 0.5
                        }}
                    />
                ) : skill.status === 'LOADED' ? (
                    <div className="h-full w-full bg-cyan-500/50" />
                ) : skill.status === 'OVERFLOW' ? (
                    <motion.div
                        className="h-full bg-[#ff4d4d]"
                        animate={{ width: ['100%', '102%', '98%', '100%'] }}
                        transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                    />
                ) : (
                    <div className="h-full w-0 bg-cyan-500" />
                )}

                <div className="absolute right-1 top-0 bottom-0 flex items-center z-30">
                    <span className={`text-[9px] font-bold bg-black/80 px-1 ${skill.status === 'OVERFLOW' ? 'text-[#ff4d4d]' : 'text-cyan-500'}`}>
                        {skill.status === 'LOADED' ? '100%' : skill.status === 'QUEUED' ? '0%' : ''}
                        {(skill.status === 'RUNNING' || skill.status === 'ACTIVE') && (
                            <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                {skill.progress}%
                            </motion.span>
                        )}
                        {skill.status === 'OVERFLOW' && (
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
    );
};

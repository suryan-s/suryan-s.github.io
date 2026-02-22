import React from 'react';
import { motion } from 'motion/react';

export const VerticalSocials = () => {
    const socialLinks = {
        'GITHUB': 'https://github.com/suryan-s',
        'LINKEDIN': 'https://www.linkedin.com/in/suryansanal/',
        'INSTAGRAM': 'https://www.instagram.com/me_suryan/'
    };

    return (
        <nav className="fixed right-2 md:right-10 top-1/2 -translate-y-1/2 flex flex-row-reverse items-center gap-16 z-30 [writing-mode:vertical-rl] rotate-180 mix-blend-difference text-white">
            {['GITHUB', 'LINKEDIN', 'INSTAGRAM'].map((item, i) => (
                <motion.a
                    key={item}
                    href={socialLinks[item as keyof typeof socialLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="hover:text-cyan-400 transition-colors duration-300 text-[10px] md:text-xs font-bold tracking-[0.25em] whitespace-nowrap py-2"
                >
                    {item}
                </motion.a>
            ))}
        </nav>
    );
};
